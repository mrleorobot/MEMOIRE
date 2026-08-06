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
    concentration: "Extrait de Parfum · 22%",
    volume: "100 ml",
    price: "R$ 890",
    tagline: "A escuridão que aquece.",
    story:
      "Nascido de uma noite de inverno em Grasse, Âmbar Nocturno é a memória de uma lareira que se apaga lentamente. O âmbar cristalizado encontra a baunilha bourbon e a fumaça de incenso oriental, construindo um sillage que permanece na pele como brasa que recusa a extinguir-se.",
    pyramid: {
      topo: ["Bergamota da Calábria", "Pimenta Preta"],
      coracao: ["Âmbar Cinza", "Rosa Turca", "Canela"],
      fundo: ["Baunilha Bourbon", "Incenso", "Sândalo"],
    },
  },
  {
    id: "rosa-cinza",
    index: "N°02",
    name: "Rosa Cinza",
    notes: "Rosa de Damasco · Pimenta Rosa · Musgo",
    family: "Floral Mineral",
    img: IMAGES.rose,
    ratio: "aspect-square",
    concentration: "Eau de Parfum · 18%",
    volume: "100 ml",
    price: "R$ 760",
    tagline: "Uma rosa esculpida em pedra.",
    story:
      "Rosa Cinza recusa o floral óbvio. A rosa de Damasco é despida de seu açúcar e assentada sobre musgo húmido e minerais frios, como uma flor esquecida sobre mármore. É a elegância da contenção — um floral que sussurra em vez de gritar.",
    pyramid: {
      topo: ["Pimenta Rosa", "Lichia"],
      coracao: ["Rosa de Damasco", "Peônia", "Íris"],
      fundo: ["Musgo de Carvalho", "Almíscar Branco", "Âmbar"],
    },
  },
  {
    id: "vetiver-sombrio",
    index: "N°03",
    name: "Vetiver Sombrio",
    notes: "Vetiver do Haiti · Couro · Cedro",
    family: "Amadeirado Seco",
    img: IMAGES.vetiver,
    ratio: "aspect-[3/4]",
    concentration: "Extrait de Parfum · 24%",
    volume: "100 ml",
    price: "R$ 920",
    tagline: "A terra depois da chuva.",
    story:
      "Extraído do vetiver haitiano mais raro, este perfume é a alma da terra molhada. Couro esfumaçado e cedro seco compõem uma estrutura austera e masculina, temperada por um toque terroso que evoca raízes recém-arrancadas do solo escuro.",
    pyramid: {
      topo: ["Toranja", "Cardamomo"],
      coracao: ["Vetiver do Haiti", "Couro", "Gerânio"],
      fundo: ["Cedro", "Vetiver Torrado", "Musgo"],
    },
  },
  {
    id: "neroli-blanc",
    index: "N°04",
    name: "Neroli Blanc",
    notes: "Flor de Laranjeira · Bergamota · Almíscar Branco",
    family: "Cítrico Floral",
    img: IMAGES.neroli,
    ratio: "aspect-square",
    concentration: "Eau de Parfum · 16%",
    volume: "100 ml",
    price: "R$ 690",
    tagline: "Luz engarrafada.",
    story:
      "Neroli Blanc captura a manhã mediterrânea: a flor de laranjeira colhida ao amanhecer, ainda húmida de orvalho. A bergamota da Calábria adiciona luminosidade cítrica, enquanto o almíscar branco prolonga o frescor numa aura translúcida e imaculada.",
    pyramid: {
      topo: ["Bergamota da Calábria", "Petitgrain"],
      coracao: ["Flor de Laranjeira", "Néroli", "Jasmim"],
      fundo: ["Almíscar Branco", "Cedro Branco", "Âmbar Claro"],
    },
  },
  {
    id: "oud-celestial",
    index: "N°05",
    name: "Oud Celestial",
    notes: "Oud · Açafrão · Âmbar Cinza",
    family: "Oriental Precioso",
    img: IMAGES.oud,
    ratio: "aspect-[3/4]",
    concentration: "Extrait de Parfum · 26%",
    volume: "100 ml",
    price: "R$ 1.480",
    tagline: "O incenso dos deuses.",
    story:
      "A nossa composição mais preciosa. O oud de Assam, envelhecido por doze anos, é elevado pelo açafrão dourado e pelo âmbar cinza mais raro. Oud Celestial é uma catedral olfativa — profunda, resinosa e infinitamente complexa, feita em edição estritamente limitada.",
    pyramid: {
      topo: ["Açafrão", "Noz-moscada"],
      coracao: ["Oud de Assam", "Rosa Búlgara", "Âmbar Cinza"],
      fundo: ["Sândalo Mysore", "Patchouli", "Resina de Mirra"],
    },
  },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

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
