/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Chemical de Atividade Catalítica ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverChemicalAtividadeCatalitica = "conver_chemical_atividade_catalitica";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_chemical_atividade_catalitica_titulo";
var classeCardInferior = "card_conver_chemical_atividade_catalitica__inferior";
var classeCardSuperior = "card_conver_chemical_atividade_catalitica__superior";
var classeCardLista = "card_conver_chemical_atividade_catalitica_lista";
var classeCardItem = "card_conver_chemical_atividade_catalitica_item";
var classeCardDescricao = "card_conver_chemical_atividade_catalitica_descricao";
var classeCardContador = "card_conver_chemical_atividade_catalitica_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverChemicalAtividadeCatalitica = document.createElement("section");

sectionRaizConverChemicalAtividadeCatalitica.classList.add(classeEIDSectionRaizConverChemicalAtividadeCatalitica);

sectionRaizConverChemicalAtividadeCatalitica.id = classeEIDSectionRaizConverChemicalAtividadeCatalitica;

ui.appendChild(sectionRaizConverChemicalAtividadeCatalitica);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverChemicalAtivCatalitica = document.createElement("button");

botaoRetornoConverChemicalAtivCatalitica.classList.add(classeEIDSectionBotao);

botaoRetornoConverChemicalAtivCatalitica.id = classeEIDSectionBotao;

botaoRetornoConverChemicalAtivCatalitica.textContent = "Voltar à página anterior";

sectionRaizConverChemicalAtividadeCatalitica.appendChild(botaoRetornoConverChemicalAtivCatalitica);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Chemical de Atividade Catalítica" ;

sectionRaizConverChemicalAtividadeCatalitica.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôkatal",
  "Conversores de Zeptôkatal",
  "Conversores de Attôkatal",
  "Conversores de Fentôkatal",
  "Conversores de Picôkatal",
  "Conversores de Nanôkatal",
  "Conversores de Micrôkatal",
  "Conversores de Milíkatal",
  "Conversores de Centíkatal",
  "Conversores de Decíkatal",
  "Conversores de Katal",
  "Conversores de Decâkatal",
  "Conversores de Hectôkatal",
  "Conversores de Kilôkatal",
  "Conversores de Megakatal",
  "Conversores de Gigakatal",
  "Conversores de Terakatal",
  "Conversores de Petakatal",
  "Conversores de Exakatal",
  "Conversores de Zettakatal"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de ykat para outro tamanho",
  "Converte de zkat para outro tamanho",
  "Converte de akat para outro tamanho",
  "Converte de fkat para outro tamanho",
  "Converte de pkat para outro tamanho",
  "Converte de nkat para outro tamanho",
  "Converte de μkat para outro tamanho",
  "Converte de mkat para outro tamanho",
  "Converte de ckat para outro tamanho",
  "Converte de dkat para outro tamanho",
  "Converte de kat para outro tamanho",
  "Converte de dakat para outro tamanho",
  "Converte de hkat para outro tamanho",
  "Converte de kkat para outro tamanho",
  "Converte de Mkat para outro tamanho",
  "Converte de Gkat para outro tamanho",
  "Converte de Tkat para outro tamanho",
  "Converte de Pkat para outro tamanho",
  "Converte de Ekat para outro tamanho",
  "Converte de Zkat para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresChemicalAtividadeCatalitica = [];

var cardsSuperioresChemicalAtividadeCatalitica = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresChemicalAtividadeCatalitica.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresChemicalAtividadeCatalitica.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverChemicalAtividadeCatalitica ***/
  sectionRaizConverChemicalAtividadeCatalitica.appendChild(cardInferior);

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