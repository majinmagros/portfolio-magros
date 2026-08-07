# FOLIO-2019 — Notas de retomada (contexto da sessão)

## Projetos (CONCLUÍDO) — seção de projetos substituída pelos vídeos da playlist

- A seção de projetos do folio-2019 (server 5174) foi populada com **todos os 46 vídeos** da playlist do usuário (lista `PLiIX1vnlWWNEFPed7oDm38alCAH0oyJek`).
- Para cada vídeo foi criada a pasta `static/models/projects/<id>/` contendo:
  - `floorTexture.png` (2048×1024, texto do chão) = **título + trecho da descrição** do vídeo.
  - `slideA.jpg` = thumbnail/capa baixada do YouTube (maxresdefault/hqdefault).
- `src/javascript/Resources.js`: adicionadas as 46 texturas de chão (`projectsVid1Floor` … `projectsVid46Floor`).
- `src/javascript/World/Sections/ProjectsSection.js`: lista `setList()` substituída pelos 46 vídeos (name, imageSources, floorTexture, link do YouTube). O link `open` abre o vídeo correto.
- Nomes dados aos 3 vídeos sem título: `kwezBVvpE4Y` → "Description"; `_SR8QLn7gVU` → "Greek MythForbidden (The Best from Greek Myth)"; `4lYllo4L0d8` → "24 de maio de 2026".
- Build passou (92 módulos, sem erros). Dev server 5174 já rodando — reflete as mudanças.
- Dataset e scripts intermediários em `%TEMP%\opencode\`: `projects_data_final.json`, `generate_assets.py`, `gen_js.py`, etc.

## Onde paramos (pausado, NÃO concluído)

**Tarefa: renderizar "MAGROS ZAPATERO" na intro 3D do folio-2019 (localhost:5174).**

- Arquivo: `C:\Users\rosan\OneDrive\Área de Trabalho\folio-2019\src\javascript\World\Sections\IntroSection.js` — método `setTitles()`.
- Abordagem: reescrevi para montar as palavras `MAGROS` e `ZAPATERO` a partir de letras GLB (`introMBase`, `introABase`, etc.) com `offset.x` calculado pela largura real de cada letra (medida via parse do GLB: M .907, S .674, E .664, etc.), gap configurável = 0.4, layout centrado em x≈0.
- Build passou (92 módulos, sem erros). **MAS não renderizou corretamente no 5174.**
- Estado: **PAUSADO por decisão do usuário para não consumir muito tempo. Retornar depois.**
- Suspeita a investigar na volta: as letras têm posição "baked" no mundo (nó `shadeWhite`, ex. M em x=-43.46, z=2.725) e **não possuem marcador `center_*`**, então o `Objects.add` (getConvertedMesh) não re-centraliza; o `offset` é somado à posição baked. Pode ser que os offsets precisem amortizar a posição baked x de cada GLB, ou reposicionar y/z também.

## Contexto dos dois servidores

- 5173 = `folio-2025` (portfolio principal, mundo novo). 5174 = `folio-2019` (Time Machine / render 2019).
- A tarefa de "exibir a descrição do vídeo em cada chão/projeto" foi concluída conforme acima no folio-2019.