/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Chemical de Atividade de um Radionuclídio ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverChemicalAtivRadionuc = "conver_chemical_ativ_radionuc";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_chemical_ativ_radionuc_titulo";
var classeCardInferior = "card_conver_chemical_ativ_radionuc__inferior";
var classeCardSuperior = "card_conver_chemical_ativ_radionuc__superior";
var classeCardLista = "card_conver_chemical_ativ_radionuc_lista";
var classeCardItem = "card_conver_chemical_ativ_radionuc_item";
var classeCardDescricao = "card_conver_chemical_ativ_radionuc_descricao";
var classeCardContador = "card_conver_chemical_ativ_radionuc_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverChemicalAtivRadionuc = document.createElement("section");

sectionRaizConverChemicalAtivRadionuc.classList.add(classeEIDSectionRaizConverChemicalAtivRadionuc);

sectionRaizConverChemicalAtivRadionuc.id = classeEIDSectionRaizConverChemicalAtivRadionuc;

ui.appendChild(sectionRaizConverChemicalAtivRadionuc);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverChemicalAtivRadionuc = document.createElement("button");

botaoRetornoConverChemicalAtivRadionuc.classList.add(classeEIDSectionBotao);

botaoRetornoConverChemicalAtivRadionuc.id = classeEIDSectionBotao;

botaoRetornoConverChemicalAtivRadionuc.textContent = "Voltar à página anterior";

sectionRaizConverChemicalAtivRadionuc.appendChild(botaoRetornoConverChemicalAtivRadionuc);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Chemical de Atividade de um Radionuclídio" ;

sectionRaizConverChemicalAtivRadionuc.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôbecquerel",
  "Conversores de Zeptôbecquerel",
  "Conversores de Attôbecquerel",
  "Conversores de Fentôbecquerel",
  "Conversores de Picôbecquerel",
  "Conversores de Nanôbecquerel",
  "Conversores de Micrôbecquerel",
  "Conversores de Milíbecquerel",
  "Conversores de Centíbecquerel",
  "Conversores de Decíbecquerel",
  "Conversores de Becquerel",
  "Conversores de Decâbecquerel",
  "Conversores de Hectôbecquerel",
  "Conversores de Kilôbecquerel",
  "Conversores de Megabecquerel",
  "Conversores de Gigabecquerel",
  "Conversores de Terabecquerel",
  "Conversores de Petabecquerel",
  "Conversores de Exabecquerel",
  "Conversores de Zettabecquerel"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yBq para outro tamanho",
  "Converte de zBq para outro tamanho",
  "Converte de aBq para outro tamanho",
  "Converte de fBq para outro tamanho",
  "Converte de pBq para outro tamanho",
  "Converte de nBq para outro tamanho",
  "Converte de μBq para outro tamanho",
  "Converte de mBq para outro tamanho",
  "Converte de cBq para outro tamanho",
  "Converte de dBq para outro tamanho",
  "Converte de Bq para outro tamanho",
  "Converte de daBq para outro tamanho",
  "Converte de hBq para outro tamanho",
  "Converte de kBq para outro tamanho",
  "Converte de MBq para outro tamanho",
  "Converte de GBq para outro tamanho",
  "Converte de TBq para outro tamanho",
  "Converte de PBq para outro tamanho",
  "Converte de EBq para outro tamanho",
  "Converte de ZBq para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresChemicalAtivRadionuc = [];

var cardsSuperioresChemicalAtivRadionuc = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresChemicalAtivRadionuc.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresChemicalAtivRadionuc.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverChemicalAtivRadionuc ***/
  sectionRaizConverChemicalAtivRadionuc.appendChild(cardInferior);

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