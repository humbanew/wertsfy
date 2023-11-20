/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Math de Massa ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverMathM = "conver_math_m";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_m_titulo";
var classeCardInferior = "card_conver_math_m__inferior";
var classeCardSuperior = "card_conver_math_m__superior";
var classeCardLista = "card_conver_math_m_lista";
var classeCardItem = "card_conver_math_m_item";
var classeCardDescricao = "card_conver_math_m_descricao";
var classeCardContador = "card_conver_math_m_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMathM = document.createElement("section");

sectionRaizConverMathM.classList.add(classeEIDSectionRaizConverMathM);

sectionRaizConverMathM.id = classeEIDSectionRaizConverMathM;

ui.appendChild(sectionRaizConverMathM);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMathM = document.createElement("button");

botaoRetornoConverMathM.classList.add(classeEIDSectionBotao);

botaoRetornoConverMathM.id = classeEIDSectionBotao;

botaoRetornoConverMathM.textContent = "Voltar à página anterior";

sectionRaizConverMathM.appendChild(botaoRetornoConverMathM);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de Massa";

sectionRaizConverMathM.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Libras",
  "Conversores de Yoctôgramas",
  "Conversores de Zeptôgramas",
  "Conversores de Attôgramas",
  "Conversores de Fentôgramas",
  "Conversores de Picôgramas",
  "Conversores de Nanôgramas",
  "Conversores de Micrôgramas",
  "Conversores de Milígramas",
  "Conversores de Centígramas",
  "Conversores de Decígramas",
  "Conversores de Gramas",
  "Conversores de Decâgramas",
  "Conversores de Hectôgramas",
  "Conversores de Kilôgramas",
  "Conversores de Megagramas",
  "Conversores de Gigagramas",
  "Conversores de Teragramas",
  "Conversores de Petagramas",
  "Conversores de Exagramas",
  "Conversores de Zettagramas");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de lb para outro tamanho",
  "Converte de yg para outro tamanho",
  "Converte de zg para outro tamanho",
  "Converte de ag para outro tamanho",
  "Converte de fg para outro tamanho",
  "Converte de pg para outro tamanho",
  "Converte de ng para outro tamanho",
  "Converte de μg para outro tamanho",
  "Converte de mg para outro tamanho",
  "Converte de cg para outro tamanho",
  "Converte de dg para outro tamanho",
  "Converte de g para outro tamanho",
  "Converte de dag para outro tamanho",
  "Converte de hg para outro tamanho",
  "Converte de kg para outro tamanho",
  "Converte de Mg para outro tamanho",
  "Converte de Gg para outro tamanho",
  "Converte de Tg para outro tamanho",
  "Converte de Pg para outro tamanho",
  "Converte de Eg para outro tamanho",
  "Converte de Zg para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresMathM = [];

var cardsSuperioresMathM = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresMathM.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresMathM.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverMathM ***/
  sectionRaizConverMathM.appendChild(cardInferior);

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