/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Frequência ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsFrequencia = "conver_physics_frequencia";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_frequencia_titulo";
var classeCardInferior = "card_conver_physics_frequencia__inferior";
var classeCardSuperior = "card_conver_physics_frequencia__superior";
var classeCardLista = "card_conver_physics_frequencia_lista";
var classeCardItem = "card_conver_physics_frequencia_item";
var classeCardDescricao = "card_conver_physics_frequencia_descricao";
var classeCardContador = "card_conver_physics_frequencia_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsFrequencia = document.createElement("section");

sectionRaizConverPhysicsFrequencia.classList.add(classeEIDSectionRaizConverPhysicsFrequencia);

sectionRaizConverPhysicsFrequencia.id = classeEIDSectionRaizConverPhysicsFrequencia;

ui.appendChild(sectionRaizConverPhysicsFrequencia);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsFreq = document.createElement("button");

botaoRetornoConverPhysicsFreq.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsFreq.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsFreq.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsFrequencia.appendChild(botaoRetornoConverPhysicsFreq);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Frequência";

sectionRaizConverPhysicsFrequencia.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôhertz",
  "Conversores de Zeptôhertz",
  "Conversores de Attôhertz",
  "Conversores de Fentôhertz",
  "Conversores de Picôhertz",
  "Conversores de Nanôhertz",
  "Conversores de Micrôhertz",
  "Conversores de Milíhertz",
  "Conversores de Centíhertz",
  "Conversores de Decíhertz",
  "Conversores de Hertz",
  "Conversores de Decâhertz",
  "Conversores de Hectôhertz",
  "Conversores de Kilôhertz",
  "Conversores de Megahertz",
  "Conversores de Gigahertz",
  "Conversores de Terahertz",
  "Conversores de Petahertz",
  "Conversores de Exahertz",
  "Conversores de Zettahertz"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yHz para outro tamanho",
  "Converte de zHz para outro tamanho",
  "Converte de aHz para outro tamanho",
  "Converte de fHz para outro tamanho",
  "Converte de pHz para outro tamanho",
  "Converte de nHz para outro tamanho",
  "Converte de μHz para outro tamanho",
  "Converte de mHz para outro tamanho",
  "Converte de cHz para outro tamanho",
  "Converte de dHz para outro tamanho",
  "Converte de Hz para outro tamanho",
  "Converte de daHz para outro tamanho",
  "Converte de hHz para outro tamanho",
  "Converte de kHz para outro tamanho",
  "Converte de MHz para outro tamanho",
  "Converte de GHz para outro tamanho",
  "Converte de THz para outro tamanho",
  "Converte de PHz para outro tamanho",
  "Converte de EHz para outro tamanho",
  "Converte de ZHz para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsFrequencia = [];

var cardsSuperioresPhysicsFrequencia = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsFrequencia.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsFrequencia.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsFrequencia ***/
  sectionRaizConverPhysicsFrequencia.appendChild(cardInferior);

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