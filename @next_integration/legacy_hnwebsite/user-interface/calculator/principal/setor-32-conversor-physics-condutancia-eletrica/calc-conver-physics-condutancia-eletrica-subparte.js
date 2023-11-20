/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsCondutanciaEletricaSPart = "conver_physics_condutancia_eletrica__spart";
var classeTituloSPart = "conver_physics_condutancia_eletrica_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_condutancia_eletrica__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_condutancia_eletrica__superior___spart";
var classeCardContadorSPart = "card_conver_physics_condutancia_eletrica_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Condutância Elétrica | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Condutância Elétrica | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsCondutanciaEletricaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsCondutanciaEletrica = [
  "Yoctôsiemens",
  "Zeptôsiemens",
  "Attôsiemens",
  "Fentôsiemens",
  "Picôsiemens",
  "Nanôsiemens",
  "Micrôsiemens",
  "Milísiemens",
  "Centísiemens",
  "Decísiemens",
  "Siemens",
  "Decâsiemens",
  "Hectôsiemens",
  "Kilôsiemens",
  "Megasiemens",
  "Gigasiemens",
  "Terasiemens",
  "Petasiemens",
  "Exasiemens",
  "Zettasiemens",
];

for (let u = 0; u < medidasPhysicsCondutanciaEletrica.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Zeptôsiemens`,
    `Conversor de Zeptôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Attôsiemens`,
    `Conversor de Attôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Fentôsiemens`,
    `Conversor de Fentôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Picôsiemens`,
    `Conversor de Picôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Nanôsiemens`,
    `Conversor de Nanôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Micrôsiemens`,
    `Conversor de Micrôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Milísiemens`,
    `Conversor de Milísiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Centísiemens`,
    `Conversor de Centísiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Decísiemens`,
    `Conversor de Decísiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Siemens`,
    `Conversor de Siemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Decâsiemens`,
    `Conversor de Decâsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Hectôsiemens`,
    `Conversor de Hectôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Kilôsiemens`,
    `Conversor de Kilôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Megasiemens`,
    `Conversor de Megasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Gigasiemens`,
    `Conversor de Gigasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Terasiemens`,
    `Conversor de Terasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Petasiemens`,
    `Conversor de Petasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Exasiemens`,
    `Conversor de Exasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Zettasiemens`,
    `Conversor de Zettasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCondutanciaEletrica[u]} em Yottasiemens`,
    `Conversor de Yottasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Zeptôsiemens`,
    `Converte Zeptôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Attôsiemens`,
    `Converte Attôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Fentôsiemens`,
    `Converte Fentôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Picôsiemens`,
    `Converte Picôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Nanôsiemens`,
    `Converte Nanôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Micrôsiemens`,
    `Converte Micrôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Milísiemens`,
    `Converte Milísiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Centísiemens`,
    `Converte Centísiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Decísiemens`,
    `Converte Decísiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Siemens`,
    `Converte Siemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Decâsiemens`,
    `Converte Decâsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Hectôsiemens`,
    `Converte Hectôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Kilôsiemens`,
    `Converte Kilôsiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Megasiemens`,
    `Converte Megasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Gigasiemens`,
    `Converte Gigasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Terasiemens`,
    `Converte Terasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Petasiemens`,
    `Converte Petasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Exasiemens`,
    `Converte Exasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Zettasiemens`,
    `Converte Zettasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`,
    `Converte ${medidasPhysicsCondutanciaEletrica[u]} em Yottasiemens`,
    `Converte Yottasiemens em ${medidasPhysicsCondutanciaEletrica[u]}`
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

  var sectionRaizConverPhysicsCondutanciaEletricaSPart = document.createElement("section");

  sectionRaizConverPhysicsCondutanciaEletricaSPart.classList.add(classeEIDSectionRaizConverPhysicsCondutanciaEletrica);

  sectionRaizConverPhysicsCondutanciaEletricaSPart.id = "conver_physics_condutancia_eletrica__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsCondutanciaEletricaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsCondutEletricaSPart = document.createElement("button");

  botaoRetornoConverPhysicsCondutEletricaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsCondutEletricaSPart.id = "botao_retorno_physics_condutancia_eletrica_part" + `_${u+1}`;

  botaoRetornoConverPhysicsCondutEletricaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsCondutanciaEletricaSPart.appendChild(botaoRetornoConverPhysicsCondutEletricaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsCondutanciaEletricaSPart ***/
    sectionRaizConverPhysicsCondutanciaEletricaSPart.appendChild(cardInferiorSPart);

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