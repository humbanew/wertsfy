/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsInducaoMagneticaSPart = "conver_physics_inducao_magnetica__spart";
var classeTituloSPart = "conver_physics_inducao_magnetica_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_inducao_magnetica__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_inducao_magnetica__superior___spart";
var classeCardContadorSPart = "card_conver_physics_inducao_magnetica_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Indução Magnética | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Indução Magnética | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsInducaoMagneticaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsInducaoMagnetica = [
  "Yoctôteslas",
  "Zeptôteslas",
  "Attôteslas",
  "Fentôteslas",
  "Picôteslas",
  "Nanôteslas",
  "Micrôteslas",
  "Milíteslas",
  "Centíteslas",
  "Decíteslas",
  "Teslas",
  "Decâteslas",
  "Hectôteslas",
  "Kilôteslas",
  "Megateslas",
  "Gigateslas",
  "Terateslas",
  "Petateslas",
  "Exateslas",
  "Zettateslas",
];

for (let u = 0; u < medidasPhysicsInducaoMagnetica.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Zeptôteslas`,
    `Conversor de Zeptôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Attôteslas`,
    `Conversor de Attôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Fentôteslas`,
    `Conversor de Fentôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Picôteslas`,
    `Conversor de Picôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Nanôteslas`,
    `Conversor de Nanôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Micrôteslas`,
    `Conversor de Micrôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Milíteslas`,
    `Conversor de Milíteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Centíteslas`,
    `Conversor de Centíteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Decíteslas`,
    `Conversor de Decíteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Teslas`,
    `Conversor de Teslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Decâteslas`,
    `Conversor de Decâteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Hectôteslas`,
    `Conversor de Hectôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Kilôteslas`,
    `Conversor de Kilôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Megateslas`,
    `Conversor de Megateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Gigateslas`,
    `Conversor de Gigateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Terateslas`,
    `Conversor de Terateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Petateslas`,
    `Conversor de Petateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Exateslas`,
    `Conversor de Exateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Zettateslas`,
    `Conversor de Zettateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Conversor de ${medidasPhysicsInducaoMagnetica[u]} em Yottateslas`,
    `Conversor de Yottateslas em ${medidasPhysicsInducaoMagnetica[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Zeptôteslas`,
    `Converte Zeptôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Attôteslas`,
    `Converte Attôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Fentôteslas`,
    `Converte Fentôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Picôteslas`,
    `Converte Picôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Nanôteslas`,
    `Converte Nanôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Micrôteslas`,
    `Converte Micrôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Milíteslas`,
    `Converte Milíteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Centíteslas`,
    `Converte Centíteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Decíteslas`,
    `Converte Decíteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Teslas`,
    `Converte Teslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Decâteslas`,
    `Converte Decâteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Hectôteslas`,
    `Converte Hectôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Kilôteslas`,
    `Converte Kilôteslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Megateslas`,
    `Converte Megateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Gigateslas`,
    `Converte Gigateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Terateslas`,
    `Converte Terateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Petateslas`,
    `Converte Petateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Exateslas`,
    `Converte Exateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Zettateslas`,
    `Converte Zettateslas em ${medidasPhysicsInducaoMagnetica[u]}`,
    `Converte ${medidasPhysicsInducaoMagnetica[u]} em Yottateslas`,
    `Converte Yottateslas em ${medidasPhysicsInducaoMagnetica[u]}`
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

  var sectionRaizConverPhysicsInducaoMagneticaSPart = document.createElement("section");

  sectionRaizConverPhysicsInducaoMagneticaSPart.classList.add(classeEIDSectionRaizConverPhysicsInducaoMagnetica);

  sectionRaizConverPhysicsInducaoMagneticaSPart.id = "conver_physics_inducao_magnetica__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsInducaoMagneticaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsIndMagSPart = document.createElement("button");

  botaoRetornoConverPhysicsIndMagSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsIndMagSPart.id = "botao_retorno_physics_inducao_magnetica_part" + `_${u+1}`;

  botaoRetornoConverPhysicsIndMagSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsInducaoMagneticaSPart.appendChild(botaoRetornoConverPhysicsIndMagSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsInducaoMagneticaSPart ***/
    sectionRaizConverPhysicsInducaoMagneticaSPart.appendChild(cardInferiorSPart);

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