/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsIluminanciaSPart = "conver_physics_iluminancia__spart";
var classeTituloSPart = "conver_physics_iluminancia_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_iluminancia__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_iluminancia__superior___spart";
var classeCardContadorSPart = "card_conver_physics_iluminancia_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Iluminância | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Iluminância | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsIluminanciaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsIluminancia = [
  "Yoctôlux",
  "Zeptôlux",
  "Attôlux",
  "Fentôlux",
  "Picôlux",
  "Nanôlux",
  "Micrôlux",
  "Milílux",
  "Centílux",
  "Decílux",
  "Lux",
  "Decâlux",
  "Hectôlux",
  "Kilôlux",
  "Megalux",
  "Gigalux",
  "Teralux",
  "Petalux",
  "Exalux",
  "Zettalux",
];

for (let u = 0; u < medidasPhysicsIluminancia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zeptôlux`,
    `Conversor de Zeptôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Attôlux`,
    `Conversor de Attôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Fentôlux`,
    `Conversor de Fentôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Picôlux`,
    `Conversor de Picôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Nanôlux`,
    `Conversor de Nanôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Micrôlux`,
    `Conversor de Micrôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Milílux`,
    `Conversor de Milílux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Centílux`,
    `Conversor de Centílux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decílux`,
    `Conversor de Decílux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Lux`,
    `Conversor de Lux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decâlux`,
    `Conversor de Decâlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Hectôlux`,
    `Conversor de Hectôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Kilôlux`,
    `Conversor de Kilôlux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Megalux`,
    `Conversor de Megalux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Gigalux`,
    `Conversor de Gigalux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Teralux`,
    `Conversor de Teralux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Petalux`,
    `Conversor de Petalux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Exalux`,
    `Conversor de Exalux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zettalux`,
    `Conversor de Zettalux em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Yottalux`,
    `Conversor de Yottalux em ${medidasPhysicsIluminancia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsIluminancia[u]} em Zeptôlux`,
    `Converte Zeptôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Attôlux`,
    `Converte Attôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Fentôlux`,
    `Converte Fentôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Picôlux`,
    `Converte Picôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Nanôlux`,
    `Converte Nanôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Micrôlux`,
    `Converte Micrôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Milílux`,
    `Converte Milílux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Centílux`,
    `Converte Centílux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decílux`,
    `Converte Decílux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Lux`,
    `Converte Lux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decâlux`,
    `Converte Decâlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Hectôlux`,
    `Converte Hectôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Kilôlux`,
    `Converte Kilôlux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Megalux`,
    `Converte Megalux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Gigalux`,
    `Converte Gigalux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Teralux`,
    `Converte Teralux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Petalux`,
    `Converte Petalux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Exalux`,
    `Converte Exalux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Zettalux`,
    `Converte Zettalux em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Yottalux`,
    `Converte Yottalux em ${medidasPhysicsIluminancia[u]}`
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

  var sectionRaizConverPhysicsIluminanciaSPart = document.createElement("section");

  sectionRaizConverPhysicsIluminanciaSPart.classList.add(classeEIDSectionRaizConverPhysicsIluminancia);

  sectionRaizConverPhysicsIluminanciaSPart.id = "conver_physics_iluminancia__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsIluminanciaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsIluminanciaSPart = document.createElement("button");

  botaoRetornoConverPhysicsIluminanciaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsIluminanciaSPart.id = "botao_retorno_physics_iluminancia_part" + `_${u+1}`;

  botaoRetornoConverPhysicsIluminanciaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsIluminanciaSPart.appendChild(botaoRetornoConverPhysicsIluminanciaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsIluminanciaSPart ***/
    sectionRaizConverPhysicsIluminanciaSPart.appendChild(cardInferiorSPart);

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