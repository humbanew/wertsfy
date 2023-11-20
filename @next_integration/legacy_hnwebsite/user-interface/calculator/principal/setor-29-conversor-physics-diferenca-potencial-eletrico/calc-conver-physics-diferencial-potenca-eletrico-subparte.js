/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsDifPotEletricoSPart = "conver_physics_dif_pot_eletrico__spart";
var classeTituloSPart = "conver_physics_dif_pot_eletrico_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_dif_pot_eletrico__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_dif_pot_eletrico__superior___spart";
var classeCardContadorSPart = "card_conver_physics_dif_pot_eletrico_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics da Diferença de Potencial Elétrico | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics da Diferença de Potencial Elétrico | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsDifPotEletricoSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsDifPotEletrico = [
  "Yoctôvolts",
  "Zeptôvolts",
  "Attôvolts",
  "Fentôvolts",
  "Picôvolts",
  "Nanôvolts",
  "Micrôvolts",
  "Milívolts",
  "Centívolts",
  "Decívolts",
  "Volts",
  "Decâvolts",
  "Hectôvolts",
  "Kilôvolts",
  "Megavolts",
  "Gigavolts",
  "Teravolts",
  "Petavolts",
  "Exavolts",
  "Zettavolts",
];

for (let u = 0; u < medidasPhysicsDifPotEletrico.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Zeptôvolts`,
    `Conversor de Zeptôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Attôvolts`,
    `Conversor de Attôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Fentôvolts`,
    `Conversor de Fentôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Picôvolts`,
    `Conversor de Picôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Nanôvolts`,
    `Conversor de Nanôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Micrôvolts`,
    `Conversor de Micrôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Milívolts`,
    `Conversor de Milívolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Centívolts`,
    `Conversor de Centívolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Decívolts`,
    `Conversor de Decívolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Volts`,
    `Conversor de Volts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Decâvolts`,
    `Conversor de Decâvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Hectôvolts`,
    `Conversor de Hectôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Kilôvolts`,
    `Conversor de Kilôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Megavolts`,
    `Conversor de Megavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Gigavolts`,
    `Conversor de Gigavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Teravolts`,
    `Conversor de Teravolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Petavolts`,
    `Conversor de Petavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Exavolts`,
    `Conversor de Exavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Zettavolts`,
    `Conversor de Zettavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Conversor de ${medidasPhysicsDifPotEletrico[u]} em Yottavolts`,
    `Conversor de Yottavolts em ${medidasPhysicsDifPotEletrico[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Zeptôvolts`,
    `Converte Zeptôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Attôvolts`,
    `Converte Attôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Fentôvolts`,
    `Converte Fentôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Picôvolts`,
    `Converte Picôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Nanôvolts`,
    `Converte Nanôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Micrôvolts`,
    `Converte Micrôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Milívolts`,
    `Converte Milívolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Centívolts`,
    `Converte Centívolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Decívolts`,
    `Converte Decívolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Volts`,
    `Converte Volts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Decâvolts`,
    `Converte Decâvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Hectôvolts`,
    `Converte Hectôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Kilôvolts`,
    `Converte Kilôvolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Megavolts`,
    `Converte Megavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Gigavolts`,
    `Converte Gigavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Teravolts`,
    `Converte Teravolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Petavolts`,
    `Converte Petavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Exavolts`,
    `Converte Exavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Zettavolts`,
    `Converte Zettavolts em ${medidasPhysicsDifPotEletrico[u]}`,
    `Converte ${medidasPhysicsDifPotEletrico[u]} em Yottavolts`,
    `Converte Yottavolts em ${medidasPhysicsDifPotEletrico[u]}`
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

  var sectionRaizConverPhysicsDifPotEletricoSPart = document.createElement("section");

  sectionRaizConverPhysicsDifPotEletricoSPart.classList.add(classeEIDSectionRaizConverPhysicsDifPotEletrico);

  sectionRaizConverPhysicsDifPotEletricoSPart.id = "conver_physics_dif_pot_eletrico__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsDifPotEletricoSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoDifPotEletricoSPart = document.createElement("button");

  botaoRetornoDifPotEletricoSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoDifPotEletricoSPart.id = "botao_retorno_physics_dif_pot_eletrico_part" + `_${u+1}`;

  botaoRetornoDifPotEletricoSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsDifPotEletricoSPart.appendChild(botaoRetornoDifPotEletricoSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsDifPotEletricoSPart ***/
    sectionRaizConverPhysicsDifPotEletricoSPart.appendChild(cardInferiorSPart);

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