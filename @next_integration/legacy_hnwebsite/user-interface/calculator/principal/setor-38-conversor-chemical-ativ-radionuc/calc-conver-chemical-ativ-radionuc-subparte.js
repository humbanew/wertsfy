/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverChemicalAtivRadionucSPart = "conver_chemical_ativ_radionuc__spart";
var classeTituloSPart = "conver_chemical_ativ_radionuc_titulo__spart";
var classeCardInferiorSPart = "card_conver_chemical_ativ_radionuc__inferior___spart";
var classeCardSuperiorSPart = "card_conver_chemical_ativ_radionuc__superior___spart";
var classeCardContadorSPart = "card_conver_chemical_ativ_radionuc_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Atividade de um Radionuclídio | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Atividade de um Radionuclídio | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverChemicalAtivRadionucSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsIluminancia = [
  "Yoctôbecquerel",
  "Zeptôbecquerel",
  "Attôbecquerel",
  "Fentôbecquerel",
  "Picôbecquerel",
  "Nanôbecquerel",
  "Micrôbecquerel",
  "Milíbecquerel",
  "Centíbecquerel",
  "Decíbecquerel",
  "Becquerel",
  "Decâbecquerel",
  "Hectôbecquerel",
  "Kilôbecquerel",
  "Megabecquerel",
  "Gigabecquerel",
  "Terabecquerel",
  "Petabecquerel",
  "Exabecquerel",
  "Zettabecquerel",
];

for (let u = 0; u < medidasPhysicsIluminancia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zeptôbecquerel`,
    `Conversor de Zeptôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Attôbecquerel`,
    `Conversor de Attôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Fentôbecquerel`,
    `Conversor de Fentôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Picôbecquerel`,
    `Conversor de Picôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Nanôbecquerel`,
    `Conversor de Nanôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Micrôbecquerel`,
    `Conversor de Micrôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Milíbecquerel`,
    `Conversor de Milíbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Centíbecquerel`,
    `Conversor de Centíbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decíbecquerel`,
    `Conversor de Decíbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Becquerel`,
    `Conversor de Becquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decâbecquerel`,
    `Conversor de Decâbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Hectôbecquerel`,
    `Conversor de Hectôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Kilôbecquerel`,
    `Conversor de Kilôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Megabecquerel`,
    `Conversor de Megabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Gigabecquerel`,
    `Conversor de Gigabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Terabecquerel`,
    `Conversor de Terabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Petabecquerel`,
    `Conversor de Petabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Exabecquerel`,
    `Conversor de Exabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zettabecquerel`,
    `Conversor de Zettabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Yottabecquerel`,
    `Conversor de Yottabecquerel em ${medidasPhysicsIluminancia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsIluminancia[u]} em Zeptôbecquerel`,
    `Converte Zeptôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Attôbecquerel`,
    `Converte Attôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Fentôbecquerel`,
    `Converte Fentôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Picôbecquerel`,
    `Converte Picôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Nanôbecquerel`,
    `Converte Nanôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Micrôbecquerel`,
    `Converte Micrôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Milíbecquerel`,
    `Converte Milíbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Centíbecquerel`,
    `Converte Centíbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decíbecquerel`,
    `Converte Decíbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Becquerel`,
    `Converte Becquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decâbecquerel`,
    `Converte Decâbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Hectôbecquerel`,
    `Converte Hectôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Kilôbecquerel`,
    `Converte Kilôbecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Megabecquerel`,
    `Converte Megabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Gigabecquerel`,
    `Converte Gigabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Terabecquerel`,
    `Converte Terabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Petabecquerel`,
    `Converte Petabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Exabecquerel`,
    `Converte Exabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Zettabecquerel`,
    `Converte Zettabecquerel em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Yottabecquerel`,
    `Converte Yottabecquerel em ${medidasPhysicsIluminancia[u]}`
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

  var sectionRaizConverChemicalAtivRadionucSPart = document.createElement("section");

  sectionRaizConverChemicalAtivRadionucSPart.classList.add(classeEIDSectionRaizConverChemicalAtivRadionuc);

  sectionRaizConverChemicalAtivRadionucSPart.id = "conver_chemical_ativ_radionuc__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverChemicalAtivRadionucSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverChemicalAtivRadionucSPart = document.createElement("button");

  botaoRetornoConverChemicalAtivRadionucSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverChemicalAtivRadionucSPart.id = "botao_retorno_chemical_ativ_radionuc_part" + `_${u+1}`;

  botaoRetornoConverChemicalAtivRadionucSPart.textContent = "Voltar à página anterior";

  sectionRaizConverChemicalAtivRadionucSPart.appendChild(botaoRetornoConverChemicalAtivRadionucSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverChemicalAtivRadionucSPart ***/
    sectionRaizConverChemicalAtivRadionucSPart.appendChild(cardInferiorSPart);

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