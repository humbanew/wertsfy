/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsCapacitanciaSPart = "conver_physics_capacitancia__spart";
var classeTituloSPart = "conver_physics_capacitancia_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_capacitancia__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_capacitancia__superior___spart";
var classeCardContadorSPart = "card_conver_physics_capacitancia_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics da Capacitância | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics da Capacitância | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsCapacitanciaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsCapacitancia = [
  "Yoctôfarad",
  "Zeptôfarad",
  "Attôfarad",
  "Fentôfarad",
  "Picôfarad",
  "Nanôfarad",
  "Micrôfarad",
  "Milífarad",
  "Centífarad",
  "Decífarad",
  "Farad",
  "Decâfarad",
  "Hectôfarad",
  "Kilôfarad",
  "Megafarad",
  "Gigafarad",
  "Terafarad",
  "Petafarad",
  "Exafarad",
  "Zettafarad",
];

for (let u = 0; u < medidasPhysicsCapacitancia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Zeptôfarad`,
    `Conversor de Zeptôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Attôfarad`,
    `Conversor de Attôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Fentôfarad`,
    `Conversor de Fentôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Picôfarad`,
    `Conversor de Picôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Nanôfarad`,
    `Conversor de Nanôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Micrôfarad`,
    `Conversor de Micrôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Milífarad`,
    `Conversor de Milífarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Centífarad`,
    `Conversor de Centífarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Decífarad`,
    `Conversor de Decífarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Farad`,
    `Conversor de Farad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Decâfarad`,
    `Conversor de Decâfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Hectôfarad`,
    `Conversor de Hectôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Kilôfarad`,
    `Conversor de Kilôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Megafarad`,
    `Conversor de Megafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Gigafarad`,
    `Conversor de Gigafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Terafarad`,
    `Conversor de Terafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Petafarad`,
    `Conversor de Petafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Exafarad`,
    `Conversor de Exafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Zettafarad`,
    `Conversor de Zettafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Conversor de ${medidasPhysicsCapacitancia[u]} em Yottafarad`,
    `Conversor de Yottafarad em ${medidasPhysicsCapacitancia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsCapacitancia[u]} em Zeptôfarad`,
    `Converte Zeptôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Attôfarad`,
    `Converte Attôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Fentôfarad`,
    `Converte Fentôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Picôfarad`,
    `Converte Picôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Nanôfarad`,
    `Converte Nanôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Micrôfarad`,
    `Converte Micrôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Milífarad`,
    `Converte Milífarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Centífarad`,
    `Converte Centífarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Decífarad`,
    `Converte Decífarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Farad`,
    `Converte Farad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Decâfarad`,
    `Converte Decâfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Hectôfarad`,
    `Converte Hectôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Kilôfarad`,
    `Converte Kilôfarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Megafarad`,
    `Converte Megafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Gigafarad`,
    `Converte Gigafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Terafarad`,
    `Converte Terafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Petafarad`,
    `Converte Petafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Exafarad`,
    `Converte Exafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Zettafarad`,
    `Converte Zettafarad em ${medidasPhysicsCapacitancia[u]}`,
    `Converte ${medidasPhysicsCapacitancia[u]} em Yottafarad`,
    `Converte Yottafarad em ${medidasPhysicsCapacitancia[u]}`
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

  var sectionRaizConverPhysicsCapacitanciaSPart = document.createElement("section");

  sectionRaizConverPhysicsCapacitanciaSPart.classList.add(classeEIDSectionRaizConverPhysicsCapacitancia);

  sectionRaizConverPhysicsCapacitanciaSPart.id = "conver_physics_capacitancia__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsCapacitanciaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsCapacitanciaSPart = document.createElement("button");

  botaoRetornoConverPhysicsCapacitanciaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsCapacitanciaSPart.id = "botao_retorno_physics_capacitancia_part" + `_${u+1}`;

  botaoRetornoConverPhysicsCapacitanciaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsCapacitanciaSPart.appendChild(botaoRetornoConverPhysicsCapacitanciaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsCapacitanciaSPart ***/
    sectionRaizConverPhysicsCapacitanciaSPart.appendChild(cardInferiorSPart);

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