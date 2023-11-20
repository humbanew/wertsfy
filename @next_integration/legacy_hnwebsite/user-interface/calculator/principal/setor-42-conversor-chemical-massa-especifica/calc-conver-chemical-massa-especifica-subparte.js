/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverChemicalMassaEspecificaSPart = "conver_chemical_massa_especifica__spart";
var classeTituloSPart = "conver_chemical_massa_especifica_titulo__spart";
var classeCardInferiorSPart = "card_conver_chemical_massa_especifica__inferior___spart";
var classeCardSuperiorSPart = "card_conver_chemical_massa_especifica__superior___spart";
var classeCardContadorSPart = "card_conver_chemical_massa_especifica_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Massa Específica & Quantidade de Matéria | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Chemical de Massa Específica & Quantidade de Matéria | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverChemicalMassaEspecificaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsIluminancia = [
  "Slug por Pé³",
  "Kilograma por Metro³",
  "Grama por Centímetro³",
  "Libra por Pé³",
  "Libra por Polegada³",
  "Yoctômol",
  "Zeptômol",
  "Attômol",
  "Fentômol",
  "Picômol",
  "Nanômol",
  "Micrômol",
  "Milímol",
  "Centímol",
  "Decímol",
  "Mol",
  "Decâmol",
  "Hectômol",
  "Kilômol",
  "Megamol",
  "Gigamol",
  "Teramol",
  "Petamol",
  "Examol",
  "Zettamol",
];

for (let u = 0; u < medidasPhysicsIluminancia.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsIluminancia[u]} em Kilograma por Metro³`,
    `Conversor de Kilograma por Metro³ em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Grama por Centímetro³`,
    `Conversor de Grama por Centímetro³ em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Libra por Pé³`,
    `Conversor de Libra por Pé³ em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Libra por Polegada³`,
    `Conversor de Libra por Polegada³ em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Yoctômol`,
    `Conversor de Yoctômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zeptômol`,
    `Conversor de Zeptômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Attômol`,
    `Conversor de Attômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Fentômol`,
    `Conversor de Fentômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Picômol`,
    `Conversor de Picômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Nanômol`,
    `Conversor de Nanômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Micrômol`,
    `Conversor de Micrômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Milímol`,
    `Conversor de Milímol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Centímol`,
    `Conversor de Centímol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decímol`,
    `Conversor de Decímol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Mol`,
    `Conversor de Mol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Decâmol`,
    `Conversor de Decâmol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Hectômol`,
    `Conversor de Hectômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Kilômol`,
    `Conversor de Kilômol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Megamol`,
    `Conversor de Megamol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Gigamol`,
    `Conversor de Gigamol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Teramol`,
    `Conversor de Teramol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Petamol`,
    `Conversor de Petamol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Examol`,
    `Conversor de Examol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Zettamol`,
    `Conversor de Zettamol em ${medidasPhysicsIluminancia[u]}`,
    `Conversor de ${medidasPhysicsIluminancia[u]} em Yottamol`,
    `Conversor de Yottamol em ${medidasPhysicsIluminancia[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsIluminancia[u]} em Kilograma por Metro³`,
    `Converte Kilograma por Metro³ em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Grama por Centímetro³`,
    `Converte Grama por Centímetro³ em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Libra por Pé³`,
    `Converte Libra por Pé³ em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Libra por Polegada³`,
    `Converte Libra por Polegada³ em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Yoctômol`,
    `Converte Yoctômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Zeptômol`,
    `Converte Zeptômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Attômol`,
    `Converte Attômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Fentômol`,
    `Converte Fentômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Picômol`,
    `Converte Picômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Nanômol`,
    `Converte Nanômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Micrômol`,
    `Converte Micrômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Milímol`,
    `Converte Milímol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Centímol`,
    `Converte Centímol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decímol`,
    `Converte Decímol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Mol`,
    `Converte Mol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Decâmol`,
    `Converte Decâmol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Hectômol`,
    `Converte Hectômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Kilômol`,
    `Converte Kilômol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Megamol`,
    `Converte Megamol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Gigamol`,
    `Converte Gigamol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Teramol`,
    `Converte Teramol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Petamol`,
    `Converte Petamol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Examol`,
    `Converte Examol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Zettamol`,
    `Converte Zettamol em ${medidasPhysicsIluminancia[u]}`,
    `Converte ${medidasPhysicsIluminancia[u]} em Yottamol`,
    `Converte Yottamol em ${medidasPhysicsIluminancia[u]}`
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

  var sectionRaizConverChemicalMassaEspecificaSPart = document.createElement("section");

  sectionRaizConverChemicalMassaEspecificaSPart.classList.add(classeEIDSectionRaizConverChemicalMassaEspecifica);

  sectionRaizConverChemicalMassaEspecificaSPart.id = "conver_chemical_massa_especifica__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverChemicalMassaEspecificaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverChemicalMassaEspecificaSPart = document.createElement("button");

  botaoRetornoConverChemicalMassaEspecificaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverChemicalMassaEspecificaSPart.id = "botao_retorno_chemical_massa_especifica_part" + `_${u+1}`;

  botaoRetornoConverChemicalMassaEspecificaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverChemicalMassaEspecificaSPart.appendChild(botaoRetornoConverChemicalMassaEspecificaSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverChemicalMassaEspecificaSPart ***/
    sectionRaizConverChemicalMassaEspecificaSPart.appendChild(cardInferiorSPart);

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