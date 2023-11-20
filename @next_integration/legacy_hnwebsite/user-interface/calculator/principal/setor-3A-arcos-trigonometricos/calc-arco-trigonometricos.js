/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades Arcos Trigonométricos ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizArcosTrig = "arcos_trigonometricos";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "arcos_trigonometricos_titulo";
var classeCardInferior = "card_arcos_trigonometricos__inferior";
var classeCardSuperior = "card_arcos_trigonometricos__superior";
var classeCardLista = "card_arcos_trigonometricos_lista";
var classeCardItem = "card_arcos_trigonometricos_item";
var classeCardDescricao = "card_arcos_trigonometricos_descricao";
var classeCardContador = "card_arcos_trigonometricos_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizArcosTrig = document.createElement("section");

sectionRaizArcosTrig.classList.add(classeEIDSectionRaizArcosTrig);

sectionRaizArcosTrig.id = classeEIDSectionRaizArcosTrig;

ui.appendChild(sectionRaizArcosTrig);

/** Botão de Retorno à página anterior **/

var botaoRetornoArcosTrigonometricos = document.createElement("button");

botaoRetornoArcosTrigonometricos.classList.add(classeEIDSectionBotao);

botaoRetornoArcosTrigonometricos.id = classeEIDSectionBotao;

botaoRetornoArcosTrigonometricos.textContent = "Voltar à página anterior";

sectionRaizArcosTrig.appendChild(botaoRetornoArcosTrigonometricos);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades Arcos Trigonométricos";

sectionRaizArcosTrig.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
"Arco Seno",
"Arco Cosseno",
"Arco Tangente",
"Arco Secante",
"Arco Cossecante",
"Arco Cotangente",
"Arco Seno Hiperbólico",
"Arco Cosseno Hiperbólico",
"Arco Tangente Hiperbólica",
"Arco Secante Hiperbólica",
"Arco Cossecante Hiperbólica",
"Arco Cotangente Hiperbólica");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Realiza arcos senos",
"Realiza arcos cossenos",
"Realiza arcos tangentes",
"Realiza arcos secantes",
"Realiza arcos cossecantes",
"Realiza arcos tangentes",
"Realiza arcos senos hiperbólicos",
"Realiza arcos cossenos hiperbólicos",
"Realiza arcos tangentes hiperbólicas",
"Realiza arcos secantes hiperbólicas",
"Realiza arcos cossecantes hiperbólicas",
"Realiza arcos tangentes hiperbólicas");

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

  /*** cardTerciario é elemento-filho de sectionRaizArcosTrig ***/
  sectionRaizArcosTrig.appendChild(cardInferior);

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
