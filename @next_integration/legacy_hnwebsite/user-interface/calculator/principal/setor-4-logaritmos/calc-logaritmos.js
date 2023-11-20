/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades Logarítmas ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizLog = "logaritmas";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "logaritmas_titulo";
var classeCardInferior = "card_logaritmas__inferior";
var classeCardSuperior = "card_logaritmas__superior";
var classeCardLista = "card_logaritmas_lista";
var classeCardItem = "card_logaritmas_item";
var classeCardDescricao = "card_logaritmas_descricao";
var classeCardContador = "card_logaritmas_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizLog = document.createElement("section");

sectionRaizLog.classList.add(classeEIDSectionRaizLog);

sectionRaizLog.id = classeEIDSectionRaizLog;

ui.appendChild(sectionRaizLog);

/** Botão de Retorno à página anterior **/

var botaoRetornoLogaritmos = document.createElement("button");

botaoRetornoLogaritmos.classList.add(classeEIDSectionBotao);

botaoRetornoLogaritmos.id = classeEIDSectionBotao;

botaoRetornoLogaritmos.textContent = "Voltar à página anterior";

sectionRaizLog.appendChild(botaoRetornoLogaritmos);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades Logarítmas";

sectionRaizLog.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
"Logarítmo Base 2",
"Logarítmo Base 10",
"Logarítmo Natural",
"Logarítmo Natural + 1");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Realiza logarítmos de base 2",
"Realiza logarítmos de base 10",
"Realiza logarítmos naturais",
"Realiza logarítmos naturais mais um");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizLog ***/
  sectionRaizLog.appendChild(cardInferior);

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
