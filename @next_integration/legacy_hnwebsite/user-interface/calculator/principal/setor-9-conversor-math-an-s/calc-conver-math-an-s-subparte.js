/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverMathAnSSPart = "conver_math_an_s__spart";
var classeTituloSPart = "conver_math_an_s_titulo__spart";
var classeCardInferiorSPart = "card_conver_math_an_s__inferior___spart";
var classeCardSuperiorSPart = "card_conver_math_an_s__superior___spart";
var classeCardContadorSPart = "card_conver_math_an_s_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Ângulos Sólidos | Pt. ${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Ângulos Sólidos | Pt. ${"0"+(x+1)}`;
  }

  sectionRaizConverMathAnSSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasMathAnS = [
  "Yoctôesterradianos",
  "Zeptôesterradianos",
  "Attôesterradianos",
  "Fentôesterradianos",
  "Picôesterradianos",
  "Nanôesterradianos",
  "Micrôesterradianos",
  "Milíesterradianos",
  "Centíesterradianos",
  "Decíesterradianos",
  "Esterradianos",
  "Decâesterradianos",
  "Hectôesterradianos",
  "Kilôesterradianos",
  "Megaesterradianos",
  "Gigaesterradianos",
  "Teraesterradianos",
  "Petaesterradianos",
  "Exaesterradianos",
  "Zettaesterradianos"
];

for (let u = 0; u < medidasMathAnS.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasMathAnS[u]} em Zeptôesterradianos`,
    `Conversor de Zeptôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Attôesterradianos`,
    `Conversor de Attôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Fentôesterradianos`,
    `Conversor de Fentôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Picôesterradianos`,
    `Conversor de Picôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Nanôesterradianos`,
    `Conversor de Nanôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Micrôesterradianos`,
    `Conversor de Micrôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Milíesterradianos`,
    `Conversor de Milíesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Centíesterradianos`,
    `Conversor de Centíesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Decíesterradianos`,
    `Conversor de Decíesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Esterradianos`,
    `Conversor de esterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Decâesterradianos`,
    `Conversor de Decâesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Hectôesterradianos`,
    `Conversor de Hectôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Kilôesterradianos`,
    `Conversor de Kilôesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Megaesterradianos`,
    `Conversor de Megaesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Gigaesterradianos`,
    `Conversor de Gigaesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Teraesterradianos`,
    `Conversor de Teraesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Petaesterradianos`,
    `Conversor de Petaesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Exaesterradianos`,
    `Conversor de Exaesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Zettaesterradianos`,
    `Conversor de Zettaesterradianos em ${medidasMathAnS[u]}`,
    `Conversor de ${medidasMathAnS[u]} em Yottaesterradianos`,
    `Conversor de Yottaesterradianos em ${medidasMathAnS[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasMathAnS[u]} em Zeptôesterradianos`,
    `Converte Zeptôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Attôesterradianos`,
    `Converte Attôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Fentôesterradianos`,
    `Converte Fentôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Picôesterradianos`,
    `Converte Picôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Nanôesterradianos`,
    `Converte Nanôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Micrôesterradianos`,
    `Converte Micrôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Milíesterradianos`,
    `Converte Milíesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Centíesterradianos`,
    `Converte Centíesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Decíesterradianos`,
    `Converte Decíesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Esterradianos`,
    `Converte esterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Decâesterradianos`,
    `Converte Decâesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Hectôesterradianos`,
    `Converte Hectôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Kilôesterradianos`,
    `Converte Kilôesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Megaesterradianos`,
    `Converte Megaesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Gigaesterradianos`,
    `Converte Gigaesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Teraesterradianos`,
    `Converte Teraesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Petaesterradianos`,
    `Converte Petaesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Exaesterradianos`,
    `Converte Exaesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Zettaesterradianos`,
    `Converte Zettaesterradianos em ${medidasMathAnS[u]}`,
    `Converte ${medidasMathAnS[u]} em Yottaesterradianos`,
    `Converte Yottaesterradianos em ${medidasMathAnS[u]}`
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
  var sectionRaizConverMathAnSSPart = document.createElement("section");

  sectionRaizConverMathAnSSPart.classList.add(classeEIDSectionRaizConverMathAnS);

  sectionRaizConverMathAnSSPart.id = "conver_math_an_s__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverMathAnSSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverMathAnSSPart = document.createElement("button");

  botaoRetornoConverMathAnSSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverMathAnSSPart.id = "botao_retorno_math_an_s_part" + `_${u+1}`;

  botaoRetornoConverMathAnSSPart.textContent = "Voltar à página anterior";

  sectionRaizConverMathAnSSPart.appendChild(botaoRetornoConverMathAnSSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverMathAnSSPart ***/
    sectionRaizConverMathAnSSPart.appendChild(cardInferiorSPart);

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