/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Resistência Elétrica ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsResistenciaEletrica = "conver_physics_resistencia_eletrica";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_resistencia_eletrica_titulo";
var classeCardInferior = "card_conver_physics_resistencia_eletrica__inferior";
var classeCardSuperior = "card_conver_physics_resistencia_eletrica__superior";
var classeCardLista = "card_conver_physics_resistencia_eletrica_lista";
var classeCardItem = "card_conver_physics_resistencia_eletrica_item";
var classeCardDescricao = "card_conver_physics_resistencia_eletrica_descricao";
var classeCardContador = "card_conver_physics_resistencia_eletrica_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsResistenciaEletrica = document.createElement("section");

sectionRaizConverPhysicsResistenciaEletrica.classList.add(classeEIDSectionRaizConverPhysicsResistenciaEletrica);

sectionRaizConverPhysicsResistenciaEletrica.id = classeEIDSectionRaizConverPhysicsResistenciaEletrica;

ui.appendChild(sectionRaizConverPhysicsResistenciaEletrica);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsResistEletrica = document.createElement("button");

botaoRetornoConverPhysicsResistEletrica.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsResistEletrica.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsResistEletrica.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsResistenciaEletrica.appendChild(botaoRetornoConverPhysicsResistEletrica);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Resistência Elétrica" ;

sectionRaizConverPhysicsResistenciaEletrica.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôohms",
  "Conversores de Zeptôohms",
  "Conversores de Attôohms",
  "Conversores de Fentôohms",
  "Conversores de Picôohms",
  "Conversores de Nanôohms",
  "Conversores de Micrôohms",
  "Conversores de Milíohms",
  "Conversores de Centíohms",
  "Conversores de Decíohms",
  "Conversores de Ohms",
  "Conversores de Decâohms",
  "Conversores de Hectôohms",
  "Conversores de Kilôohms",
  "Conversores de Megaohms",
  "Conversores de Gigaohms",
  "Conversores de Teraohms",
  "Conversores de Petaohms",
  "Conversores de Exaohms",
  "Conversores de Zettaohms"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yΩ para outro tamanho",
  "Converte de zΩ para outro tamanho",
  "Converte de aΩ para outro tamanho",
  "Converte de fΩ para outro tamanho",
  "Converte de pΩ para outro tamanho",
  "Converte de nΩ para outro tamanho",
  "Converte de μΩ para outro tamanho",
  "Converte de mΩ para outro tamanho",
  "Converte de cΩ para outro tamanho",
  "Converte de dΩ para outro tamanho",
  "Converte de Ω para outro tamanho",
  "Converte de daΩ para outro tamanho",
  "Converte de hΩ para outro tamanho",
  "Converte de kΩ para outro tamanho",
  "Converte de MΩ para outro tamanho",
  "Converte de GΩ para outro tamanho",
  "Converte de TΩ para outro tamanho",
  "Converte de PΩ para outro tamanho",
  "Converte de EΩ para outro tamanho",
  "Converte de ZΩ para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsResistenciaEletrica = [];

var cardsSuperioresPhysicsResistenciaEletrica = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsResistenciaEletrica.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsResistenciaEletrica.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsResistenciaEletrica ***/
  sectionRaizConverPhysicsResistenciaEletrica.appendChild(cardInferior);

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