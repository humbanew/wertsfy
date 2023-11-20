/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Chemical de Dose Absorvida ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverChemicalDoseAbsorvida = "conver_chemical_dose_absorvida";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_chemical_dose_absorvida_titulo";
var classeCardInferior = "card_conver_chemical_dose_absorvida__inferior";
var classeCardSuperior = "card_conver_chemical_dose_absorvida__superior";
var classeCardLista = "card_conver_chemical_dose_absorvida_lista";
var classeCardItem = "card_conver_chemical_dose_absorvida_item";
var classeCardDescricao = "card_conver_chemical_dose_absorvida_descricao";
var classeCardContador = "card_conver_chemical_dose_absorvida_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverChemicalDoseAbsorvida = document.createElement("section");

sectionRaizConverChemicalDoseAbsorvida.classList.add(classeEIDSectionRaizConverChemicalDoseAbsorvida);

sectionRaizConverChemicalDoseAbsorvida.id = classeEIDSectionRaizConverChemicalDoseAbsorvida;

ui.appendChild(sectionRaizConverChemicalDoseAbsorvida);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverChemicalDoseAbsorvida = document.createElement("button");

botaoRetornoConverChemicalDoseAbsorvida.classList.add(classeEIDSectionBotao);

botaoRetornoConverChemicalDoseAbsorvida.id = classeEIDSectionBotao;

botaoRetornoConverChemicalDoseAbsorvida.textContent = "Voltar à página anterior";

sectionRaizConverChemicalDoseAbsorvida.appendChild(botaoRetornoConverChemicalDoseAbsorvida);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Chemical de Dose Absorvida" ;

sectionRaizConverChemicalDoseAbsorvida.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôgray",
  "Conversores de Zeptôgray",
  "Conversores de Attôgray",
  "Conversores de Fentôgray",
  "Conversores de Picôgray",
  "Conversores de Nanôgray",
  "Conversores de Micrôgray",
  "Conversores de Milígray",
  "Conversores de Centígray",
  "Conversores de Decígray",
  "Conversores de Gray",
  "Conversores de Decâgray",
  "Conversores de Hectôgray",
  "Conversores de Kilôgray",
  "Conversores de Megagray",
  "Conversores de Gigagray",
  "Conversores de Teragray",
  "Conversores de Petagray",
  "Conversores de Exagray",
  "Conversores de Zettagray"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yGy para outro tamanho",
  "Converte de zGy para outro tamanho",
  "Converte de aGy para outro tamanho",
  "Converte de fGy para outro tamanho",
  "Converte de pGy para outro tamanho",
  "Converte de nGy para outro tamanho",
  "Converte de μGy para outro tamanho",
  "Converte de mGy para outro tamanho",
  "Converte de cGy para outro tamanho",
  "Converte de dGy para outro tamanho",
  "Converte de Gy para outro tamanho",
  "Converte de daGy para outro tamanho",
  "Converte de hGy para outro tamanho",
  "Converte de kGy para outro tamanho",
  "Converte de MGy para outro tamanho",
  "Converte de GGy para outro tamanho",
  "Converte de TGy para outro tamanho",
  "Converte de PGy para outro tamanho",
  "Converte de EGy para outro tamanho",
  "Converte de ZGy para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresChemicalDoseAbsorvida = [];

var cardsSuperioresChemicalDoseAbsorvida = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresChemicalDoseAbsorvida.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresChemicalDoseAbsorvida.push(cardSuperior);

  /*** Lista de Conteúdo do Card ***/
  var cardLista = document.createElement("ol");

  cardLista.classList.add(classeCardLista);

  /*** Item da Lista de Conteúdo do Card ***/
  var cardListaItem = document.createElement("li");

  cardListaItem.classList.add(classeCardItem);

  cardListaItem.textContent = contentsFuncionalidades[i];

  /*** Descrição do Item da Lista de Conteúdo do Card ***/
  var cardListaItemDescricao = document.createElement("dl");

  cardListaItemDescricao.classList.add(classeCardDescricao);

  cardListaItemDescricao.textContent = contentsFuncionalidadesDescricao[i];

  /*** Descrição do Item da Lista de Conteúdo do Card ***/
  var cardListaItemContador = document.createElement("dd");

  cardListaItemContador.classList.add(classeCardContador);

  cardListaItemContador.textContent = contentsFuncionalidadesContador[i];

  /*** cardTerciario é elemento-filho de sectionRaizConverChemicalDoseAbsorvida ***/
  sectionRaizConverChemicalDoseAbsorvida.appendChild(cardInferior);

  /*** cardSuperior é elemento-filho de cardInferior ***/
  cardInferior.appendChild(cardSuperior);

  /*** cardLista é elemento-filho de cardSuperior ***/
  cardSuperior.appendChild(cardLista);

  /*** cardListaItem é elemento-filho de cardLista ***/
  cardLista.appendChild(cardListaItem);

  /*** cardListaItemDescricao é elemento-filho de cardLista ***/
  cardLista.appendChild(cardListaItemDescricao);

  /*** cardListaItemDescricao é elemento-filho de cardLista ***/
  cardLista.appendChild(cardListaItemContador);
}