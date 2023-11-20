/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Math de Ângulos Planos ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverMathAnP = "conver_math_an_p";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_an_p_titulo";
var classeCardInferior = "card_conver_math_an_p__inferior";
var classeCardSuperior = "card_conver_math_an_p__superior";
var classeCardLista = "card_conver_math_an_p_lista";
var classeCardItem = "card_conver_math_an_p_item";
var classeCardDescricao = "card_conver_math_an_p_descricao";
var classeCardContador = "card_conver_math_an_p_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMathAnP = document.createElement("section");

sectionRaizConverMathAnP.classList.add(classeEIDSectionRaizConverMathAnP);

sectionRaizConverMathAnP.id = classeEIDSectionRaizConverMathAnP;

ui.appendChild(sectionRaizConverMathAnP);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMathAnP = document.createElement("button");

botaoRetornoConverMathAnP.classList.add(classeEIDSectionBotao);

botaoRetornoConverMathAnP.id = classeEIDSectionBotao;

botaoRetornoConverMathAnP.textContent = "Voltar à página anterior";

sectionRaizConverMathAnP.appendChild(botaoRetornoConverMathAnP);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de Ângulos Planos";

sectionRaizConverMathAnP.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôradianos",
  "Conversores de Zeptôradianos",
  "Conversores de Attôradianos",
  "Conversores de Fentôradianos",
  "Conversores de Picôradianos",
  "Conversores de Nanôradianos",
  "Conversores de Micrôradianos",
  "Conversores de Milíradianos",
  "Conversores de Centíradianos",
  "Conversores de Decíradianos",
  "Conversores de Radianos",
  "Conversores de Decâradianos",
  "Conversores de Hectôradianos",
  "Conversores de Kilôradianos",
  "Conversores de Megaradianos",
  "Conversores de Gigaradianos",
  "Conversores de Teraradianos",
  "Conversores de Petaradianos",
  "Conversores de Exaradianos",
  "Conversores de Zettaradianos");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yrad para outro tamanho",
  "Converte de zrad para outro tamanho",
  "Converte de arad para outro tamanho",
  "Converte de frad para outro tamanho",
  "Converte de prad para outro tamanho",
  "Converte de nrad para outro tamanho",
  "Converte de μrad para outro tamanho",
  "Converte de mrad para outro tamanho",
  "Converte de crad para outro tamanho",
  "Converte de drad para outro tamanho",
  "Converte de rad para outro tamanho",
  "Converte de darad para outro tamanho",
  "Converte de hrad para outro tamanho",
  "Converte de krad para outro tamanho",
  "Converte de Mrad para outro tamanho",
  "Converte de Grad para outro tamanho",
  "Converte de Trad para outro tamanho",
  "Converte de Prad para outro tamanho",
  "Converte de Erad para outro tamanho",
  "Converte de Zrad para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresMathAnP = [];

var cardsSuperioresMathAnP = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresMathAnP.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresMathAnP.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverMathAnP ***/
  sectionRaizConverMathAnP.appendChild(cardInferior);

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