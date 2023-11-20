/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverChemicalAtividadeCataliticaSPart = "conver_chemical_atividade_catalitica__spart";
var classeTituloSPart = "conver_chemical_atividade_catalitica_titulo__spart";
var classeCardInferiorSPart = "card_conver_chemical_atividade_catalitica__inferior___spart";
var classeCardSuperiorSPart = "card_conver_chemical_atividade_catalitica__superior___spart";
var classeCardContadorSPart = "card_conver_chemical_atividade_catalitica_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Atividade Catalítica | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Atividade Catalítica | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverChemicalAtividadeCataliticaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsIluminancia = [
  "Yoctôkatal",
  "Zeptôkatal",
  "Attôkatal",
  "Fentôkatal",
  "Picôkatal",
  "Nanôkatal",
  "Micrôkatal",
  "Milíkatal",
  "Centíkatal",
  "Decíkatal",
  "Katal",
  "Decâkatal",
  "Hectôkatal",
  "Kilôkatal",
  "Megakatal",
  "Gigakatal",
  "Terakatal",
  "Petakatal",
  "Exakatal",
  "Zettakatal",
];

for (let u = 0; u < medidasPhysicsIluminancia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zeptôkatal`,
    `Conversor de Zeptôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Attôkatal`,
    `Conversor de Attôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Fentôkatal`,
    `Conversor de Fentôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Picôkatal`,
    `Conversor de Picôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Nanôkatal`,
    `Conversor de Nanôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Micrôkatal`,
    `Conversor de Micrôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Milíkatal`,
    `Conversor de Milíkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Centíkatal`,
    `Conversor de Centíkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decíkatal`,
    `Conversor de Decíkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Katal`,
    `Conversor de Katal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decâkatal`,
    `Conversor de Decâkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Hectôkatal`,
    `Conversor de Hectôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Kilôkatal`,
    `Conversor de Kilôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Megakatal`,
    `Conversor de Megakatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Gigakatal`,
    `Conversor de Gigakatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Terakatal`,
    `Conversor de Terakatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Petakatal`,
    `Conversor de Petakatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Exakatal`,
    `Conversor de Exakatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zettakatal`,
    `Conversor de Zettakatal em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Yottakatal`,
    `Conversor de Yottakatal em ${medidasPhysicsIluminancia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsIluminancia[u]} em Zeptôkatal`,
    `Converte Zeptôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Attôkatal`,
    `Converte Attôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Fentôkatal`,
    `Converte Fentôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Picôkatal`,
    `Converte Picôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Nanôkatal`,
    `Converte Nanôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Micrôkatal`,
    `Converte Micrôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Milíkatal`,
    `Converte Milíkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Centíkatal`,
    `Converte Centíkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decíkatal`,
    `Converte Decíkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Katal`,
    `Converte Katal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decâkatal`,
    `Converte Decâkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Hectôkatal`,
    `Converte Hectôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Kilôkatal`,
    `Converte Kilôkatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Megakatal`,
    `Converte Megakatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Gigakatal`,
    `Converte Gigakatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Terakatal`,
    `Converte Terakatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Petakatal`,
    `Converte Petakatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Exakatal`,
    `Converte Exakatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Zettakatal`,
    `Converte Zettakatal em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Yottakatal`,
    `Converte Yottakatal em ${medidasPhysicsIluminancia[u]}`
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

  var sectionRaizConverChemicalAtividadeCataliticaSPart = document.createElement("section");

  sectionRaizConverChemicalAtividadeCataliticaSPart.classList.add(classeEIDSectionRaizConverChemicalAtividadeCatalitica);

  sectionRaizConverChemicalAtividadeCataliticaSPart.id = "conver_chemical_atividade_catalitica__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverChemicalAtividadeCataliticaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverChemicalAtivCataliticaSPart = document.createElement("button");

  botaoRetornoConverChemicalAtivCataliticaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverChemicalAtivCataliticaSPart.id = "botao_retorno_chemical_atividade_catalitica_part" + `_${u+1}`;

  botaoRetornoConverChemicalAtivCataliticaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverChemicalAtividadeCataliticaSPart.appendChild(botaoRetornoConverChemicalAtivCataliticaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverChemicalAtividadeCataliticaSPart ***/
    sectionRaizConverChemicalAtividadeCataliticaSPart.appendChild(cardInferiorSPart);

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