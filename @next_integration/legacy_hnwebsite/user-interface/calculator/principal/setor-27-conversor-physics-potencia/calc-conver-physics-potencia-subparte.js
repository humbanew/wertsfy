/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsPotenciaSPart = "conver_physics_potencia__spart";
var classeTituloSPart = "conver_physics_potencia_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_potencia__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_potencia__superior___spart";
var classeCardContadorSPart = "card_conver_physics_potencia_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Potência | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Potência | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsPotenciaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsPotencia = [
  "Yoctôwatts",
  "Zeptôwatts",
  "Attôwatts",
  "Fentôwatts",
  "Picôwatts",
  "Nanôwatts",
  "Micrôwatts",
  "Milíwatts",
  "Centíwatts",
  "Decíwatts",
  "Watts",
  "Decâwatts",
  "Hectôwatts",
  "Kilôwatts",
  "Megawatts",
  "Gigawatts",
  "Terawatts",
  "Petawatts",
  "Exawatts",
  "Zettawatts",
];

for (let u = 0; u < medidasPhysicsPotencia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsPotencia[u]} em Zeptôwatts`,
    `Conversor de Zeptôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Attôwatts`,
    `Conversor de Attôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Fentôwatts`,
    `Conversor de Fentôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Picôwatts`,
    `Conversor de Picôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Nanôwatts`,
    `Conversor de Nanôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Micrôwatts`,
    `Conversor de Micrôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Milíwatts`,
    `Conversor de Milíwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Centíwatts`,
    `Conversor de Centíwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Decíwatts`,
    `Conversor de Decíwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Watts`,
    `Conversor de Watts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Decâwatts`,
    `Conversor de Decâwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Hectôwatts`,
    `Conversor de Hectôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Kilôwatts`,
    `Conversor de Kilôwatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Megawatts`,
    `Conversor de Megawatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Gigawatts`,
    `Conversor de Gigawatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Terawatts`,
    `Conversor de Terawatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Petawatts`,
    `Conversor de Petawatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Exawatts`,
    `Conversor de Exawatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Zettawatts`,
    `Conversor de Zettawatts em ${medidasPhysicsPotencia[u]}`,
    `Conversor de ${medidasPhysicsPotencia[u]} em Yottawatts`,
    `Conversor de Yottawatts em ${medidasPhysicsPotencia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsPotencia[u]} em Zeptôwatts`,
    `Converte Zeptôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Attôwatts`,
    `Converte Attôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Fentôwatts`,
    `Converte Fentôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Picôwatts`,
    `Converte Picôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Nanôwatts`,
    `Converte Nanôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Micrôwatts`,
    `Converte Micrôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Milíwatts`,
    `Converte Milíwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Centíwatts`,
    `Converte Centíwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Decíwatts`,
    `Converte Decíwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Watts`,
    `Converte Watts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Decâwatts`,
    `Converte Decâwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Hectôwatts`,
    `Converte Hectôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Kilôwatts`,
    `Converte Kilôwatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Megawatts`,
    `Converte Megawatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Gigawatts`,
    `Converte Gigawatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Terawatts`,
    `Converte Terawatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Petawatts`,
    `Converte Petawatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Exawatts`,
    `Converte Exawatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Zettawatts`,
    `Converte Zettawatts em ${medidasPhysicsPotencia[u]}`,
    `Converte ${medidasPhysicsPotencia[u]} em Yottawatts`,
    `Converte Yottawatts em ${medidasPhysicsPotencia[u]}`
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

  var sectionRaizConverPhysicsPotenciaSPart = document.createElement("section");

  sectionRaizConverPhysicsPotenciaSPart.classList.add(classeEIDSectionRaizConverPhysicsPotencia);

  sectionRaizConverPhysicsPotenciaSPart.id = "conver_physics_potencia__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsPotenciaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsPotenciaSPart = document.createElement("button");

  botaoRetornoConverPhysicsPotenciaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsPotenciaSPart.id = "botao_retorno_physics_potencia_part" + `_${u+1}`;

  botaoRetornoConverPhysicsPotenciaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsPotenciaSPart.appendChild(botaoRetornoConverPhysicsPotenciaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsPotenciaSPart ***/
    sectionRaizConverPhysicsPotenciaSPart.appendChild(cardInferiorSPart);

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