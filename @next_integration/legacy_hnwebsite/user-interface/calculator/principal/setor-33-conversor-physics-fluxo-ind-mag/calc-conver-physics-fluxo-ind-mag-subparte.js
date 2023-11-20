/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsFluxoInducaoMagneticaSPart = "conver_physics_fluxo_inducao_magnetica__spart";
var classeTituloSPart = "conver_physics_fluxo_inducao_magnetica_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_fluxo_inducao_magnetica__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_fluxo_inducao_magnetica__superior___spart";
var classeCardContadorSPart = "card_conver_physics_fluxo_inducao_magnetica_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Fluxo de Indução Magnética | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Fluxo de Indução Magnética | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsFluxoInducaoMagneticaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsFluxoInducaoMagnetica = [
  "Yoctôweber",
  "Zeptôweber",
  "Attôweber",
  "Fentôweber",
  "Picôweber",
  "Nanôweber",
  "Micrôweber",
  "Milíweber",
  "Centíweber",
  "Decíweber",
  "Weber",
  "Decâweber",
  "Hectôweber",
  "Kilôweber",
  "Megaweber",
  "Gigaweber",
  "Teraweber",
  "Petaweber",
  "Exaweber",
  "Zettaweber",
];

for (let u = 0; u < medidasPhysicsFluxoInducaoMagnetica.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Zeptôweber`,
    `Conversor de Zeptôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Attôweber`,
    `Conversor de Attôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Fentôweber`,
    `Conversor de Fentôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Picôweber`,
    `Conversor de Picôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Nanôweber`,
    `Conversor de Nanôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Micrôweber`,
    `Conversor de Micrôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Milíweber`,
    `Conversor de Milíweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Centíweber`,
    `Conversor de Centíweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Decíweber`,
    `Conversor de Decíweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Weber`,
    `Conversor de Weber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Decâweber`,
    `Conversor de Decâweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Hectôweber`,
    `Conversor de Hectôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Kilôweber`,
    `Conversor de Kilôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Megaweber`,
    `Conversor de Megaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Gigaweber`,
    `Conversor de Gigaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Teraweber`,
    `Conversor de Teraweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Petaweber`,
    `Conversor de Petaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Exaweber`,
    `Conversor de Exaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Zettaweber`,
    `Conversor de Zettaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsFluxoInducaoMagnetica[u]} em Yottaweber`,
    `Conversor de Yottaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Zeptôweber`,
    `Converte Zeptôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Attôweber`,
    `Converte Attôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Fentôweber`,
    `Converte Fentôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Picôweber`,
    `Converte Picôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Nanôweber`,
    `Converte Nanôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Micrôweber`,
    `Converte Micrôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Milíweber`,
    `Converte Milíweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Centíweber`,
    `Converte Centíweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Decíweber`,
    `Converte Decíweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Weber`,
    `Converte Weber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Decâweber`,
    `Converte Decâweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Hectôweber`,
    `Converte Hectôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Kilôweber`,
    `Converte Kilôweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Megaweber`,
    `Converte Megaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Gigaweber`,
    `Converte Gigaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Teraweber`,
    `Converte Teraweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Petaweber`,
    `Converte Petaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Exaweber`,
    `Converte Exaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Zettaweber`,
    `Converte Zettaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsFluxoInducaoMagnetica[u]} em Yottaweber`,
    `Converte Yottaweber em ${medidasPhysicsFluxoInducaoMagnetica[u]}`
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

  var sectionRaizConverPhysicsFluxoInducaoMagneticaSPart = document.createElement("section");

  sectionRaizConverPhysicsFluxoInducaoMagneticaSPart.classList.add(classeEIDSectionRaizConverPhysicsFluxoInducaoMagnetica);

  sectionRaizConverPhysicsFluxoInducaoMagneticaSPart.id = "conver_physics_fluxo_inducao_magnetica__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsFluxoInducaoMagneticaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsFluxoIndMagSPart = document.createElement("button");

  botaoRetornoConverPhysicsFluxoIndMagSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsFluxoIndMagSPart.id = "botao_retorno_physics_fluxo_inducao_magnetica_part" + `_${u+1}`;

  botaoRetornoConverPhysicsFluxoIndMagSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsFluxoInducaoMagneticaSPart.appendChild(botaoRetornoConverPhysicsFluxoIndMagSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsFluxoInducaoMagneticaSPart ***/
    sectionRaizConverPhysicsFluxoInducaoMagneticaSPart.appendChild(cardInferiorSPart);

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