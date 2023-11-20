/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão Physics de Temperatura ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizConverPhysicsTemperatura = "conver_physics_temperatura";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_temperatura_titulo";
var classeCardInferior = "card_conver_physics_temperatura__inferior";
var classeCardSuperior = "card_conver_physics_temperatura__superior";
var classeCardLista = "card_conver_physics_temperatura_lista";
var classeCardItem = "card_conver_physics_temperatura_item";
var classeCardDescricao = "card_conver_physics_temperatura_descricao";
var classeCardContador = "card_conver_physics_temperatura_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsTemperatura = document.createElement("section");

sectionRaizConverPhysicsTemperatura.classList.add(classeEIDSectionRaizConverPhysicsTemperatura);

sectionRaizConverPhysicsTemperatura.id = classeEIDSectionRaizConverPhysicsTemperatura;

ui.appendChild(sectionRaizConverPhysicsTemperatura);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsTemperatura = document.createElement("button");

botaoRetornoConverPhysicsTemperatura.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsTemperatura.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsTemperatura.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsTemperatura.appendChild(botaoRetornoConverPhysicsTemperatura);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão Physics de Temperatura";

sectionRaizConverPhysicsTemperatura.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
"Conversão de Celsius em Fahrenheit",
"Conversão de Celsius em Kelvin",
"Conversão de Fahrenheit em Celsius",
"Conversão de Fahrenheit em Kelvin",
"Conversão de Kelvin em Celsius",
"Conversão de Kelvin em Fahrenheit");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Converte Celsius em Fahrenheit",
"Converte Celsius em Kelvin",
"Converte Fahrenheit em Celsius",
"Converte Fahrenheit em Kelvin",
"Converte Kelvin em Celsius",
"Converte Kelvin em Fahrenheit");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsTemperatura ***/
  sectionRaizConverPhysicsTemperatura.appendChild(cardInferior);

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
