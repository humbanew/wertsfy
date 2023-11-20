/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverMathAnPSPart = "conver_math_an_p__spart";
var classeTituloSPart = "conver_math_an_p_titulo__spart";
var classeCardInferiorSPart = "card_conver_math_an_p__inferior___spart";
var classeCardSuperiorSPart = "card_conver_math_an_p__superior___spart";
var classeCardContadorSPart = "card_conver_math_an_p_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Ângulos Planos | Pt. ${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Ângulos Planos | Pt. ${"0"+(x+1)}`;
  }

  sectionRaizConverMathAnPSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasMathAnP = [
  "Yoctôradianos",
  "Zeptôradianos",
  "Attôradianos",
  "Fentôradianos",
  "Picôradianos",
  "Nanôradianos",
  "Micrôradianos",
  "Milíradianos",
  "Centíradianos",
  "Decíradianos",
  "Radianos",
  "Decâradianos",
  "Hectôradianos",
  "Kilôradianos",
  "Megaradianos",
  "Gigaradianos",
  "Teraradianos",
  "Petaradianos",
  "Exaradianos",
  "Zettaradianos"
];

for (let u = 0; u < medidasMathAnP.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasMathAnP[u]} em Zeptôradianos`,
    `Conversor de Zeptôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Attôradianos`,
    `Conversor de Attôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Fentôradianos`,
    `Conversor de Fentôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Picôradianos`,
    `Conversor de Picôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Nanôradianos`,
    `Conversor de Nanôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Micrôradianos`,
    `Conversor de Micrôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Milíradianos`,
    `Conversor de Milíradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Centíradianos`,
    `Conversor de Centíradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Decíradianos`,
    `Conversor de Decíradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Radianos`,
    `Conversor de radianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Decâradianos`,
    `Conversor de Decâradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Hectôradianos`,
    `Conversor de Hectôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Kilôradianos`,
    `Conversor de Kilôradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Megaradianos`,
    `Conversor de Megaradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Gigaradianos`,
    `Conversor de Gigaradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Teraradianos`,
    `Conversor de Teraradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Petaradianos`,
    `Conversor de Petaradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Exaradianos`,
    `Conversor de Exaradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Zettaradianos`,
    `Conversor de Zettaradianos em ${medidasMathAnP[u]}`,
    `Conversor de ${medidasMathAnP[u]} em Yottaradianos`,
    `Conversor de Yottaradianos em ${medidasMathAnP[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasMathAnP[u]} em Zeptôradianos`,
    `Converte Zeptôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Attôradianos`,
    `Converte Attôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Fentôradianos`,
    `Converte Fentôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Picôradianos`,
    `Converte Picôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Nanôradianos`,
    `Converte Nanôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Micrôradianos`,
    `Converte Micrôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Milíradianos`,
    `Converte Milíradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Centíradianos`,
    `Converte Centíradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Decíradianos`,
    `Converte Decíradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Radianos`,
    `Converte radianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Decâradianos`,
    `Converte Decâradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Hectôradianos`,
    `Converte Hectôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Kilôradianos`,
    `Converte Kilôradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Megaradianos`,
    `Converte Megaradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Gigaradianos`,
    `Converte Gigaradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Teraradianos`,
    `Converte Teraradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Petaradianos`,
    `Converte Petaradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Exaradianos`,
    `Converte Exaradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Zettaradianos`,
    `Converte Zettaradianos em ${medidasMathAnP[u]}`,
    `Converte ${medidasMathAnP[u]} em Yottaradianos`,
    `Converte Yottaradianos em ${medidasMathAnP[u]}`
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
  var sectionRaizConverMathAnPSPart = document.createElement("section");

  sectionRaizConverMathAnPSPart.classList.add(classeEIDSectionRaizConverMathAnP);

  sectionRaizConverMathAnPSPart.id = "conver_math_an_p__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverMathAnPSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverMathAnPSPart = document.createElement("button");

  botaoRetornoConverMathAnPSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverMathAnPSPart.id = "botao_retorno_math_an_p_part" + `_${u+1}`;

  botaoRetornoConverMathAnPSPart.textContent = "Voltar à página anterior";

  sectionRaizConverMathAnPSPart.appendChild(botaoRetornoConverMathAnPSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverMathAnPSPart ***/
    sectionRaizConverMathAnPSPart.appendChild(cardInferiorSPart);

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