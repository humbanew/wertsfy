/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverMathASPart = "conver_math_a__spart";
var classeTituloSPart = "conver_math_a_titulo__spart";
var classeCardInferiorSPart = "card_conver_math_a__inferior___spart";
var classeCardSuperiorSPart = "card_conver_math_a__superior___spart";
var classeCardContadorSPart = "card_conver_math_a_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Área | Pt. ${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Área | Pt. ${"0"+(x+1)}`;
  }

  sectionRaizConverMathASPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasMathA = [
  "Polegadas²",
  "Pés²",
  "Milhas²",
  "Milhas Náuticas²",
  "Angstrons²",
  "Fermis²",
  "Anos-luz²",
  "Parsecs²",
  "Braças²",
  "Jardas²",
  "Raios de Bohr²",
  "Varas²",
  "Mils²",
  "Acres",
  "Bans",
  "Hectares",
  "Ares",
  "Alqueires",
  "Yoctômetros²",
  "Zeptômetros²",
  "Attômetros²",
  "Fentômetros²",
  "Picômetros²",
  "Nanômetros²",
  "Micrômetros²",
  "Milímetros²",
  "Centímetros²",
  "Decímetros²",
  "Metros²",
  "Decâmetros²",
  "Hectômetros²",
  "Kilômetros²",
  "Megametros²",
  "Gigametros²",
  "Terametros²",
  "Petametros²",
  "Exametros²",
  "Zettametros²"
];

for (let u = 0; u < medidasMathA.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasMathA[u]} em Pés²`,
    `Conversor de Pés² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Milhas²`,
    `Conversor de Milhas² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Milhas Náuticas²`,
    `Conversor de Milhas Náuticas² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Angstrongs²`,
    `Conversor de Angstrongs² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Fermis²`,
    `Conversor de Fermis² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Anos-luz²`,
    `Conversor de Anos-luz² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Parsecs²`,
    `Conversor de Parsecs² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Braças²`,
    `Conversor de Braças² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Jardas²`,
    `Conversor de Jardas² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Raios de Bohr²`,
    `Conversor de Raios de Bohr² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Varas²`,
    `Conversor de Varas² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Mils²`,
    `Conversor de Mils² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Acres`,
    `Conversor de Acres em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Bans`,
    `Conversor de Bans em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Hectares`,
    `Conversor de Hectares em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Ares`,
    `Conversor de Ares em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Alqueires`,
    `Conversor de Alqueires em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Yoctômetros²`,
    `Conversor de Yoctômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Zeptômetros²`,
    `Conversor de Zeptômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Attômetros²`,
    `Conversor de Attômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Fentômetros²`,
    `Conversor de Fentômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Picômetros²`,
    `Conversor de Picômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Nanômetros²`,
    `Conversor de Nanômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Micrômetros²`,
    `Conversor de Micrômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Milímetros²`,
    `Conversor de Milímetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Centímetros²`,
    `Conversor de Centímetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Decímetros²`,
    `Conversor de Decímetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Metros²`,
    `Conversor de Metros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Decâmetros²`,
    `Conversor de Decâmetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Hectômetros²`,
    `Conversor de Hectômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Kilômetros²`,
    `Conversor de Kilômetros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Megametros²`,
    `Conversor de Megametros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Gigametros²`,
    `Conversor de Gigametros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Terametros²`,
    `Conversor de Terametros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Petametros²`,
    `Conversor de Petametros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Exametros²`,
    `Conversor de Exametros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Zettametros²`,
    `Conversor de Zettametros² em ${medidasMathA[u]}`,
    `Conversor de ${medidasMathA[u]} em Yottametros²`,
    `Conversor de Yottametros² em ${medidasMathA[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasMathA[u]} em Pés²`,
    `Converte Pés² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Milhas²`,
    `Converte Milhas² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Milhas Náuticas²`,
    `Converte Milhas Náuticas² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Angstrongs²`,
    `Converte Angstrongs² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Fermis²`,
    `Converte Fermis² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Anos-luz²`,
    `Converte Anos-luz² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Parsecs²`,
    `Converte Parsecs² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Braças²`,
    `Converte Braças² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Jardas²`,
    `Converte Jardas² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Raios de Bohr²`,
    `Converte Raios de Bohr² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Varas²`,
    `Converte Varas² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Mils²`,
    `Converte Mils² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Acres`,
    `Converte Acres em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Bans`,
    `Converte Bans em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Hectares`,
    `Converte Hectares em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Ares`,
    `Converte Ares em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Alqueires`,
    `Converte Alqueires em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Yoctômetros²`,
    `Converte Yoctômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Zeptômetros²`,
    `Converte Zeptômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Attômetros²`,
    `Converte Attômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Fentômetros²`,
    `Converte Fentômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Picômetros²`,
    `Converte Picômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Nanômetros²`,
    `Converte Nanômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Micrômetros²`,
    `Converte Micrômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Milímetros²`,
    `Converte Milímetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Centímetros²`,
    `Converte Centímetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Decímetros²`,
    `Converte Decímetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Metros²`,
    `Converte Metros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Decâmetros²`,
    `Converte Decâmetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Hectômetros²`,
    `Converte Hectômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Kilômetros²`,
    `Converte Kilômetros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Megametros²`,
    `Converte Megametros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Gigametros²`,
    `Converte Gigametros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Terametros²`,
    `Converte Terametros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Petametros²`,
    `Converte Petametros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Exametros²`,
    `Converte Exametros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Zettametros²`,
    `Converte Zettametros² em ${medidasMathA[u]}`,
    `Converte ${medidasMathA[u]} em Yottametros²`,
    `Converte Yottametros² em ${medidasMathA[u]}`
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
  var sectionRaizConverMathASPart = document.createElement("section");

  sectionRaizConverMathASPart.classList.add(classeEIDSectionRaizConverMathA);

  sectionRaizConverMathASPart.id = "conver_math_a__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverMathASPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverMathASPart = document.createElement("button");

  botaoRetornoConverMathASPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverMathASPart.id = "botao_retorno_math_a_part" + `_${u+1}`;

  botaoRetornoConverMathASPart.textContent = "Voltar à página anterior";

  sectionRaizConverMathASPart.appendChild(botaoRetornoConverMathASPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverMathASPart ***/
    sectionRaizConverMathASPart.appendChild(cardInferiorSPart);

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