# MÉMOIRE — Maison de Parfum (Landing Page)

## Problem Statement
Landing page responsiva (Tailwind CSS) para marca de perfumes de luxo. Estética fine-art/editorial: fundo off-white creme, texto cinza grafite. Hero gigante com fonte serifada (Playfair Display) sobre imagem 80vh com bordas arredondadas. Grid masonry assimétrico. Zoom sutil/lento no hover, botões outline que preenchem de preto no hover, ícones Lucide. Nível Awwwards.

## User Choices
- Nomes/descrições fictícios elegantes · Imagens de produto geradas por IA · Só landing page (estática) · Português

## Architecture
- Frontend only: React 19 + Tailwind. Sem backend/DB necessário.
- Motion: framer-motion (reveals, parallax, masked hero) + @studio-freight/lenis (smooth scroll) + react-fast-marquee.
- Fonts: Playfair Display (serif) + Inter (sans) via Google Fonts.
- Cores custom no tailwind.config: cream #F9F8F6, graphite #1A1A1A, ash #4A4A4A, hairline #D1CFCA.
- Imagens IA hospedadas (URLs em src/data.js).

## Implemented (Jun 2026)
- Nav fixo com glassmorphism ao rolar.
- Hero cinético: título "A memória tem perfume" com reveal mascarado linha-a-linha, imagem 80vh rounded-2xl com parallax + CTA outline.
- Ticker marquee editorial lento.
- Collection: grid masonry assimétrico (5 produtos), zoom lento no hover (duration 2200ms), overlay N°/ícone.
- Manifesto: 3 capítulos numerados com imagem sticky.
- Ateliê: seção com parallax de imagem + botão outline.
- Footer grafite escuro com grão, newsletter (client-side, sem backend), links.
- Todos elementos interativos com data-testid.

## Verified
- DOM 6663px, 5 product cards, 0 console errors. Footer bg graphite confirmado. Screenshots de todas as seções OK.

## Backlog (P1/P2)
- P1: Página de produto individual / detalhe.
- P2: Newsletter conectada a backend real (Resend).
- P2: Menu mobile (hamburger) — nav links ocultos em < md.
- P2: Cursor customizado e transição de página.
