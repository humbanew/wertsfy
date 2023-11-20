/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverMathCSPart = "conver_math_c__spart";
var classeTituloSPart = "conver_math_c_titulo__spart";
var classeCardInferiorSPart = "card_conver_math_c__inferior___spart";
var classeCardSuperiorSPart = "card_conver_math_c__superior___spart";
var classeCardContadorSPart = "card_conver_math_c_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Comprimento | Pt. ${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Comprimento | Pt. ${"0"+(x+1)}`;
  }

  sectionRaizConverMathCSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasMathC = [
  "Polegadas",
  "Pés",
  "Milhas",
  "Milhas Náuticas",
  "Angstrons",
  "Fermis",
  "Anos-luz",
  "Parsecs",
  "Braças",
  "Jardas",
  "Raios de Bohr",
  "Varas",
  "Mils",
  "Yoctômetros",
  "Zeptômetros",
  "Attômetros",
  "Fentômetros",
  "Picômetros",
  "Nanômetros",
  "Micrômetros",
  "Milímetros",
  "Centímetros",
  "Decímetros",
  "Metros",
  "Decâmetros",
  "Hectômetros",
  "Kilômetros",
  "Megametros",
  "Gigametros",
  "Terametros",
  "Petametros",
  "Exametros",
  "Zettametros"
];

for (let u = 0; u < medidasMathC.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasMathC[u]} em Pés`,
    `Conversor de Pés em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Milhas`,
    `Conversor de Milhas em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Milhas Náuticas`,
    `Conversor de Milhas Náuticas em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Angstrongs`,
    `Conversor de Angstrongs em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Fermis`,
    `Conversor de Fermis em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Anos-luz`,
    `Conversor de Anos-luz em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Parsecs`,
    `Conversor de Parsecs em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Braças`,
    `Conversor de Braças em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Jardas`,
    `Conversor de Jardas em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Raios de Bohr`,
    `Conversor de Raios de Bohr em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Varas`,
    `Conversor de Varas em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Mils`,
    `Conversor de Mils em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Yoctômetros`,
    `Conversor de Yoctômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Zeptômetros`,
    `Conversor de Zeptômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Attômetros`,
    `Conversor de Attômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Fentômetros`,
    `Conversor de Fentômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Picômetros`,
    `Conversor de Picômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Nanômetros`,
    `Conversor de Nanômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Micrômetros`,
    `Conversor de Micrômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Milímetros`,
    `Conversor de Milímetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Centímetros`,
    `Conversor de Centímetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Decímetros`,
    `Conversor de Decímetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Metros`,
    `Conversor de Metros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Decâmetros`,
    `Conversor de Decâmetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Hectômetros`,
    `Conversor de Hectômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Kilômetros`,
    `Conversor de Kilômetros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Megametros`,
    `Conversor de Megametros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Gigametros`,
    `Conversor de Gigametros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Terametros`,
    `Conversor de Terametros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Petametros`,
    `Conversor de Petametros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Exametros`,
    `Conversor de Exametros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Zettametros`,
    `Conversor de Zettametros em ${medidasMathC[u]}`,
    `Conversor de ${medidasMathC[u]} em Yottametros`,
    `Conversor de Yottametros em ${medidasMathC[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasMathC[u]} em Pés`,
    `Converte Pés em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Milhas`,
    `Converte Milhas em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Milhas Náuticas`,
    `Converte Milhas Náuticas em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Angstrongs`,
    `Converte Angstrongs em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Fermis`,
    `Converte Fermis em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Anos-luz`,
    `Converte Anos-luz em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Parsecs`,
    `Converte Parsecs em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Braças`,
    `Converte Braças em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Jardas`,
    `Converte Jardas em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Raios de Bohr`,
    `Converte Raios de Bohr em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Varas`,
    `Converte Varas em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Mils`,
    `Converte Mils em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Zeptômetros`,
    `Converte Zeptômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Attômetros`,
    `Converte Attômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Fentômetros`,
    `Converte Fentômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Picômetros`,
    `Converte Picômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Nanômetros`,
    `Converte Nanômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Micrômetros`,
    `Converte Micrômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Milímetros`,
    `Converte Milímetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Centímetros`,
    `Converte Centímetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Decímetros`,
    `Converte Decímetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Metros`,
    `Converte Metros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Decâmetros`,
    `Converte Decâmetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Hectômetros`,
    `Converte Hectômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Kilômetros`,
    `Converte Kilômetros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Megametros`,
    `Converte Megametros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Gigametros`,
    `Converte Gigametros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Terametros`,
    `Converte Terametros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Petametros`,
    `Converte Petametros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Exametros`,
    `Converte Exametros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Zettametros`,
    `Converte Zettametros em ${medidasMathC[u]}`,
    `Converte ${medidasMathC[u]} em Yottametros`,
    `Converte Yottametros em ${medidasMathC[u]}`
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
  var sectionRaizConverMathCSPart = document.createElement("section");

  sectionRaizConverMathCSPart.classList.add(classeEIDSectionRaizConverMathC);

  sectionRaizConverMathCSPart.id = "conver_math_c__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverMathCSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverMathCSPart = document.createElement("button");

  botaoRetornoConverMathCSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverMathCSPart.id = "botao_retorno_math_c_part" + `_${u+1}`;

  botaoRetornoConverMathCSPart.textContent = "Voltar à página anterior";

  sectionRaizConverMathCSPart.appendChild(botaoRetornoConverMathCSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverMathCSPart ***/
    sectionRaizConverMathCSPart.appendChild(cardInferiorSPart);

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