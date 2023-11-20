/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsForcaSPart = "conver_physics_forca__spart";
var classeTituloSPart = "conver_physics_forca_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_forca__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_forca__superior___spart";
var classeCardContadorSPart = "card_conver_physics_forca_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics Força | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics Força | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsForcaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsForca = [
  "Yoctônewtons",
  "Zeptônewtons",
  "Attônewtons",
  "Fentônewtons",
  "Picônewtons",
  "Nanônewtons",
  "Micrônewtons",
  "Milínewtons",
  "Centínewtons",
  "Decínewtons",
  "Newtons",
  "Decânewtons",
  "Hectônewtons",
  "Kilônewtons",
  "Meganewtons",
  "Giganewtons",
  "Teranewtons",
  "Petanewtons",
  "Exanewtons",
  "Zettanewtons",
];

for (let u = 0; u < medidasPhysicsForca.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsForca[u]} em Zeptônewtons`,
    `Conversor de Zeptônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Attônewtons`,
    `Conversor de Attônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Fentônewtons`,
    `Conversor de Fentônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Picônewtons`,
    `Conversor de Picônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Nanônewtons`,
    `Conversor de Nanônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Micrônewtons`,
    `Conversor de Micrônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Milínewtons`,
    `Conversor de Milínewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Centínewtons`,
    `Conversor de Centínewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Decínewtons`,
    `Conversor de Decínewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Newtons`,
    `Conversor de Newtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Decânewtons`,
    `Conversor de Decânewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Hectônewtons`,
    `Conversor de Hectônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Kilônewtons`,
    `Conversor de Kilônewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Meganewtons`,
    `Conversor de Meganewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Giganewtons`,
    `Conversor de Giganewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Teranewtons`,
    `Conversor de Teranewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Petanewtons`,
    `Conversor de Petanewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Exanewtons`,
    `Conversor de Exanewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Zettanewtons`,
    `Conversor de Zettanewtons em ${medidasPhysicsForca[u]}`,
    `Conversor de ${medidasPhysicsForca[u]} em Yottanewtons`,
    `Conversor de Yottanewtons em ${medidasPhysicsForca[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsForca[u]} em Zeptônewtons`,
    `Converte Zeptônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Attônewtons`,
    `Converte Attônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Fentônewtons`,
    `Converte Fentônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Picônewtons`,
    `Converte Picônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Nanônewtons`,
    `Converte Nanônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Micrônewtons`,
    `Converte Micrônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Milínewtons`,
    `Converte Milínewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Centínewtons`,
    `Converte Centínewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Decínewtons`,
    `Converte Decínewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Newtons`,
    `Converte Newtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Decânewtons`,
    `Converte Decânewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Hectônewtons`,
    `Converte Hectônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Kilônewtons`,
    `Converte Kilônewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Meganewtons`,
    `Converte Meganewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Giganewtons`,
    `Converte Giganewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Teranewtons`,
    `Converte Teranewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Petanewtons`,
    `Converte Petanewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Exanewtons`,
    `Converte Exanewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Zettanewtons`,
    `Converte Zettanewtons em ${medidasPhysicsForca[u]}`,
    `Converte ${medidasPhysicsForca[u]} em Yottanewtons`,
    `Converte Yottanewtons em ${medidasPhysicsForca[u]}`
  ];

  var contentsFuncionalidadesContadorSubParte = [];

  for (let i = 0; i < contentsFuncionalidadesSubParte.length; i++) {
    if (i >= 9) {
      contentsFuncionalidadesContadorSubParte.push(i + 1);
    } else {
      contentsFuncionalidadesContadorSubParte.push("0" + (i + 1));
    }
  }

  /** Section dos cards **/

  var sectionRaizConverPhysicsForcaSPart = document.createElement("section");

  sectionRaizConverPhysicsForcaSPart.classList.add(classeEIDSectionRaizConverPhysicsForca);

  sectionRaizConverPhysicsForcaSPart.id = "conver_physics_forca__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsForcaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsForcaSPart = document.createElement("button");

  botaoRetornoConverPhysicsForcaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsForcaSPart.id = "botao_retorno_physics_forca_part" + `_${u+1}`;

  botaoRetornoConverPhysicsForcaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsForcaSPart.appendChild(botaoRetornoConverPhysicsForcaSPart);

  tituloConstructor(u);

  /* Ajustador para a retirada dos Cards indevidos nas divisões */

  for (let i = 0; i < u; i++) {
    contentsFuncionalidadesSubParte.splice(0, 2);
    contentsFuncionalidadesDescricaoSubParte.splice(0, 2);
  }

  /* Construtor das estruturas dos Cards */

  for (let i = 0; i < contentsFuncionalidadesSubParte.length; i++) {

    /*** Card Inferior ***/
    var cardInferiorSPart = document.createElement("div");

    cardInferiorSPart.classList.add(classeCardInferiorSPart);

    /*** Card Superior ***/
    var cardSuperiorSPart = document.createElement("div");

    cardSuperiorSPart.classList.add(classeCardSuperiorSPart);

    /*** Lista de Conteúdo do Card ***/
    var cardListaSPart = document.createElement("ol");

    cardListaSPart.classList.add(classeCardLista);

    /*** Item da Lista de Conteúdo do Card ***/
    var cardListaItemSPart = document.createElement("li");

    cardListaItemSPart.classList.add(classeCardItem);

    cardListaItemSPart.textContent = contentsFuncionalidadesSubParte[i];

    /*** Descrição do Item da Lista de Conteúdo do Card ***/
    var cardListaItemDescricaoSPart = document.createElement("dl");

    cardListaItemDescricaoSPart.classList.add(classeCardDescricao);

    cardListaItemDescricaoSPart.textContent = contentsFuncionalidadesDescricaoSubParte[i];

    /*** Descrição do Item da Lista de Conteúdo do Card ***/
    var cardListaItemContadorSPart = document.createElement("dd");

    cardListaItemContadorSPart.classList.add(classeCardContadorSPart);

    cardListaItemContadorSPart.textContent = contentsFuncionalidadesContadorSubParte[i];

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsForcaSPart ***/
    sectionRaizConverPhysicsForcaSPart.appendChild(cardInferiorSPart);

    /*** cardSuperiorSPart é elemento-filho de cardInferiorSPart ***/
    cardInferiorSPart.appendChild(cardSuperiorSPart);

    /*** cardListaSPart é elemento-filho de cardSuperiorSPart ***/
    cardSuperiorSPart.appendChild(cardListaSPart);

    /*** cardListaItemSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemSPart);

    /*** cardListaItemDescricaoSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemDescricaoSPart);

    /*** cardListaItemDescricaoSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemContadorSPart);
  }
}