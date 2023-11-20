/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsResistenciaEletricaSPart = "conver_physics_resistencia_eletrica__spart";
var classeTituloSPart = "conver_physics_resistencia_eletrica_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_resistencia_eletrica__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_resistencia_eletrica__superior___spart";
var classeCardContadorSPart = "card_conver_physics_resistencia_eletrica_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Resistência Elétrica | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Resistência Elétrica | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsResistenciaEletricaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsResistenciaEletrica = [
  "Yoctôohms",
  "Zeptôohms",
  "Attôohms",
  "Fentôohms",
  "Picôohms",
  "Nanôohms",
  "Micrôohms",
  "Milíohms",
  "Centíohms",
  "Decíohms",
  "Ohms",
  "Decâohms",
  "Hectôohms",
  "Kilôohms",
  "Megaohms",
  "Gigaohms",
  "Teraohms",
  "Petaohms",
  "Exaohms",
  "Zettaohms",
];

for (let u = 0; u < medidasPhysicsResistenciaEletrica.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Zeptôohms`,
    `Conversor de Zeptôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Attôohms`,
    `Conversor de Attôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Fentôohms`,
    `Conversor de Fentôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Picôohms`,
    `Conversor de Picôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Nanôohms`,
    `Conversor de Nanôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Micrôohms`,
    `Conversor de Micrôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Milíohms`,
    `Conversor de Milíohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Centíohms`,
    `Conversor de Centíohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Decíohms`,
    `Conversor de Decíohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Ohms`,
    `Conversor de Ohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Decâohms`,
    `Conversor de Decâohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Hectôohms`,
    `Conversor de Hectôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Kilôohms`,
    `Conversor de Kilôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Megaohms`,
    `Conversor de Megaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Gigaohms`,
    `Conversor de Gigaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Teraohms`,
    `Conversor de Teraohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Petaohms`,
    `Conversor de Petaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Exaohms`,
    `Conversor de Exaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Zettaohms`,
    `Conversor de Zettaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsResistenciaEletrica[u]} em Yottaohms`,
    `Conversor de Yottaohms em ${medidasPhysicsResistenciaEletrica[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Zeptôohms`,
    `Converte Zeptôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Attôohms`,
    `Converte Attôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Fentôohms`,
    `Converte Fentôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Picôohms`,
    `Converte Picôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Nanôohms`,
    `Converte Nanôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Micrôohms`,
    `Converte Micrôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Milíohms`,
    `Converte Milíohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Centíohms`,
    `Converte Centíohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Decíohms`,
    `Converte Decíohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Ohms`,
    `Converte Ohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Decâohms`,
    `Converte Decâohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Hectôohms`,
    `Converte Hectôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Kilôohms`,
    `Converte Kilôohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Megaohms`,
    `Converte Megaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Gigaohms`,
    `Converte Gigaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Teraohms`,
    `Converte Teraohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Petaohms`,
    `Converte Petaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Exaohms`,
    `Converte Exaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Zettaohms`,
    `Converte Zettaohms em ${medidasPhysicsResistenciaEletrica[u]}`,
    `Converte ${medidasPhysicsResistenciaEletrica[u]} em Yottaohms`,
    `Converte Yottaohms em ${medidasPhysicsResistenciaEletrica[u]}`
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

  var sectionRaizConverPhysicsResistenciaEletricaSPart = document.createElement("section");

  sectionRaizConverPhysicsResistenciaEletricaSPart.classList.add(classeEIDSectionRaizConverPhysicsResistenciaEletrica);

  sectionRaizConverPhysicsResistenciaEletricaSPart.id = "conver_physics_resistencia_eletrica__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsResistenciaEletricaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsResistEletricaSPart = document.createElement("button");

  botaoRetornoConverPhysicsResistEletricaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsResistEletricaSPart.id = "botao_retorno_physics_resistencia_eletrica_part" + `_${u+1}`;

  botaoRetornoConverPhysicsResistEletricaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsResistenciaEletricaSPart.appendChild(botaoRetornoConverPhysicsResistEletricaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsResistenciaEletricaSPart ***/
    sectionRaizConverPhysicsResistenciaEletricaSPart.appendChild(cardInferiorSPart);

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