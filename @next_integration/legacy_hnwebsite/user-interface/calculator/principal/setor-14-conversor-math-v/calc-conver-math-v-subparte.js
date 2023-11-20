/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverMathVSPart = "conver_math_v__spart";
var classeTituloSPart = "conver_math_v_titulo__spart";
var classeCardInferiorSPart = "card_conver_math_v__inferior___spart";
var classeCardSuperiorSPart = "card_conver_math_v__superior___spart";
var classeCardContadorSPart = "card_conver_math_v_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Volume | Pt. ${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de Volume | Pt. ${"0"+(x+1)}`;
  }

  sectionRaizConverMathVSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasMathV = [
  "Polegadas³",
  "Pés³",
  "Milhas³",
  "Milhas Náuticas³",
  "Angstrons³",
  "Fermis³",
  "Anos-luz³",
  "Parsecs³",
  "Braças³",
  "Jardas³",
  "Raios de Bohr³",
  "Varas³",
  "Mils³",
  "Galão Americano",
  "Galão Inglês",
  "Yoctômetros³",
  "Zeptômetros³",
  "Attômetros³",
  "Fentômetros³",
  "Picômetros³",
  "Nanômetros³",
  "Micrômetros³",
  "Milímetros³",
  "Centímetros³",
  "Decímetros³",
  "Metros³",
  "Decâmetros³",
  "Hectômetros³",
  "Kilômetros³",
  "Megametros³",
  "Gigametros³",
  "Terametros³",
  "Petametros³",
  "Exametros³",
  "Zettametros³"
];

for (let u = 0; u < medidasMathV.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasMathV[u]} em Pés³`,
    `Conversor de Pés³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Milhas³`,
    `Conversor de Milhas³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Milhas Náuticas³`,
    `Conversor de Milhas Náuticas³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Angstrongs³`,
    `Conversor de Angstrongs³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Fermis³`,
    `Conversor de Fermis³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Anos-luz³`,
    `Conversor de Anos-luz³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Parsecs³`,
    `Conversor de Parsecs³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Braças³`,
    `Conversor de Braças³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Jardas³`,
    `Conversor de Jardas³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Raios de Bohr³`,
    `Conversor de Raios de Bohr³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Varas³`,
    `Conversor de Varas³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Mils³`,
    `Conversor de Mils³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Galões Americanos`,
    `Conversor de Galões Americanos em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Galões Ingleses`,
    `Conversor de Galões Ingleses em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Yoctômetros³`,
    `Conversor de Yoctômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Zeptômetros³`,
    `Conversor de Zeptômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Attômetros³`,
    `Conversor de Attômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Fentômetros³`,
    `Conversor de Fentômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Picômetros³`,
    `Conversor de Picômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Nanômetros³`,
    `Conversor de Nanômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Micrômetros³`,
    `Conversor de Micrômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Milímetros³`,
    `Conversor de Milímetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Centímetros³`,
    `Conversor de Centímetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Decímetros³`,
    `Conversor de Decímetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Metros³`,
    `Conversor de Metros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Decâmetros³`,
    `Conversor de Decâmetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Hectômetros³`,
    `Conversor de Hectômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Kilômetros³`,
    `Conversor de Kilômetros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Megametros³`,
    `Conversor de Megametros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Gigametros³`,
    `Conversor de Gigametros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Terametros³`,
    `Conversor de Terametros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Petametros³`,
    `Conversor de Petametros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Exametros³`,
    `Conversor de Exametros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Zettametros³`,
    `Conversor de Zettametros³ em ${medidasMathV[u]}`,
    `Conversor de ${medidasMathV[u]} em Yottametros³`,
    `Conversor de Yottametros³ em ${medidasMathV[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasMathV[u]} em Pés³`,
    `Converte Pés³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Milhas³`,
    `Converte Milhas³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Milhas Náuticas³`,
    `Converte Milhas Náuticas³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Angstrongs³`,
    `Converte Angstrongs³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Fermis³`,
    `Converte Fermis³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Anos-luz³`,
    `Converte Anos-luz³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Parsecs³`,
    `Converte Parsecs³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Braças³`,
    `Converte Braças³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Jardas³`,
    `Converte Jardas³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Raios de Bohr³`,
    `Converte Raios de Bohr³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Varas³`,
    `Converte Varas³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Mils³`,
    `Converte Mils³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Galões Americanos`,
    `Converte Galões Americanos em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Galões Ingleses`,
    `Converte Galões Ingleses em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Yoctômetros³`,
    `Converte Yoctômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Zeptômetros³`,
    `Converte Zeptômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Attômetros³`,
    `Converte Attômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Fentômetros³`,
    `Converte Fentômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Picômetros³`,
    `Converte Picômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Nanômetros³`,
    `Converte Nanômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Micrômetros³`,
    `Converte Micrômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Milímetros³`,
    `Converte Milímetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Centímetros³`,
    `Converte Centímetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Decímetros³`,
    `Converte Decímetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Metros³`,
    `Converte Metros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Decâmetros³`,
    `Converte Decâmetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Hectômetros³`,
    `Converte Hectômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Kilômetros³`,
    `Converte Kilômetros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Megametros³`,
    `Converte Megametros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Gigametros³`,
    `Converte Gigametros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Terametros³`,
    `Converte Terametros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Petametros³`,
    `Converte Petametros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Exametros³`,
    `Converte Exametros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Zettametros³`,
    `Converte Zettametros³ em ${medidasMathV[u]}`,
    `Converte ${medidasMathV[u]} em Yottametros³`,
    `Converte Yottametros³ em ${medidasMathV[u]}`
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
  var sectionRaizConverMathVSPart = document.createElement("section");

  sectionRaizConverMathVSPart.classList.add(classeEIDSectionRaizConverMathV);

  sectionRaizConverMathVSPart.id = "conver_math_v__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverMathVSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverMathVSPart = document.createElement("button");

  botaoRetornoConverMathVSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverMathVSPart.id = "botao_retorno_math_v_part" + `_${u+1}`;

  botaoRetornoConverMathVSPart.textContent = "Voltar à página anterior";

  sectionRaizConverMathVSPart.appendChild(botaoRetornoConverMathVSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverMathVSPart ***/
    sectionRaizConverMathVSPart.appendChild(cardInferiorSPart);

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