/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades Trigonométricas ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizTrig = "trigonometricas";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "trigonometricas_titulo";
var classeCardInferior = "card_trigonometricas__inferior";
var classeCardSuperior = "card_trigonometricas__superior";
var classeCardLista = "card_trigonometricas_lista";
var classeCardItem = "card_trigonometricas_item";
var classeCardDescricao = "card_trigonometricas_descricao";
var classeCardContador = "card_trigonometricas_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizTrig = document.createElement("section");

sectionRaizTrig.classList.add(classeEIDSectionRaizTrig);

sectionRaizTrig.id = classeEIDSectionRaizTrig;

ui.appendChild(sectionRaizTrig);

/** Botão de Retorno à página anterior **/

var botaoRetornoTrigonometricos = document.createElement("button");

botaoRetornoTrigonometricos.classList.add(classeEIDSectionBotao);

botaoRetornoTrigonometricos.id = classeEIDSectionBotao;

botaoRetornoTrigonometricos.textContent = "Voltar à página anterior";

sectionRaizTrig.appendChild(botaoRetornoTrigonometricos);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades Trigonométricas";

sectionRaizTrig.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
"Seno",
"Cosseno",
"Tangente",
"Secante",
"Cossecante",
"Cotangente",
"Seno Hiperbólico",
"Cosseno Hiperbólico",
"Tangente Hiperbólica",
"Secante Hiperbólica",
"Cossecante Hiperbólica",
"Cotangente Hiperbólica");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Realiza senos",
"Realiza cossenos",
"Realiza tangentes",
"Realiza secantes",
"Realiza cossecantes",
"Realiza tangentes",
"Realiza senos hiperbólicos",
"Realiza cossenos hiperbólicos",
"Realiza tangentes hiperbólicas",
"Realiza secantes hiperbólicas",
"Realiza cossecantes hiperbólicas",
"Realiza tangentes hiperbólicas");

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

  /*** cardTerciario é elemento-filho de sectionRaizTrig ***/
  sectionRaizTrig.appendChild(cardInferior);

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
