/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics da Diferença de Potencial Elétrico ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsDifPotEletrico = "conver_physics_dif_pot_eletrico";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_dif_pot_eletrico_titulo";
var classeCardInferior = "card_conver_physics_dif_pot_eletrico__inferior";
var classeCardSuperior = "card_conver_physics_dif_pot_eletrico__superior";
var classeCardLista = "card_conver_physics_dif_pot_eletrico_lista";
var classeCardItem = "card_conver_physics_dif_pot_eletrico_item";
var classeCardDescricao = "card_conver_physics_dif_pot_eletrico_descricao";
var classeCardContador = "card_conver_physics_dif_pot_eletrico_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsDifPotEletrico = document.createElement("section");

sectionRaizConverPhysicsDifPotEletrico.classList.add(classeEIDSectionRaizConverPhysicsDifPotEletrico);

sectionRaizConverPhysicsDifPotEletrico.id = classeEIDSectionRaizConverPhysicsDifPotEletrico;

ui.appendChild(sectionRaizConverPhysicsDifPotEletrico);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsDifPotEletrico = document.createElement("button");

botaoRetornoConverPhysicsDifPotEletrico.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsDifPotEletrico.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsDifPotEletrico.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsDifPotEletrico.appendChild(botaoRetornoConverPhysicsDifPotEletrico);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics da Diferença de Potencial Elétrico";

sectionRaizConverPhysicsDifPotEletrico.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôvolts",
  "Conversores de Zeptôvolts",
  "Conversores de Attôvolts",
  "Conversores de Fentôvolts",
  "Conversores de Picôvolts",
  "Conversores de Nanôvolts",
  "Conversores de Micrôvolts",
  "Conversores de Milívolts",
  "Conversores de Centívolts",
  "Conversores de Decívolts",
  "Conversores de Volts",
  "Conversores de Decâvolts",
  "Conversores de Hectôvolts",
  "Conversores de Kilôvolts",
  "Conversores de Megavolts",
  "Conversores de Gigavolts",
  "Conversores de Teravolts",
  "Conversores de Petavolts",
  "Conversores de Exavolts",
  "Conversores de Zettavolts"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yV para outro tamanho",
  "Converte de zV para outro tamanho",
  "Converte de aV para outro tamanho",
  "Converte de fV para outro tamanho",
  "Converte de pV para outro tamanho",
  "Converte de nV para outro tamanho",
  "Converte de μV para outro tamanho",
  "Converte de mV para outro tamanho",
  "Converte de cV para outro tamanho",
  "Converte de dV para outro tamanho",
  "Converte de V para outro tamanho",
  "Converte de daV para outro tamanho",
  "Converte de hV para outro tamanho",
  "Converte de kV para outro tamanho",
  "Converte de MV para outro tamanho",
  "Converte de GV para outro tamanho",
  "Converte de TV para outro tamanho",
  "Converte de PV para outro tamanho",
  "Converte de EV para outro tamanho",
  "Converte de ZV para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsDifPotEletrico = [];

var cardsSuperioresPhysicsDifPotEletrico = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsDifPotEletrico.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsDifPotEletrico.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsDifPotEletrico ***/
  sectionRaizConverPhysicsDifPotEletrico.appendChild(cardInferior);

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