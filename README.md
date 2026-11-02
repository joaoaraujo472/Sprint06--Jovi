# Jovi — Câmera Inteligente + Site Institucional

Projeto único que reúne as duas entregas do Challenge FIAP:

1. **Landing page institucional** (Grid, HTML semântico e responsividade) — seções
   *A Solução*, *Público-Alvo*, *Galeria*, *Nossa Equipe* e *Contato*.
2. **Aplicativo React** migrado do protótipo original em HTML/CSS/JS puro
   (login → onboarding → grade de 9 modos de câmera → slideshow com câmera real).

O app React não é mais um projeto separado: ele roda **ao vivo, embutido dentro
do mockup de celular** da própria landing page, na seção **"Experimente agora"**
(`#experimente`). É o mesmo componente, com a mesma paleta e tipografia do site.

## Tecnologias utilizadas

- **React 19** + **Vite** — componentes funcionais, hooks (`useState`, `useEffect`, `useMemo`)
- **CSS puro** — Grid (layout do site), Flexbox (layout do app), variáveis CSS compartilhadas entre site e app
- **HTML semântico** (`header`, `nav`, `main`, `section`, `article`, `address`, `footer`)
- **`localStorage`** — login persistente e progresso salvo (modos de câmera já explorados)
- **`Math`** — `Math.round` (percentual de progresso) e `Math.random`/`Math.floor` (sorteio da "dica do dia")
- **`getUserMedia()`** — acesso à câmera real do dispositivo (comparação antes/depois)
- **`Tesseract.js`** — OCR ao vivo no Modo Documento

## Estrutura do projeto

```
src/
  site/site.css              → estilos do site institucional (Grid, tipografia, cores)
  App.css                    → estilos do app de câmera (tema escuro "tela de celular")
  utils/storage.js           → localStorage + Math (progresso e dica do dia)
  data/modes.js              → dados dos 9 modos de câmera
  hooks/useCamera.js         → hook de acesso à câmera real
  components/
    Home.jsx                  → a landing page inteira (todas as seções + menu)
    CameraApp.jsx              → estado global do app (tela atual, usuário, modo)
    Login.jsx / Onboarding.jsx / ModesGrid.jsx / ModeCard.jsx / AppHeader.jsx / Logo.jsx
    icons/ModeIcons.jsx        → ícones SVG de cada modo
    camera/                    → as 4 telas do slideshow de cada modo
  App.jsx                     → renderiza a Home (o app fica embutido dentro dela)
public/assets/screens/        → screenshots reais do protótipo, usadas na landing page
```

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Acesse o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## Usuários e senhas para teste

O login do app **não usa senha nem autenticação real** — é só uma personalização
da experiência (protótipo educacional). Para testar:

- **Nome completo:** qualquer nome com 3 ou mais caracteres (ex.: `Maria Silva`)
- **RM:** qualquer número com 5 ou mais dígitos (ex.: `12345`)

Depois do primeiro login, o navegador guarda o usuário no `localStorage` — ao
recarregar a página, ele pula direto para a grade de modos. Para testar o
fluxo de login/onboarding novamente, use o botão **"Sair da conta"** dentro do
app (ele limpa o `localStorage`), ou abra em uma aba anônima.

O navegador também vai pedir **permissão de câmera** nos slides de
antes/depois e no scanner do Modo Documento — se a permissão for negada, o
app mostra uma mensagem de erro, mas o restante da experiência continua
funcionando normalmente.

## Onde e como a IA foi utilizada no projeto

A IA (Claude, da Anthropic) foi usada como apoio ao longo do desenvolvimento:
na migração do protótipo original em HTML/CSS/JS puro para componentes
funcionais em React (organização em pastas, separação de responsabilidades
entre `Login`, `Onboarding`, `ModesGrid` e as telas de câmera); na implementação
das funcionalidades de `localStorage` (persistência de login e progresso) e de
`Math` (cálculo de progresso e sorteio da dica do dia); e na fusão final dos
dois projetos da equipe (o site institucional e o app React) em um único
projeto, incluindo a conversão da landing page de HTML puro para JSX e os
ajustes de CSS para os dois projetos compartilharem a mesma paleta de cores
sem conflitos. Todo o código gerado foi revisado, testado e ajustado pela
equipe antes da entrega.

## Links

- **Repositório GitHub:** `[cole aqui o link do repositório]`
- **Deploy na Vercel:** `[cole aqui o link do deploy]`

> Para publicar: crie um repositório no GitHub, suba este projeto (`git init`,
> `git add .`, `git commit`, `git push`), depois importe o repositório em
> [vercel.com/new](https://vercel.com/new) — o Vercel detecta o projeto Vite
> automaticamente (`npm run build`, pasta de saída `dist`). Depois do deploy,
> substitua os dois links acima pelos links reais antes de gerar o .ZIP final.

## Integrantes

Ver arquivo `INTEGRANTES.TXT` na raiz do projeto.
