# FOLIO-2019 — Notas de retomada (contexto da sessão)

## IMPORTANTE: Projetos movidos para fora do OneDrive (07/08)

- Os projetos foram movidos de `C:\Users\rosan\OneDrive\Área de Trabalho\` para **`C:\Projetos\`** (folio-2019 e folio-2025) para acabar com a sincronização de `node_modules` no OneDrive, que consumia RAM/CPU enorme e causava travamentos.
- Dev servers rodam a partir de `C:\Projetos\folio-2019` e `C:\Projetos\folio-2025`.

## Contexto dos servidores (ATUALIZADO)

- **5173** = `folio-2019` (principal, Time Machine / render 2019).
- **5174** = `folio-2019` (segunda instância com `--strictPort`, usada para testes paralelos).
- **5175** = `folio-2025` (portfolio "novo"; o Vite pega a primeira porta livre, já que 5173/5174 estão ocupadas).
- Para subir um servidor de teste extra: `npx vite --port 5174 --strictPort` dentro da pasta do projeto.

## Travamento na seção Projects — CAUSA ENCONTRADA E CORRIGIDA (07/08)

- **Sintoma**: a cena rodava a 60 fps na intro (medido via Chrome headless/CDP), mas travava ao navegar até a seção Projects (mesmo com 46→12 projetos, pixelRatio limitado a 1.5, assets reduzidos, OneDrive fora e RAM folgada).
- **WebGL confirma usar NVIDIA GTX 1650** (ANGLE/D3D11). Não é GPU errada.
- **Causa raiz**: as **texturas de piso** (`floorTexture`) dos projetos — 46 texturas pequenas (47–58 KB) enviadas simultaneamente ao GPU ao entrar na seção. Testes A/B confirmaram: `'none'` não trava, `'floor'` trava, `'slides'` (1 textura) não trava.
- **Solução aplicada**:
  1. Removidas **todas** as 46 `floorTexture` (de `Resources.js`, da lista do `ProjectsSection` e de cada `Project.js`). O piso agora é cor sólida quente **`0xf5aa58`** (`Project.js`), alinhado ao gradiente laranja do Floor global.
  2. **Lazy-load das capas dos slides** por proximidade (`car.position` via `time.on('tick')`, distância < 40u) em `Project.js`.
  3. Corrigido `flipY = true` nas texturas dos slides (estavam de cabeça para baixo).
- Commits: `239e1ad` (lazy-load + remoção), `5d9893a` (piso quente), `1b60e7b` (README sem menção a floorTexture). Push em origin/master.
- **Não há** texto no chão (decisão do usuário após o teste de textura única também travar).

## Atividades (seção Information)

- `static/models/information/static/activities.png` (1024×512, 8bpp indexado) regerado via System.Drawing com novas experiências em maiúsculas; fonte ArAll 52 (título) / 30 (itens); backup do original em `%TEMP%\opencode\activities_original.png`.

## Remoção do diorama "França" na seção Information (CONCLUÍDO — commit `ce6c00c`)

- Foram removidos: **Torre Eiffel** (`shadeGray.007`), **bandeira da França** (mastro `shadeWhite.111`/`shadeWhite` + listras `shadeWhite.112`/`shadeRed.005`/`shadeBlue`), **pin vermelho** (`shadeRed.001`) e as **2 baguetes** (GLB separado, `setBaguettes` comentado no constructor).
- **Método**: filtro em runtime no JS (`InformationSection.removeFranceElements()`), removendo meshes cuja **posição de mundo** cai na região do diorama (x ∈ [-7,-3], y ∈ [4,7.5]) — aplicado às cenas visual e de colisão. O binário `.glb` **não foi editado** (reversível).
- Atenção: filtro por **nome** não funcionou (os nomes no Three.js não correspondiam aos nós do GLB); **por posição** resolveu.

## Mascote/assistente — aponta para a playlist do YouTube (CONCLUÍDO — commit `ff1e450`)

- `src/index.html`:
  - 1ª mensagem: "Hey! You seem to really enjoy my music."
  - 2ª mensagem: "Would you like to know my sets?"
  - Botão Sim ("Yes, show me!") abre a playlist: `https://youtube.com/playlist?list=PLiIX1vnlWWNEFPed7oDm38alCAH0oyJek`
  - Botão "Nah, I'm good" mantido.
- `src/javascript/ThreejsJourney.js` (`setLog`): console agora divulga a mesma playlist.

## Letreiro "MAGROS ZAPATERO" na intro 3D (PAUSADO, NÃO concluído)

- `IntroSection.js` → `setTitles()` monta as palavras `MAGROS` e `ZAPATERO` a partir das letras GLB (`introMBase`, `introABase`, etc.) com `offset.x` calculado pela largura real de cada letra, gap 0.4, layout centrado em x≈0.
- Build passa, **mas não renderizou corretamente**. **PAUSADO por decisão do usuário.**
- Suspeita na volta: as letras têm posição "baked" no mundo (ex. M em x=-43.46, z=2.725) e **não possuem marcador `center_*`**, então o `Objects.add` não re-centraliza; os offsets precisam amortizar a posição baked x de cada GLB, ou reposicionar y/z também.

## Rebranding e infra (CONCLUÍDO)

- **Favicons** substituídos pela logo do GitHub (`https://github.com/majinmagros.png`) em `static/favicon/` e `src/favicon/`. **IMPORTANTE:** existem DUAS pastas espelho — `static/favicon/` e `src/favicon/` — e o Vite (`root: 'src/'`) serve a de `src/`. Ao alterar favicons, SEMPRE sincronizar as duas.
- **Título da aba**: `src/javascript/Application.js` → `setTitle()` rola o texto "Magros Zapatero" no `document.title`.
- **Limpeza de branding**: removidas menções a "Bruno" de `readme.md`, `license.md`, `package.json`, `package-lock.json`, `site.webmanifest` (2019) e `static/favicons/site.webmanifest` (2025). Nome do pacote → `magros-folio-2019`.

## Folio-2025

- `sources/Game/World/Areas/TimeMachineArea.js:27`: o botão "Time Machine" abre `http://localhost:5173` (dev server do folio-2019) em vez do repositório GitHub.
- `static/favicons/site.webmanifest`: rebranding (name/short_name → "Magros Zapatero's").

## Limpeza da máquina (18/05 — fora dos repositórios)

- RAM crítica (0.36 GB livres / 7.8 GB). Encerrados: Docker Desktop, Steam, Avast SecureLine, processos `msedgewebview2` (27→8).
- Desativados do boot (HKCU Run): Docker Desktop, Steam, autolaunch Chrome, autolaunch Edge. Mantidos: OneDrive, Microsoft.Lists, Windows USB Display.
- Serviço Avast SecureLine configurado para `start= demand` (via comando admin).
- Chrome forçado para a NVIDIA via registro (`HKCU\Software\Microsoft\DirectX\UserGpuPreferences` → `chrome.exe = GpuPreference=2`).
- Disco: OK (81 GB livres).
