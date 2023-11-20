/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverChemicalDoseEquivalenteSPart = "conver_chemical_dose_equivalente__spart";
var classeTituloSPart = "conver_chemical_dose_equivalente_titulo__spart";
var classeCardInferiorSPart = "card_conver_chemical_dose_equivalente__inferior___spart";
var classeCardSuperiorSPart = "card_conver_chemical_dose_equivalente__superior___spart";
var classeCardContadorSPart = "card_conver_chemical_dose_equivalente_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Dose Equivalente | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Dose Equivalente | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverChemicalDoseEquivalenteSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsIluminancia = [
  "Yoctôsievert",
  "Zeptôsievert",
  "Attôsievert",
  "Fentôsievert",
  "Picôsievert",
  "Nanôsievert",
  "Micrôsievert",
  "Milísievert",
  "Centísievert",
  "Decísievert",
  "Sievert",
  "Decâsievert",
  "Hectôsievert",
  "Kilôsievert",
  "Megasievert",
  "Gigasievert",
  "Terasievert",
  "Petasievert",
  "Exasievert",
  "Zettasievert",
];

for (let u = 0; u < medidasPhysicsIluminancia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zeptôsievert`,
    `Conversor de Zeptôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Attôsievert`,
    `Conversor de Attôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Fentôsievert`,
    `Conversor de Fentôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Picôsievert`,
    `Conversor de Picôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Nanôsievert`,
    `Conversor de Nanôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Micrôsievert`,
    `Conversor de Micrôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Milísievert`,
    `Conversor de Milísievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Centísievert`,
    `Conversor de Centísievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decísievert`,
    `Conversor de Decísievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Sievert`,
    `Conversor de Sievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decâsievert`,
    `Conversor de Decâsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Hectôsievert`,
    `Conversor de Hectôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Kilôsievert`,
    `Conversor de Kilôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Megasievert`,
    `Conversor de Megasievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Gigasievert`,
    `Conversor de Gigasievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Terasievert`,
    `Conversor de Terasievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Petasievert`,
    `Conversor de Petasievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Exasievert`,
    `Conversor de Exasievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zettasievert`,
    `Conversor de Zettasievert em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Yottasievert`,
    `Conversor de Yottasievert em ${medidasPhysicsIluminancia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsIluminancia[u]} em Zeptôsievert`,
    `Converte Zeptôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Attôsievert`,
    `Converte Attôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Fentôsievert`,
    `Converte Fentôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Picôsievert`,
    `Converte Picôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Nanôsievert`,
    `Converte Nanôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Micrôsievert`,
    `Converte Micrôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Milísievert`,
    `Converte Milísievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Centísievert`,
    `Converte Centísievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decísievert`,
    `Converte Decísievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Sievert`,
    `Converte Sievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decâsievert`,
    `Converte Decâsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Hectôsievert`,
    `Converte Hectôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Kilôsievert`,
    `Converte Kilôsievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Megasievert`,
    `Converte Megasievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Gigasievert`,
    `Converte Gigasievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Terasievert`,
    `Converte Terasievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Petasievert`,
    `Converte Petasievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Exasievert`,
    `Converte Exasievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Zettasievert`,
    `Converte Zettasievert em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Yottasievert`,
    `Converte Yottasievert em ${medidasPhysicsIluminancia[u]}`
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

  var sectionRaizConverChemicalDoseEquivalenteSPart = document.createElement("section");

  sectionRaizConverChemicalDoseEquivalenteSPart.classList.add(classeEIDSectionRaizConverChemicalDoseEquivalente);

  sectionRaizConverChemicalDoseEquivalenteSPart.id = "conver_chemical_dose_equivalente__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverChemicalDoseEquivalenteSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverChemicalDoseEquivalenteSPart = document.createElement("button");

  botaoRetornoConverChemicalDoseEquivalenteSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverChemicalDoseEquivalenteSPart.id = "botao_retorno_chemical_dose_equivalente_part" + `_${u+1}`;

  botaoRetornoConverChemicalDoseEquivalenteSPart.textContent = "Voltar à página anterior";

  sectionRaizConverChemicalDoseEquivalenteSPart.appendChild(botaoRetornoConverChemicalDoseEquivalenteSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverChemicalDoseEquivalenteSPart ***/
    sectionRaizConverChemicalDoseEquivalenteSPart.appendChild(cardInferiorSPart);

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