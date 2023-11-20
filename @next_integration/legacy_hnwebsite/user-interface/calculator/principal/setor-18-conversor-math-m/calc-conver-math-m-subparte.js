/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverMathMSPart = "conver_math_m__spart";
var classeTituloSPart = "conver_math_m_titulo__spart";
var classeCardInferiorSPart = "card_conver_math_m__inferior___spart";
var classeCardSuperiorSPart = "card_conver_math_m__superior___spart";
var classeCardContadorSPart = "card_conver_math_m_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Massa | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Massa | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverMathMSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasMathM = [
  "Libras",
  "Yoctôgramas",
  "Zeptôgramas",
  "Attôgramas",
  "Fentôgramas",
  "Picôgramas",
  "Nanôgramas",
  "Micrôgramas",
  "Milígramas",
  "Centígramas",
  "Decígramas",
  "Gramas",
  "Decâgramas",
  "Hectôgramas",
  "Kilôgramas",
  "Megagramas",
  "Gigagramas",
  "Teragramas",
  "Petagramas",
  "Exagramas",
  "Zettagramas"
];

for (let u = 0; u < medidasMathM.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasMathM[u]} em Yoctôgramas`,
    `Conversor de Yoctôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Zeptôgramas`,
    `Conversor de Zeptôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Attôgramas`,
    `Conversor de Attôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Fentôgramas`,
    `Conversor de Fentôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Picôgramas`,
    `Conversor de Picôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Nanôgramas`,
    `Conversor de Nanôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Micrôgramas`,
    `Conversor de Micrôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Milígramas`,
    `Conversor de Milígramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Centígramas`,
    `Conversor de Centígramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Decígramas`,
    `Conversor de Decígramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Gramas`,
    `Conversor de gramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Decâgramas`,
    `Conversor de Decâgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Hectôgramas`,
    `Conversor de Hectôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Kilôgramas`,
    `Conversor de Kilôgramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Megagramas`,
    `Conversor de Megagramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Gigagramas`,
    `Conversor de Gigagramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Teragramas`,
    `Conversor de Teragramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Petagramas`,
    `Conversor de Petagramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Exagramas`,
    `Conversor de Exagramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Zettagramas`,
    `Conversor de Zettagramas em ${medidasMathM[u]}`,
    `Conversor de ${medidasMathM[u]} em Yottagramas`,
    `Conversor de Yottagramas em ${medidasMathM[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasMathM[u]} em Zeptôgramas`,
    `Converte Zeptôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Attôgramas`,
    `Converte Attôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Fentôgramas`,
    `Converte Fentôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Picôgramas`,
    `Converte Picôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Nanôgramas`,
    `Converte Nanôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Micrôgramas`,
    `Converte Micrôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Milígramas`,
    `Converte Milígramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Centígramas`,
    `Converte Centígramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Decígramas`,
    `Converte Decígramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Gramas`,
    `Converte gramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Decâgramas`,
    `Converte Decâgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Hectôgramas`,
    `Converte Hectôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Kilôgramas`,
    `Converte Kilôgramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Megagramas`,
    `Converte Megagramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Gigagramas`,
    `Converte Gigagramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Teragramas`,
    `Converte Teragramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Petagramas`,
    `Converte Petagramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Exagramas`,
    `Converte Exagramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Zettagramas`,
    `Converte Zettagramas em ${medidasMathM[u]}`,
    `Converte ${medidasMathM[u]} em Yottagramas`,
    `Converte Yottagramas em ${medidasMathM[u]}`
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
  var sectionRaizConverMathMSPart = document.createElement("section");

  sectionRaizConverMathMSPart.classList.add(classeEIDSectionRaizConverMathM);

  sectionRaizConverMathMSPart.id = "conver_math_m__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverMathMSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverMathMSPart = document.createElement("button");

  botaoRetornoConverMathMSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverMathMSPart.id = "botao_retorno_math_m_part" + `_${u+1}`;

  botaoRetornoConverMathMSPart.textContent = "Voltar à página anterior";

  sectionRaizConverMathMSPart.appendChild(botaoRetornoConverMathMSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverMathMSPart ***/
    sectionRaizConverMathMSPart.appendChild(cardInferiorSPart);

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