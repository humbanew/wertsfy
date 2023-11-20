/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsFluxoLuminosoSPart = "conver_physics_fluxo_luminoso__spart";
var classeTituloSPart = "conver_physics_fluxo_luminoso_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_fluxo_luminoso__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_fluxo_luminoso__superior___spart";
var classeCardContadorSPart = "card_conver_physics_fluxo_luminoso_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Fluxo Luminoso | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Fluxo Luminoso | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsFluxoLuminosoSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsFluxoLuminoso = [
  "Yoctôlumen",
  "Zeptôlumen",
  "Attôlumen",
  "Fentôlumen",
  "Picôlumen",
  "Nanôlumen",
  "Micrôlumen",
  "Milílumen",
  "Centílumen",
  "Decílumen",
  "Lumen",
  "Decâlumen",
  "Hectôlumen",
  "Kilôlumen",
  "Megalumen",
  "Gigalumen",
  "Teralumen",
  "Petalumen",
  "Exalumen",
  "Zettalumen",
];

for (let u = 0; u < medidasPhysicsFluxoLuminoso.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Zeptôlumen`,
    `Conversor de Zeptôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Attôlumen`,
    `Conversor de Attôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Fentôlumen`,
    `Conversor de Fentôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Picôlumen`,
    `Conversor de Picôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Nanôlumen`,
    `Conversor de Nanôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Micrôlumen`,
    `Conversor de Micrôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Milílumen`,
    `Conversor de Milílumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Centílumen`,
    `Conversor de Centílumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Decílumen`,
    `Conversor de Decílumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Lumen`,
    `Conversor de Lumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Decâlumen`,
    `Conversor de Decâlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Hectôlumen`,
    `Conversor de Hectôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Kilôlumen`,
    `Conversor de Kilôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Megalumen`,
    `Conversor de Megalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Gigalumen`,
    `Conversor de Gigalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Teralumen`,
    `Conversor de Teralumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Petalumen`,
    `Conversor de Petalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Exalumen`,
    `Conversor de Exalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Zettalumen`,
    `Conversor de Zettalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Conversor de ${medidasPhysicsFluxoLuminoso[u]} em Yottalumen`,
    `Conversor de Yottalumen em ${medidasPhysicsFluxoLuminoso[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Zeptôlumen`,
    `Converte Zeptôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Attôlumen`,
    `Converte Attôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Fentôlumen`,
    `Converte Fentôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Picôlumen`,
    `Converte Picôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Nanôlumen`,
    `Converte Nanôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Micrôlumen`,
    `Converte Micrôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Milílumen`,
    `Converte Milílumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Centílumen`,
    `Converte Centílumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Decílumen`,
    `Converte Decílumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Lumen`,
    `Converte Lumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Decâlumen`,
    `Converte Decâlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Hectôlumen`,
    `Converte Hectôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Kilôlumen`,
    `Converte Kilôlumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Megalumen`,
    `Converte Megalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Gigalumen`,
    `Converte Gigalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Teralumen`,
    `Converte Teralumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Petalumen`,
    `Converte Petalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Exalumen`,
    `Converte Exalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Zettalumen`,
    `Converte Zettalumen em ${medidasPhysicsFluxoLuminoso[u]}`,
    `Converte ${medidasPhysicsFluxoLuminoso[u]} em Yottalumen`,
    `Converte Yottalumen em ${medidasPhysicsFluxoLuminoso[u]}`
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

  var sectionRaizConverPhysicsFluxoLuminosoSPart = document.createElement("section");

  sectionRaizConverPhysicsFluxoLuminosoSPart.classList.add(classeEIDSectionRaizConverPhysicsFluxoLuminoso);

  sectionRaizConverPhysicsFluxoLuminosoSPart.id = "conver_physics_fluxo_luminoso__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsFluxoLuminosoSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsFluxoLuminosoSPart = document.createElement("button");

  botaoRetornoConverPhysicsFluxoLuminosoSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsFluxoLuminosoSPart.id = "botao_retorno_physics_fluxo_luminoso_part" + `_${u+1}`;

  botaoRetornoConverPhysicsFluxoLuminosoSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsFluxoLuminosoSPart.appendChild(botaoRetornoConverPhysicsFluxoLuminosoSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsFluxoLuminosoSPart ***/
    sectionRaizConverPhysicsFluxoLuminosoSPart.appendChild(cardInferiorSPart);

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