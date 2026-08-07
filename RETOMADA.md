# FOLIO-2019 — Notas de retomada (contexto da sessão)

## IMPORTANTE: Projetos movidos para fora do OneDrive (07/08)

- Os projetos foram movidos de `C:\Users\rosan\OneDrive\Área de Trabalho\` para **`C:\Projetos\`** (folio-2019 e folio-2025) para acabar com a sincronização de `node_modules` no OneDrive, que consumia RAM/CPU enorme e causava travamentos.
- Dev servers agora rodam a partir de `C:\Projetos\folio-2019` (porta 5174) e `C:\Projetos\folio-2025` (porta 5173).

## Diagnóstico de travamento na seção Projects (07/08 — EM ANDAMENTO)

- **Sintoma**: a cena roda a 60 fps na intro (medido via Chrome headless/CDP), mas **trava ao navegar até a seção Projects** (mesmo com 46→12 projetos, pixelRatio limitado a 1.5, assets reduzidos, OneDrive fora e RAM folgada).
- **WebGL confirma usar NVIDIA GTX 1650** (ANGLE/D3D11). Não é GPU errada.
- **Hipótese atual**: texturas/imagens dos projetos (capas `slideA.jpg` + pisos `floorTexture.png`). 
- **Teste de isolamento APLICADO** (não reverter ainda): em `src/javascript/World/Sections/Project.js` foi desativado o carregamento de imagem do board (`setBoards`) e o `alphaMap` do piso (`setFloor`, agora cor sólida). Objetivo: navegar até Projects sem nenhuma textura e verificar se trava.
  - Se **não** travar → causa confirmada = texturas/imagens.
  - Se **ainda** travar → causa é geometria/física/draw calls (aprofundar).
- **Como reverter o isolamento**: reativar o bloco `const image = new Image()` em `setBoards` e devolver o `alphaMap: this.floor.texture` em `setFloor`.
- **Nova localização dos arquivos**: `C:\Projetos\folio-2019\...` (os caminhos no topo deste arquivo referem-se a essa base).
- Chrome foi forçado para a NVIDIA via registro (`HKCU\Software\Microsoft\DirectX\UserGpuPreferences` → `chrome.exe = GpuPreference=2`).

## Últimas alterações (CONCLUÍDAS e commitadas — commit `a15c2ff`, push em origin/master)

- **Letreiro "MAGROS ZAPATERO" na intro 3D concluído.** `src/javascript/World/Sections/IntroSection.js` → `setTitles()` monta as palavras `MAGROS` e `ZAPATERO` a partir das letras GLB com `offset.x` calculado pela largura real de cada letra (M .907, A .933, T .860, R .731, O .955, S .674, Z .725, P .716, E .664, G .788), gap 0.4, layout centrado em x≈0. **Nota:** verificação visual pendente no 5174 (ver "Onde paramos" abaixo se algo não encaixar).
- **Favicons substituídos pela logo do GitHub** (`https://github.com/majinmagros.png`) em `static/favicon/` e `src/favicon/` (PNG 16/32/180/192/256/270 + ICO 16/32/48 + safari-pinned-tab.svg). **IMPORTANTE:** existem DUAS pastas espelho — `static/favicon/` e `src/favicon/` — e o Vite (`root: 'src/'`) serve a de `src/`. Ao alterar favicons, SEMPRE sincronizar as duas.
- **Título da aba do navegador corrigido.** `src/javascript/Application.js` → `setTitle()` agora rola o texto "Magros Zapatero" no `document.title` (antes eram sublinhados + emoji, que parecia "BS").
- **Limpeza do branding:** removidas menções a "Bruno" de `readme.md`, `license.md`, `package.json`, `package-lock.json`, `site.webmanifest` (2019) e `static/favicons/site.webmanifest` (2025). Nome do pacote → `magros-folio-2019`.

## Folio-2025 (CONCLUÍDO — commit `9ba0823`, push em origin/main)

- `sources/Game/World/Areas/TimeMachineArea.js:27`: o botão "Time Machine" agora abre `http://localhost:5174` (dev server do folio-2019) em vez do repositório GitHub.
- `static/favicons/site.webmanifest`: rebranding (name/short_name "Bruno's" → "Magros Zapatero's").

## Limpeza da máquina (18/05 — fora dos repositórios)

- RAM crítica (0.36 GB livres / 7.8 GB). Encerrados: Docker Desktop, Steam, Avast SecureLine, processos `msedgewebview2` (27→8).
- Desativados do boot (HKCU Run): Docker Desktop, Steam, autolaunch Chrome, autolaunch Edge. Mantidos: OneDrive, Microsoft.Lists, Windows USB Display.
- Serviço Avast SecureLine configurado para `start= demand` (via comando admin).
- Disco: OK (81 GB livres).

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