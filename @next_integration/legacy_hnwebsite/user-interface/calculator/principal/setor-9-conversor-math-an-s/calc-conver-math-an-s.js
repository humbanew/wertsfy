/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Math de Ângulos Sólidos ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverMathAnS = "conver_math_an_s";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_an_s_titulo";
var classeCardInferior = "card_conver_math_an_s__inferior";
var classeCardSuperior = "card_conver_math_an_s__superior";
var classeCardLista = "card_conver_math_an_s_lista";
var classeCardItem = "card_conver_math_an_s_item";
var classeCardDescricao = "card_conver_math_an_s_descricao";
var classeCardContador = "card_conver_math_an_s_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMathAnS = document.createElement("section");

sectionRaizConverMathAnS.classList.add(classeEIDSectionRaizConverMathAnS);

sectionRaizConverMathAnS.id = classeEIDSectionRaizConverMathAnS;

ui.appendChild(sectionRaizConverMathAnS);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMathAnS = document.createElement("button");

botaoRetornoConverMathAnS.classList.add(classeEIDSectionBotao);

botaoRetornoConverMathAnS.id = classeEIDSectionBotao;

botaoRetornoConverMathAnS.textContent = "Voltar à página anterior";

sectionRaizConverMathAnS.appendChild(botaoRetornoConverMathAnS);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de Ângulos Sólidos";

sectionRaizConverMathAnS.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôesterradianos",
  "Conversores de Zeptôesterradianos",
  "Conversores de Attôesterradianos",
  "Conversores de Fentôesterradianos",
  "Conversores de Picôesterradianos",
  "Conversores de Nanôesterradianos",
  "Conversores de Micrôesterradianos",
  "Conversores de Milíesterradianos",
  "Conversores de Centíesterradianos",
  "Conversores de Decíesterradianos",
  "Conversores de Esterradianos",
  "Conversores de Decâesterradianos",
  "Conversores de Hectôesterradianos",
  "Conversores de Kilôesterradianos",
  "Conversores de Megaesterradianos",
  "Conversores de Gigaesterradianos",
  "Conversores de Teraesterradianos",
  "Conversores de Petaesterradianos",
  "Conversores de Exaesterradianos",
  "Conversores de Zettaesterradianos");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de ysr para outro tamanho",
  "Converte de zsr para outro tamanho",
  "Converte de asr para outro tamanho",
  "Converte de fsr para outro tamanho",
  "Converte de psr para outro tamanho",
  "Converte de nsr para outro tamanho",
  "Converte de μsr para outro tamanho",
  "Converte de msr para outro tamanho",
  "Converte de csr para outro tamanho",
  "Converte de dsr para outro tamanho",
  "Converte de sr para outro tamanho",
  "Converte de dasr para outro tamanho",
  "Converte de hsr para outro tamanho",
  "Converte de ksr para outro tamanho",
  "Converte de Msr para outro tamanho",
  "Converte de Gsr para outro tamanho",
  "Converte de Tsr para outro tamanho",
  "Converte de Psr para outro tamanho",
  "Converte de Esr para outro tamanho",
  "Converte de Zsr para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresMathAnS = [];

var cardsSuperioresMathAnS = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresMathAnS.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresMathAnS.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverMathAnS ***/
  sectionRaizConverMathAnS.appendChild(cardInferior);

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