const B = "https://static.prod-images.emergentagent.com/jobs/1d9da720-00db-486d-9473-eef51b179d2e/images";

export const IMAGES = {
  hero: `${B}/2723a238f07aafac9309c8a001afd2444511ef757d1ebba6368d7690f08b5eb9.jpeg`,
  amber: `${B}/05b80904a50683e150641ed6f7517a9d6a6f13346433a939b31f8a6e5df5fd63.jpeg`,
  neroli: `${B}/e281e8553af1b66ebfdff1c360b3f0d1dd626339b32b194271003ac539c75709.jpeg`,
  oud: `${B}/0e8fccc0bfb67b739559c1813a224d81f36a748d58670fd6770462b331b944e3.jpeg`,
  vetiver: `${B}/3440789f5a99ebcbd318cbd00354518d8df72f4d1c82350cd5468f832684f806.jpeg`,
  rose: `${B}/6e8825c50176cc61ed5d25a3ab1da4471193ee2edb5b3d1fb5698a9968d9b822.jpeg`,
  atelier: `${B}/58fd4a12f699eaa93a281a5f6865566a6ae0fb4cc058f19f816ee9d9710490a2.jpeg`,
  ingredients: `${B}/9350a6c131045445b16aad482d8abc4b833d302a4e54b1983d64295e23984f72.jpeg`,
};

export const PRODUCTS = [
  {
    id: "ambar-nocturno",
    index: "N°01",
    name: "Âmbar Nocturno",
    notes: "Âmbar · Baunilha · Fumaça de Incenso",
    family: "Oriental Amadeirado",
    img: IMAGES.amber,
    ratio: "aspect-[3/4]",
  },
  {
    id: "rosa-cinza",
    index: "N°02",
    name: "Rosa Cinza",
    notes: "Rosa de Damasco · Pimenta Rosa · Musgo",
    family: "Floral Mineral",
    img: IMAGES.rose,
    ratio: "aspect-square",
  },
  {
    id: "vetiver-sombrio",
    index: "N°03",
    name: "Vetiver Sombrio",
    notes: "Vetiver do Haiti · Couro · Cedro",
    family: "Amadeirado Seco",
    img: IMAGES.vetiver,
    ratio: "aspect-[3/4]",
  },
  {
    id: "neroli-blanc",
    index: "N°04",
    name: "Neroli Blanc",
    notes: "Flor de Laranjeira · Bergamota · Almíscar Branco",
    family: "Cítrico Floral",
    img: IMAGES.neroli,
    ratio: "aspect-square",
  },
  {
    id: "oud-celestial",
    index: "N°05",
    name: "Oud Celestial",
    notes: "Oud · Açafrão · Âmbar Cinza",
    family: "Oriental Precioso",
    img: IMAGES.oud,
    ratio: "aspect-[3/4]",
  },
];

export const CHAPTERS = [
  {
    num: "01",
    title: "A matéria-prima é sagrada",
    body: "Colhemos ingredientes de um punhado de produtores no mundo — a rosa de Grasse, o vetiver do Haiti, o oud de Assam. Cada colheita é uma safra, tratada com o rigor de um vinho raro.",
  },
  {
    num: "02",
    title: "O tempo como ingrediente",
    body: "Nenhuma fragrância deixa o ateliê antes de repousar seis meses. A maceração lenta permite que as notas se conheçam, se contradigam e finalmente concordem.",
  },
  {
    num: "03",
    title: "A assinatura invisível",
    body: "Um perfume não se vê — permanece. O sillage que você deixa ao atravessar uma sala é a única obra de arte que carregamos sobre a pele.",
  },
];
