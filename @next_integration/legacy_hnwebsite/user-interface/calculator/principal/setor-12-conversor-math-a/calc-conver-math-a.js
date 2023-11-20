/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Math de Área ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverMathA = "conver_math_a";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_a_titulo";
var classeCardInferior = "card_conver_math_a__inferior";
var classeCardSuperior = "card_conver_math_a__superior";
var classeCardLista = "card_conver_math_a_lista";
var classeCardItem = "card_conver_math_a_item";
var classeCardDescricao = "card_conver_math_a_descricao";
var classeCardContador = "card_conver_math_a_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMathA = document.createElement("section");

sectionRaizConverMathA.classList.add(classeEIDSectionRaizConverMathA);

sectionRaizConverMathA.id = classeEIDSectionRaizConverMathA;

ui.appendChild(sectionRaizConverMathA);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMathA = document.createElement("button");

botaoRetornoConverMathA.classList.add(classeEIDSectionBotao);

botaoRetornoConverMathA.id = classeEIDSectionBotao;

botaoRetornoConverMathA.textContent = "Voltar à página anterior";

sectionRaizConverMathA.appendChild(botaoRetornoConverMathA);

/* % Config Botão % */

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de Área";

sectionRaizConverMathA.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Comprimento em Polegadas²",
  "Conversores de Comprimento em Pés²",
  "Conversores de Comprimento em Milhas²",
  "Conversores de Comprimento em Milhas Náuticas²",
  "Conversores de Comprimento em Angstrons²",
  "Conversores de Comprimento em Fermis²",
  "Conversores de Comprimento em Anos-luz²",
  "Conversores de Comprimento em Parsecs²",
  "Conversores de Comprimento em Braças²",
  "Conversores de Comprimento em Jardas²",
  "Conversores de Comprimento em Raios de Bohr²",
  "Conversores de Comprimento em Varas²",
  "Conversores de Comprimento em Mils²",
  "Conversores de Comprimento em Acres",
  "Conversores de Comprimento em Bans",
  "Conversores de Comprimento em Hectares",
  "Conversores de Comprimento em Ares",
  "Conversores de Comprimento em Alqueires",
  "Conversores de Yoctômetros²",
  "Conversores de Zeptômetros²",
  "Conversores de Attômetros²",
  "Conversores de Fentômetros²",
  "Conversores de Picômetros²",
  "Conversores de Nanômetros²",
  "Conversores de Micrômetros²",
  "Conversores de Milímetros²",
  "Conversores de Centímetros²",
  "Conversores de Decímetros²",
  "Conversores de Metros²",
  "Conversores de Decâmetros²",
  "Conversores de Hectômetros²",
  "Conversores de Kilômetros²",
  "Conversores de Megametros²",
  "Conversores de Gigametros²",
  "Conversores de Terametros²",
  "Conversores de Petametros²",
  "Conversores de Exametros²",
  "Conversores de Zettametros²");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de in² para outro tamanho",
  "Converte de ft² para outro tamanho",
  "Converte de mi² para outro tamanho",
  "Converte de mi naut.² para outro tamanho",
  "Converte de Angstrons² para outro tamanho",
  "Converte de Fermis² para outro tamanho",
  "Converte de Anos-luz² para outro tamanho",
  "Converte de Parsecs² para outro tamanho",
  "Converte de Braças² para outro tamanho",
  "Converte de Jardas² para outro tamanho",
  "Converte de Raios de Bohr² para outro tamanho",
  "Converte de Varas² para outro tamanho",
  "Converte de Mils² para outro tamanho",
  "Converte de Acres para outro tamanho",
  "Converte de Bans para outro tamanho",
  "Converte de Hectares para outro tamanho",
  "Converte de Ares para outro tamanho",
  "Converte de Alqueires para outro tamanho",
  "Converte de ym² para outro tamanho",
  "Converte de zm² para outro tamanho",
  "Converte de am² para outro tamanho",
  "Converte de fm² para outro tamanho",
  "Converte de pm² para outro tamanho",
  "Converte de nm² para outro tamanho",
  "Converte de μm² para outro tamanho",
  "Converte de mm² para outro tamanho",
  "Converte de cm² para outro tamanho",
  "Converte de dm² para outro tamanho",
  "Converte de m² para outro tamanho",
  "Converte de dam² para outro tamanho",
  "Converte de hm² para outro tamanho",
  "Converte de km² para outro tamanho",
  "Converte de Mm² para outro tamanho",
  "Converte de Gm² para outro tamanho",
  "Converte de Tm² para outro tamanho",
  "Converte de Pm² para outro tamanho",
  "Converte de Em² para outro tamanho",
  "Converte de Zm² para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresMathA = [];

var cardsSuperioresMathA = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresMathA.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresMathA.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverMathA ***/
  sectionRaizConverMathA.appendChild(cardInferior);

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