/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsFrequenciaSPart = "conver_physics_frequencia__spart";
var classeTituloSPart = "conver_physics_frequencia_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_frequencia__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_frequencia__superior___spart";
var classeCardContadorSPart = "card_conver_physics_frequencia_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics Frequência | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics Frequência | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsFrequenciaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsFrequencia = [
  "Yoctôhertz",
  "Zeptôhertz",
  "Attôhertz",
  "Fentôhertz",
  "Picôhertz",
  "Nanôhertz",
  "Micrôhertz",
  "Milíhertz",
  "Centíhertz",
  "Decíhertz",
  "Hertz",
  "Decâhertz",
  "Hectôhertz",
  "Kilôhertz",
  "Megahertz",
  "Gigahertz",
  "Terahertz",
  "Petahertz",
  "Exahertz",
  "Zettahertz",
];

for (let u = 0; u < medidasPhysicsFrequencia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsFrequencia[u]} em Zeptôhertz`,
    `Conversor de Zeptôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Attôhertz`,
    `Conversor de Attôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Fentôhertz`,
    `Conversor de Fentôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Picôhertz`,
    `Conversor de Picôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Nanôhertz`,
    `Conversor de Nanôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Micrôhertz`,
    `Conversor de Micrôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Milíhertz`,
    `Conversor de Milíhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Centíhertz`,
    `Conversor de Centíhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Decíhertz`,
    `Conversor de Decíhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Hertz`,
    `Conversor de Hertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Decâhertz`,
    `Conversor de Decâhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Hectôhertz`,
    `Conversor de Hectôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Kilôhertz`,
    `Conversor de Kilôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Megahertz`,
    `Conversor de Megahertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Gigahertz`,
    `Conversor de Gigahertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Terahertz`,
    `Conversor de Terahertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Petahertz`,
    `Conversor de Petahertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Exahertz`,
    `Conversor de Exahertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Zettahertz`,
    `Conversor de Zettahertz em ${medidasPhysicsFrequencia[u]}`,
    `Conversor de ${medidasPhysicsFrequencia[u]} em Yottahertz`,
    `Conversor de Yottahertz em ${medidasPhysicsFrequencia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsFrequencia[u]} em Zeptôhertz`,
    `Converte Zeptôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Attôhertz`,
    `Converte Attôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Fentôhertz`,
    `Converte Fentôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Picôhertz`,
    `Converte Picôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Nanôhertz`,
    `Converte Nanôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Micrôhertz`,
    `Converte Micrôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Milíhertz`,
    `Converte Milíhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Centíhertz`,
    `Converte Centíhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Decíhertz`,
    `Converte Decíhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Hertz`,
    `Converte Hertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Decâhertz`,
    `Converte Decâhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Hectôhertz`,
    `Converte Hectôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Kilôhertz`,
    `Converte Kilôhertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Megahertz`,
    `Converte Megahertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Gigahertz`,
    `Converte Gigahertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Terahertz`,
    `Converte Terahertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Petahertz`,
    `Converte Petahertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Exahertz`,
    `Converte Exahertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Zettahertz`,
    `Converte Zettahertz em ${medidasPhysicsFrequencia[u]}`,
    `Converte ${medidasPhysicsFrequencia[u]} em Yottahertz`,
    `Converte Yottahertz em ${medidasPhysicsFrequencia[u]}`
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

  var sectionRaizConverPhysicsFrequenciaSPart = document.createElement("section");

  sectionRaizConverPhysicsFrequenciaSPart.classList.add(classeEIDSectionRaizConverPhysicsFrequencia);

  sectionRaizConverPhysicsFrequenciaSPart.id = "conver_physics_frequencia__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsFrequenciaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsFreqSPart = document.createElement("button");

  botaoRetornoConverPhysicsFreqSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsFreqSPart.id = "botao_retorno_physics_frequencia_part" + `_${u+1}`;

  botaoRetornoConverPhysicsFreqSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsFrequenciaSPart.appendChild(botaoRetornoConverPhysicsFreqSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsFrequenciaSPart ***/
    sectionRaizConverPhysicsFrequenciaSPart.appendChild(cardInferiorSPart);

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