/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsEnergiaSPart = "conver_physics_energia__spart";
var classeTituloSPart = "conver_physics_energia_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_energia__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_energia__superior___spart";
var classeCardContadorSPart = "card_conver_physics_energia_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Energia | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Energia | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsEnergiaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsEnergia = [
  "Yoctôjoules",
  "Zeptôjoules",
  "Attôjoules",
  "Fentôjoules",
  "Picôjoules",
  "Nanôjoules",
  "Micrôjoules",
  "Milíjoules",
  "Centíjoules",
  "Decíjoules",
  "Joules",
  "Decâjoules",
  "Hectôjoules",
  "Kilôjoules",
  "Megajoules",
  "Gigajoules",
  "Terajoules",
  "Petajoules",
  "Exajoules",
  "Zettajoules",
];

for (let u = 0; u < medidasPhysicsEnergia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsEnergia[u]} em Zeptôjoules`,
    `Conversor de Zeptôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Attôjoules`,
    `Conversor de Attôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Fentôjoules`,
    `Conversor de Fentôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Picôjoules`,
    `Conversor de Picôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Nanôjoules`,
    `Conversor de Nanôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Micrôjoules`,
    `Conversor de Micrôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Milíjoules`,
    `Conversor de Milíjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Centíjoules`,
    `Conversor de Centíjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Decíjoules`,
    `Conversor de Decíjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Joules`,
    `Conversor de Joules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Decâjoules`,
    `Conversor de Decâjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Hectôjoules`,
    `Conversor de Hectôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Kilôjoules`,
    `Conversor de Kilôjoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Megajoules`,
    `Conversor de Megajoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Gigajoules`,
    `Conversor de Gigajoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Terajoules`,
    `Conversor de Terajoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Petajoules`,
    `Conversor de Petajoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Exajoules`,
    `Conversor de Exajoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Zettajoules`,
    `Conversor de Zettajoules em ${medidasPhysicsEnergia[u]}`,
    `Conversor de ${medidasPhysicsEnergia[u]} em Yottajoules`,
    `Conversor de Yottajoules em ${medidasPhysicsEnergia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsEnergia[u]} em Zeptôjoules`,
    `Converte Zeptôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Attôjoules`,
    `Converte Attôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Fentôjoules`,
    `Converte Fentôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Picôjoules`,
    `Converte Picôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Nanôjoules`,
    `Converte Nanôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Micrôjoules`,
    `Converte Micrôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Milíjoules`,
    `Converte Milíjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Centíjoules`,
    `Converte Centíjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Decíjoules`,
    `Converte Decíjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Joules`,
    `Converte Joules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Decâjoules`,
    `Converte Decâjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Hectôjoules`,
    `Converte Hectôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Kilôjoules`,
    `Converte Kilôjoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Megajoules`,
    `Converte Megajoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Gigajoules`,
    `Converte Gigajoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Terajoules`,
    `Converte Terajoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Petajoules`,
    `Converte Petajoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Exajoules`,
    `Converte Exajoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Zettajoules`,
    `Converte Zettajoules em ${medidasPhysicsEnergia[u]}`,
    `Converte ${medidasPhysicsEnergia[u]} em Yottajoules`,
    `Converte Yottajoules em ${medidasPhysicsEnergia[u]}`
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

  var sectionRaizConverPhysicsEnergiaSPart = document.createElement("section");

  sectionRaizConverPhysicsEnergiaSPart.classList.add(classeEIDSectionRaizConverPhysicsEnergia);

  sectionRaizConverPhysicsEnergiaSPart.id = "conver_physics_energia__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsEnergiaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsEnergiaSPart = document.createElement("button");

  botaoRetornoConverPhysicsEnergiaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsEnergiaSPart.id = "botao_retorno_physics_energia_part" + `_${u+1}`;

  botaoRetornoConverPhysicsEnergiaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsEnergiaSPart.appendChild(botaoRetornoConverPhysicsEnergiaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsEnergiaSPart ***/
    sectionRaizConverPhysicsEnergiaSPart.appendChild(cardInferiorSPart);

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