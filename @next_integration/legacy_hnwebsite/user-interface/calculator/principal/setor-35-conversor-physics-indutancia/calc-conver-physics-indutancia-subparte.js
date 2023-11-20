/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsIndutanciaSPart = "conver_physics_indutancia__spart";
var classeTituloSPart = "conver_physics_indutancia_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_indutancia__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_indutancia__superior___spart";
var classeCardContadorSPart = "card_conver_physics_indutancia_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Indutância | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Indutância | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsIndutanciaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsIndutancia = [
  "Yoctôhenry",
  "Zeptôhenry",
  "Attôhenry",
  "Fentôhenry",
  "Picôhenry",
  "Nanôhenry",
  "Micrôhenry",
  "Milíhenry",
  "Centíhenry",
  "Decíhenry",
  "Henry",
  "Decâhenry",
  "Hectôhenry",
  "Kilôhenry",
  "Megahenry",
  "Gigahenry",
  "Terahenry",
  "Petahenry",
  "Exahenry",
  "Zettahenry",
];

for (let u = 0; u < medidasPhysicsIndutancia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsIndutancia[u]} em Zeptôhenry`,
    `Conversor de Zeptôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Attôhenry`,
    `Conversor de Attôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Fentôhenry`,
    `Conversor de Fentôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Picôhenry`,
    `Conversor de Picôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Nanôhenry`,
    `Conversor de Nanôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Micrôhenry`,
    `Conversor de Micrôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Milíhenry`,
    `Conversor de Milíhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Centíhenry`,
    `Conversor de Centíhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Decíhenry`,
    `Conversor de Decíhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Henry`,
    `Conversor de Henry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Decâhenry`,
    `Conversor de Decâhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Hectôhenry`,
    `Conversor de Hectôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Kilôhenry`,
    `Conversor de Kilôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Megahenry`,
    `Conversor de Megahenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Gigahenry`,
    `Conversor de Gigahenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Terahenry`,
    `Conversor de Terahenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Petahenry`,
    `Conversor de Petahenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Exahenry`,
    `Conversor de Exahenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Zettahenry`,
    `Conversor de Zettahenry em ${medidasPhysicsIndutancia[u]}`,
    `Conversor de ${medidasPhysicsIndutancia[u]} em Yottahenry`,
    `Conversor de Yottahenry em ${medidasPhysicsIndutancia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsIndutancia[u]} em Zeptôhenry`,
    `Converte Zeptôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Attôhenry`,
    `Converte Attôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Fentôhenry`,
    `Converte Fentôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Picôhenry`,
    `Converte Picôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Nanôhenry`,
    `Converte Nanôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Micrôhenry`,
    `Converte Micrôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Milíhenry`,
    `Converte Milíhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Centíhenry`,
    `Converte Centíhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Decíhenry`,
    `Converte Decíhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Henry`,
    `Converte Henry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Decâhenry`,
    `Converte Decâhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Hectôhenry`,
    `Converte Hectôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Kilôhenry`,
    `Converte Kilôhenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Megahenry`,
    `Converte Megahenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Gigahenry`,
    `Converte Gigahenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Terahenry`,
    `Converte Terahenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Petahenry`,
    `Converte Petahenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Exahenry`,
    `Converte Exahenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Zettahenry`,
    `Converte Zettahenry em ${medidasPhysicsIndutancia[u]}`,
    `Converte ${medidasPhysicsIndutancia[u]} em Yottahenry`,
    `Converte Yottahenry em ${medidasPhysicsIndutancia[u]}`
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

  var sectionRaizConverPhysicsIndutanciaSPart = document.createElement("section");

  sectionRaizConverPhysicsIndutanciaSPart.classList.add(classeEIDSectionRaizConverPhysicsIndutancia);

  sectionRaizConverPhysicsIndutanciaSPart.id = "conver_physics_indutancia__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsIndutanciaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsIndutanciaSPart = document.createElement("button");

  botaoRetornoConverPhysicsIndutanciaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsIndutanciaSPart.id = "botao_retorno_physics_indutancia_part" + `_${u+1}`;

  botaoRetornoConverPhysicsIndutanciaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsIndutanciaSPart.appendChild(botaoRetornoConverPhysicsIndutanciaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsIndutanciaSPart ***/
    sectionRaizConverPhysicsIndutanciaSPart.appendChild(cardInferiorSPart);

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