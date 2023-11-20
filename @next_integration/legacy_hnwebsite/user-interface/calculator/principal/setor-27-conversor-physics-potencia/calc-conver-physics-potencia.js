/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Potência ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsPotencia = "conver_physics_potencia";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_potencia_titulo";
var classeCardInferior = "card_conver_physics_potencia__inferior";
var classeCardSuperior = "card_conver_physics_potencia__superior";
var classeCardLista = "card_conver_physics_potencia_lista";
var classeCardItem = "card_conver_physics_potencia_item";
var classeCardDescricao = "card_conver_physics_potencia_descricao";
var classeCardContador = "card_conver_physics_potencia_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsPotencia = document.createElement("section");

sectionRaizConverPhysicsPotencia.classList.add(classeEIDSectionRaizConverPhysicsPotencia);

sectionRaizConverPhysicsPotencia.id = classeEIDSectionRaizConverPhysicsPotencia;

ui.appendChild(sectionRaizConverPhysicsPotencia);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsPotencia = document.createElement("button");

botaoRetornoConverPhysicsPotencia.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsPotencia.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsPotencia.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsPotencia.appendChild(botaoRetornoConverPhysicsPotencia);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Potência";

sectionRaizConverPhysicsPotencia.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôwatts",
  "Conversores de Zeptôwatts",
  "Conversores de Attôwatts",
  "Conversores de Fentôwatts",
  "Conversores de Picôwatts",
  "Conversores de Nanôwatts",
  "Conversores de Micrôwatts",
  "Conversores de Milíwatts",
  "Conversores de Centíwatts",
  "Conversores de Decíwatts",
  "Conversores de Watts",
  "Conversores de Decâwatts",
  "Conversores de Hectôwatts",
  "Conversores de Kilôwatts",
  "Conversores de Megawatts",
  "Conversores de Gigawatts",
  "Conversores de Terawatts",
  "Conversores de Petawatts",
  "Conversores de Exawatts",
  "Conversores de Zettawatts"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yW para outro tamanho",
  "Converte de zW para outro tamanho",
  "Converte de aW para outro tamanho",
  "Converte de fW para outro tamanho",
  "Converte de pW para outro tamanho",
  "Converte de nW para outro tamanho",
  "Converte de μW para outro tamanho",
  "Converte de mW para outro tamanho",
  "Converte de cW para outro tamanho",
  "Converte de dW para outro tamanho",
  "Converte de W para outro tamanho",
  "Converte de daW para outro tamanho",
  "Converte de hW para outro tamanho",
  "Converte de kW para outro tamanho",
  "Converte de MW para outro tamanho",
  "Converte de GW para outro tamanho",
  "Converte de TW para outro tamanho",
  "Converte de PW para outro tamanho",
  "Converte de EW para outro tamanho",
  "Converte de ZW para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicspotencia = [];

var cardsSuperioresPhysicspotencia = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicspotencia.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicspotencia.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsPotencia ***/
  sectionRaizConverPhysicsPotencia.appendChild(cardInferior);

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