/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsPressaoSPart = "conver_physics_pressao__spart";
var classeTituloSPart = "conver_physics_pressao_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_pressao__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_pressao__superior___spart";
var classeCardContadorSPart = "card_conver_physics_pressao_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics Pressão | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics Pressão | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsPressaoSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsPressao = [
  "Kilogramas de Força por Centímetros²",
  "Metros de H2O",
  "Pés de H2O",
  "Polegadas de H2O",
  "Milímetros de Hg",
  "Polegadas de Hg",
  "Psi",
  "Yoctôbar",
  "Zeptôbar",
  "Attôbar",
  "Fentôbar",
  "Picôbar",
  "Nanôbar",
  "Micrôbar",
  "Milíbar",
  "Centíbar",
  "Decíbar",
  "Bar",
  "Decâbar",
  "Hectôbar",
  "Kilôbar",
  "Megabar",
  "Gigabar",
  "Terabar",
  "Petabar",
  "Exabar",
  "Zettabar",
  "Yoctôpascal",
  "Zeptôpascal",
  "Attôpascal",
  "Fentôpascal",
  "Picôpascal",
  "Nanôpascal",
  "Micrôpascal",
  "Milípascal",
  "Centípascal",
  "Decípascal",
  "Pascal",
  "Decâpascal",
  "Hectôpascal",
  "Kilôpascal",
  "Megapascal",
  "Gigapascal",
  "Terapascal",
  "Petapascal",
  "Exapascal",
  "Zettapascal",
];

for (let u = 0; u < medidasPhysicsPressao.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsPressao[u]} em Metros de H2O`,
    `Conversor de Metros de H2O em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Pés de H2O`,
    `Conversor de Pés de H2O em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Polegadas de H2O`,
    `Conversor de Polegadas de H2O em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Milímetros de Hg`,
    `Conversor de Milímetros de Hg em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Polegadas de Hg`,
    `Conversor de Polegadas de Hg em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Psi`,
    `Conversor de Psi em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Yoctôbar`,
    `Conversor de Yoctôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Zeptôbar`,
    `Conversor de Zeptôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Attôbar`,
    `Conversor de Attôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Fentôbar`,
    `Conversor de Fentôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Picôbar`,
    `Conversor de Picôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Nanôbar`,
    `Conversor de Nanôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Micrôbar`,
    `Conversor de Micrôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Milíbar`,
    `Conversor de Milíbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Centíbar`,
    `Conversor de Centíbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Decíbar`,
    `Conversor de Decíbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Bar`,
    `Conversor de Bar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Decâbar`,
    `Conversor de Decâbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Hectôbar`,
    `Conversor de Hectôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Kilôbar`,
    `Conversor de Kilôbar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Megabar`,
    `Conversor de Megabar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Gigabar`,
    `Conversor de Gigabar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Terabar`,
    `Conversor de Terabar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Petabar`,
    `Conversor de Petabar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Exabar`,
    `Conversor de Exabar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Zettabar`,
    `Conversor de Zettabar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Yottabar`,
    `Conversor de Yottabar em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Zeptôpascal`,
    `Conversor de Zeptôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Attôpascal`,
    `Conversor de Attôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Fentôpascal`,
    `Conversor de Fentôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Picôpascal`,
    `Conversor de Picôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Nanôpascal`,
    `Conversor de Nanôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Micrôpascal`,
    `Conversor de Micrôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Milípascal`,
    `Conversor de Milípascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Centípascal`,
    `Conversor de Centípascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Decípascal`,
    `Conversor de Decípascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Pascal`,
    `Conversor de Pascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Decâpascal`,
    `Conversor de Decâpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Hectôpascal`,
    `Conversor de Hectôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Kilôpascal`,
    `Conversor de Kilôpascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Megapascal`,
    `Conversor de Megapascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Gigapascal`,
    `Conversor de Gigapascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Terapascal`,
    `Conversor de Terapascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Petapascal`,
    `Conversor de Petapascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Exapascal`,
    `Conversor de Exapascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Zettapascal`,
    `Conversor de Zettapascal em ${medidasPhysicsPressao[u]}`,
    `Conversor de ${medidasPhysicsPressao[u]} em Yottapascal`,
    `Conversor de Yottapascal em ${medidasPhysicsPressao[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsPressao[u]} em Metros de H2O`,
    `Converte Metros de H2O em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Pés de H2O`,
    `Converte Pés de H2O em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Polegadas de H2O`,
    `Converte Polegadas de H2O em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Milímetros de Hg`,
    `Converte Milímetros de Hg em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Polegadas de Hg`,
    `Converte Polegadas de Hg em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Psi`,
    `Converte Psi em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Yoctôbar`,
    `Converte Yoctôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Zeptôbar`,
    `Converte Zeptôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Attôbar`,
    `Converte Attôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Fentôbar`,
    `Converte Fentôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Picôbar`,
    `Converte Picôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Nanôbar`,
    `Converte Nanôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Micrôbar`,
    `Converte Micrôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Milíbar`,
    `Converte Milíbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Centíbar`,
    `Converte Centíbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Decíbar`,
    `Converte Decíbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Bar`,
    `Converte Bar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Decâbar`,
    `Converte Decâbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Hectôbar`,
    `Converte Hectôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Kilôbar`,
    `Converte Kilôbar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Megabar`,
    `Converte Megabar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Gigabar`,
    `Converte Gigabar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Terabar`,
    `Converte Terabar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Petabar`,
    `Converte Petabar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Exabar`,
    `Converte Exabar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Zettabar`,
    `Converte Zettabar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Yottabar`,
    `Converte Yottabar em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Zeptôpascal`,
    `Converte Zeptôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Attôpascal`,
    `Converte Attôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Fentôpascal`,
    `Converte Fentôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Picôpascal`,
    `Converte Picôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Nanôpascal`,
    `Converte Nanôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Micrôpascal`,
    `Converte Micrôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Milípascal`,
    `Converte Milípascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Centípascal`,
    `Converte Centípascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Decípascal`,
    `Converte Decípascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Pascal`,
    `Converte Pascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Decâpascal`,
    `Converte Decâpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Hectôpascal`,
    `Converte Hectôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Kilôpascal`,
    `Converte Kilôpascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Megapascal`,
    `Converte Megapascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Gigapascal`,
    `Converte Gigapascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Terapascal`,
    `Converte Terapascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Petapascal`,
    `Converte Petapascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Exapascal`,
    `Converte Exapascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Zettapascal`,
    `Converte Zettapascal em ${medidasPhysicsPressao[u]}`,
    `Converte ${medidasPhysicsPressao[u]} em Yottapascal`,
    `Converte Yottapascal em ${medidasPhysicsPressao[u]}`
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

  var sectionRaizConverPhysicsPressaoSPart = document.createElement("section");

  sectionRaizConverPhysicsPressaoSPart.classList.add(classeEIDSectionRaizConverPhysicsPressao);

  sectionRaizConverPhysicsPressaoSPart.id = "conver_physics_pressao__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsPressaoSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsPressaoSPart = document.createElement("button");

  botaoRetornoConverPhysicsPressaoSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsPressaoSPart.id = "botao_retorno_physics_pressao_part" + `_${u+1}`;

  botaoRetornoConverPhysicsPressaoSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsPressaoSPart.appendChild(botaoRetornoConverPhysicsPressaoSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsPressaoSPart ***/
    sectionRaizConverPhysicsPressaoSPart.appendChild(cardInferiorSPart);

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