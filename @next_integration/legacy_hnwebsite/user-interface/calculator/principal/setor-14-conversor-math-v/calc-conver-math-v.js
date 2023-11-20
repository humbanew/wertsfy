/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Math de Volume ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverMathV = "conver_math_v";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_v_titulo";
var classeCardInferior = "card_conver_math_v__inferior";
var classeCardSuperior = "card_conver_math_v__superior";
var classeCardLista = "card_conver_math_v_lista";
var classeCardItem = "card_conver_math_v_item";
var classeCardDescricao = "card_conver_math_v_descricao";
var classeCardContador = "card_conver_math_v_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMathV = document.createElement("section");

sectionRaizConverMathV.classList.add(classeEIDSectionRaizConverMathV);

sectionRaizConverMathV.id = classeEIDSectionRaizConverMathV;

ui.appendChild(sectionRaizConverMathV);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMathV = document.createElement("button");

botaoRetornoConverMathV.classList.add(classeEIDSectionBotao);

botaoRetornoConverMathV.id = classeEIDSectionBotao;

botaoRetornoConverMathV.textContent = "Voltar à página anterior";

sectionRaizConverMathV.appendChild(botaoRetornoConverMathV);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de Volume";

sectionRaizConverMathV.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Comprimento em Polegadas³",
  "Conversores de Comprimento em Pés³",
  "Conversores de Comprimento em Milhas³",
  "Conversores de Comprimento em Milhas Náuticas³",
  "Conversores de Comprimento em Angstrons³",
  "Conversores de Comprimento em Fermis³",
  "Conversores de Comprimento em Anos-luz³",
  "Conversores de Comprimento em Parsecs³",
  "Conversores de Comprimento em Braças³",
  "Conversores de Comprimento em Jardas³",
  "Conversores de Comprimento em Raios de Bohr³",
  "Conversores de Comprimento em Varas³",
  "Conversores de Comprimento em Mils³",
  "Conversores de Comprimento em Galão Americano",
  "Conversores de Comprimento em Galão Inglês",
  "Conversores de Yoctômetros³",
  "Conversores de Zeptômetros³",
  "Conversores de Attômetros³",
  "Conversores de Fentômetros³",
  "Conversores de Picômetros³",
  "Conversores de Nanômetros³",
  "Conversores de Micrômetros³",
  "Conversores de Milímetros³",
  "Conversores de Centímetros³",
  "Conversores de Decímetros³",
  "Conversores de Metros³",
  "Conversores de Decâmetros³",
  "Conversores de Hectômetros³",
  "Conversores de Kilômetros³",
  "Conversores de Megametros³",
  "Conversores de Gigametros³",
  "Conversores de Terametros³",
  "Conversores de Petametros³",
  "Conversores de Exametros³",
  "Conversores de Zettametros³");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de in³ para outro tamanho",
  "Converte de ft³ para outro tamanho",
  "Converte de mi³ para outro tamanho",
  "Converte de mi naut.³ para outro tamanho",
  "Converte de Angstrons³ para outro tamanho",
  "Converte de Fermis³ para outro tamanho",
  "Converte de Anos-luz³ para outro tamanho",
  "Converte de Parsecs³ para outro tamanho",
  "Converte de Braças³ para outro tamanho",
  "Converte de Jardas³ para outro tamanho",
  "Converte de Raios de Bohr³ para outro tamanho",
  "Converte de Varas³ para outro tamanho",
  "Converte de Mils³ para outro tamanho",
  "Converte de Galão Americano para outro tamanho",
  "Converte de Galão Inglês para outro tamanho",
  "Converte de ym³ para outro tamanho",
  "Converte de zm³ para outro tamanho",
  "Converte de am³ para outro tamanho",
  "Converte de fm³ para outro tamanho",
  "Converte de pm³ para outro tamanho",
  "Converte de nm³ para outro tamanho",
  "Converte de μm³ para outro tamanho",
  "Converte de mm³ para outro tamanho",
  "Converte de cm³ para outro tamanho",
  "Converte de dm³ para outro tamanho",
  "Converte de m³ para outro tamanho",
  "Converte de dam³ para outro tamanho",
  "Converte de hm³ para outro tamanho",
  "Converte de km³ para outro tamanho",
  "Converte de Mm³ para outro tamanho",
  "Converte de Gm³ para outro tamanho",
  "Converte de Tm³ para outro tamanho",
  "Converte de Pm³ para outro tamanho",
  "Converte de Em³ para outro tamanho",
  "Converte de Zm³ para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresMathV = [];

var cardsSuperioresMathV = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresMathV.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresMathV.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverMathV ***/
  sectionRaizConverMathV.appendChild(cardInferior);

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