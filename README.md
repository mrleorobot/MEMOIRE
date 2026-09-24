# MÉMOIRE

Vitrine de perfumaria autoral com catálogo de fragrâncias, páginas de produto e sacola. O projeto explora composição editorial, narrativa visual e movimento.

[Visualizar projeto](https://memoire-nine-psi.vercel.app) · [Portfólio](https://mrleorobot.github.io/)

## Recursos

- Página inicial com coleção, manifesto e apresentação do ateliê.
- Páginas individuais de fragrâncias.
- Página de descoberta.
- Sacola com quantidades e subtotal, armazenada no navegador.
- Transições com Framer Motion e rolagem com Lenis.

O catálogo é definido em [frontend/src/data.js](frontend/src/data.js), e a sacola usa `localStorage`.

## Tecnologias

React, JavaScript, React Router, Tailwind CSS, Framer Motion e Lenis. O frontend usa Create React App com CRACO e está integrado a um workspace pnpm.

## Executar localmente

Requisitos: Node.js e pnpm. A versão de pnpm está indicada no [package.json](package.json) da raiz.

```bash
git clone https://github.com/mrleorobot/MEMOIRE.git
cd MEMOIRE
pnpm install
pnpm start
```

Abra o endereço exibido pelo servidor no terminal.

Para gerar os arquivos de produção:

```bash
pnpm build
```

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| [frontend/src/pages/](frontend/src/pages/) | Início, descoberta e páginas de produto |
| [frontend/src/components/](frontend/src/components/) | Componentes da experiência visual |
| [frontend/src/context/BagContext.jsx](frontend/src/context/BagContext.jsx) | Estado e persistência da sacola |
| [frontend/src/data.js](frontend/src/data.js) | Catálogo e imagens |
| [frontend/src/hooks/](frontend/src/hooks/) | Hooks de interface e rolagem |
| [pnpm-workspace.yaml](pnpm-workspace.yaml) | Configuração do workspace |
| [vercel.json](vercel.json) | Configuração de publicação |

## Licença

MIT © Leonilson Souza
