/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Tech ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverTech = "conver_tech";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_tech_titulo";
var classeCardInferior = "card_conver_tech__inferior";
var classeCardSuperior = "card_conver_tech__superior";
var classeCardLista = "card_conver_tech_lista";
var classeCardItem = "card_conver_tech_item";
var classeCardDescricao = "card_conver_tech_descricao";
var classeCardContador = "card_conver_tech_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverTech = document.createElement("section");

sectionRaizConverTech.classList.add(classeEIDSectionRaizConverTech);

sectionRaizConverTech.id = classeEIDSectionRaizConverTech;

ui.appendChild(sectionRaizConverTech);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverTech = document.createElement("button");

botaoRetornoConverTech.classList.add(classeEIDSectionBotao);

botaoRetornoConverTech.id = classeEIDSectionBotao;

botaoRetornoConverTech.textContent = "Voltar à página anterior";

sectionRaizConverTech.appendChild(botaoRetornoConverTech);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Tech";

sectionRaizConverTech.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
"Conversores de Bits",
"Conversores de Bytes",
"Conversores de Kilobytes",
"Conversores de Megabytes",
"Conversores de Gigabytes",
"Conversores de Terabytes",
"Conversores de Petabytes",
"Conversores de Exabytes",
"Conversores de Yottabytes",
"Conversores de Zettabytes",
"Conversores de Brontobytes",
"Conversores de Geopbytes",
"Conversores de Saganbytes");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Converte Bits para outro tamanho",
"Converte B para outro tamanho",
"Converte KB para outro tamanho",
"Converte MB para outro tamanho",
"Converte GB para outro tamanho",
"Converte TB para outro tamanho",
"Converte PB para outro tamanho",
"Converte EB para outro tamanho",
"Converte YB para outro tamanho",
"Converte ZB para outro tamanho",
"Converte BrB para outro tamanho",
"Converte GeB para outro tamanho",
"Converte SB para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresTech = [];

var cardsSuperioresTech = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresTech.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresTech.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverTech ***/
  sectionRaizConverTech.appendChild(cardInferior);

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