/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Chemical de Dose Equivalente ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverChemicalDoseEquivalente = "conver_chemical_dose_equivalente";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_chemical_dose_equivalente_titulo";
var classeCardInferior = "card_conver_chemical_dose_equivalente__inferior";
var classeCardSuperior = "card_conver_chemical_dose_equivalente__superior";
var classeCardLista = "card_conver_chemical_dose_equivalente_lista";
var classeCardItem = "card_conver_chemical_dose_equivalente_item";
var classeCardDescricao = "card_conver_chemical_dose_equivalente_descricao";
var classeCardContador = "card_conver_chemical_dose_equivalente_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverChemicalDoseEquivalente = document.createElement("section");

sectionRaizConverChemicalDoseEquivalente.classList.add(classeEIDSectionRaizConverChemicalDoseEquivalente);

sectionRaizConverChemicalDoseEquivalente.id = classeEIDSectionRaizConverChemicalDoseEquivalente;

ui.appendChild(sectionRaizConverChemicalDoseEquivalente);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverChemicalDoseEquivalente = document.createElement("button");

botaoRetornoConverChemicalDoseEquivalente.classList.add(classeEIDSectionBotao);

botaoRetornoConverChemicalDoseEquivalente.id = classeEIDSectionBotao;

botaoRetornoConverChemicalDoseEquivalente.textContent = "Voltar à página anterior";

sectionRaizConverChemicalDoseEquivalente.appendChild(botaoRetornoConverChemicalDoseEquivalente);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Chemical de Dose Equivalente" ;

sectionRaizConverChemicalDoseEquivalente.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôsievert",
  "Conversores de Zeptôsievert",
  "Conversores de Attôsievert",
  "Conversores de Fentôsievert",
  "Conversores de Picôsievert",
  "Conversores de Nanôsievert",
  "Conversores de Micrôsievert",
  "Conversores de Milísievert",
  "Conversores de Centísievert",
  "Conversores de Decísievert",
  "Conversores de Sievert",
  "Conversores de Decâsievert",
  "Conversores de Hectôsievert",
  "Conversores de Kilôsievert",
  "Conversores de Megasievert",
  "Conversores de Gigasievert",
  "Conversores de Terasievert",
  "Conversores de Petasievert",
  "Conversores de Exasievert",
  "Conversores de Zettasievert"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de ySv para outro tamanho",
  "Converte de zSv para outro tamanho",
  "Converte de aSv para outro tamanho",
  "Converte de fSv para outro tamanho",
  "Converte de pSv para outro tamanho",
  "Converte de nSv para outro tamanho",
  "Converte de μSv para outro tamanho",
  "Converte de mSv para outro tamanho",
  "Converte de cSv para outro tamanho",
  "Converte de dSv para outro tamanho",
  "Converte de Sv para outro tamanho",
  "Converte de daSv para outro tamanho",
  "Converte de hSv para outro tamanho",
  "Converte de kSv para outro tamanho",
  "Converte de MSv para outro tamanho",
  "Converte de GSv para outro tamanho",
  "Converte de TSv para outro tamanho",
  "Converte de PSv para outro tamanho",
  "Converte de ESv para outro tamanho",
  "Converte de ZSv para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresChemicalDoseEquivalente = [];

var cardsSuperioresChemicalDoseEquivalente = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresChemicalDoseEquivalente.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresChemicalDoseEquivalente.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverChemicalDoseEquivalente ***/
  sectionRaizConverChemicalDoseEquivalente.appendChild(cardInferior);

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