/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Math de Comprimento ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverMathC = "conver_math_c";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_c_titulo";
var classeCardInferior = "card_conver_math_c__inferior";
var classeCardSuperior = "card_conver_math_c__superior";
var classeCardLista = "card_conver_math_c_lista";
var classeCardItem = "card_conver_math_c_item";
var classeCardDescricao = "card_conver_math_c_descricao";
var classeCardContador = "card_conver_math_c_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMathC = document.createElement("section");

sectionRaizConverMathC.classList.add(classeEIDSectionRaizConverMathC);

sectionRaizConverMathC.id = classeEIDSectionRaizConverMathC;

ui.appendChild(sectionRaizConverMathC);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMathC = document.createElement("button");

botaoRetornoConverMathC.classList.add(classeEIDSectionBotao);

botaoRetornoConverMathC.id = classeEIDSectionBotao;

botaoRetornoConverMathC.textContent = "Voltar à página anterior";

sectionRaizConverMathC.appendChild(botaoRetornoConverMathC);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de Comprimento";

sectionRaizConverMathC.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Comprimento em Polegadas",
  "Conversores de Comprimento em Pés",
  "Conversores de Comprimento em Milhas",
  "Conversores de Comprimento em Milhas Náuticas",
  "Conversores de Comprimento em Angstrons",
  "Conversores de Comprimento em Fermis",
  "Conversores de Comprimento em Anos-luz",
  "Conversores de Comprimento em Parsecs",
  "Conversores de Comprimento em Braças",
  "Conversores de Comprimento em Jardas",
  "Conversores de Comprimento em Raios de Bohr",
  "Conversores de Comprimento em Varas",
  "Conversores de Comprimento em Mils",
  "Conversores de Yoctômetros",
  "Conversores de Zeptômetros",
  "Conversores de Attômetros",
  "Conversores de Fentômetros",
  "Conversores de Picômetros",
  "Conversores de Nanômetros",
  "Conversores de Micrômetros",
  "Conversores de Milímetros",
  "Conversores de Centímetros",
  "Conversores de Decímetros",
  "Conversores de Metros",
  "Conversores de Decâmetros",
  "Conversores de Hectômetros",
  "Conversores de Kilômetros",
  "Conversores de Megametros",
  "Conversores de Gigametros",
  "Conversores de Terametros",
  "Conversores de Petametros",
  "Conversores de Exametros",
  "Conversores de Zettametros");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de in para outro tamanho",
  "Converte de ft para outro tamanho",
  "Converte de mi para outro tamanho",
  "Converte de mi naut. para outro tamanho",
  "Converte de Angstrons para outro tamanho",
  "Converte de Fermis para outro tamanho",
  "Converte de Anos-luz para outro tamanho",
  "Converte de Parsecs para outro tamanho",
  "Converte de Braças para outro tamanho",
  "Converte de Jardas para outro tamanho",
  "Converte de Raios de Bohr para outro tamanho",
  "Converte de Varas para outro tamanho",
  "Converte de Mils para outro tamanho",
  "Converte de ym para outro tamanho",
  "Converte de zm para outro tamanho",
  "Converte de am para outro tamanho",
  "Converte de fm para outro tamanho",
  "Converte de pm para outro tamanho",
  "Converte de nm para outro tamanho",
  "Converte de μm para outro tamanho",
  "Converte de mm para outro tamanho",
  "Converte de cm para outro tamanho",
  "Converte de dm para outro tamanho",
  "Converte de m para outro tamanho",
  "Converte de dam para outro tamanho",
  "Converte de hm para outro tamanho",
  "Converte de km para outro tamanho",
  "Converte de Mm para outro tamanho",
  "Converte de Gm para outro tamanho",
  "Converte de Tm para outro tamanho",
  "Converte de Pm para outro tamanho",
  "Converte de Em para outro tamanho",
  "Converte de Zm para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresMathC = [];

var cardsSuperioresMathC = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresMathC.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresMathC.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverMathC ***/
  sectionRaizConverMathC.appendChild(cardInferior);

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