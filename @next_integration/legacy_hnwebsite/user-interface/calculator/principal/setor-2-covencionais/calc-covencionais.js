/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades Covencionais ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizCoven = "covencionais";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "covencionais_titulo";
var classeCardInferior = "card_covencionais__inferior";
var classeCardSuperior = "card_covencionais__superior";
var classeCardLista = "card_covencionais_lista";
var classeCardItem = "card_covencionais_item";
var classeCardDescricao = "card_covencionais_descricao";
var classeCardContador = "card_covencionais_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizCoven = document.createElement("section");

sectionRaizCoven.classList.add(classeEIDSectionRaizCoven);

sectionRaizCoven.id = classeEIDSectionRaizCoven;

ui.appendChild(sectionRaizCoven);

/** Botão de Retorno à página anterior **/

var botaoRetornoCovencionais = document.createElement("button");

botaoRetornoCovencionais.classList.add(classeEIDSectionBotao);

botaoRetornoCovencionais.id = classeEIDSectionBotao;

botaoRetornoCovencionais.textContent = "Voltar à página anterior";

sectionRaizCoven.appendChild(botaoRetornoCovencionais);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades Covencionais";

sectionRaizCoven.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
"Soma",
"Subtração",
"Multiplicação",
"Divisão",
"Potência",
"Potência de Potência",
"Raiz Quadrada",
"Raiz Cúbica",
"Raiz Biquadrada",
"Raiz Bicúbica");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Realiza somas",
"Realiza subtrações",
"Realiza multiplicações",
"Realiza divisões",
"Realiza potências",
"Realiza potências de potências",
"Realiza raizes quadradas",
"Realiza raizes cúbicas",
"Realiza raizes biquadradas",
"Realiza raizes bicúbicas");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if(i >= 9) {
    contentsFuncionalidadesContador.push(i+1);
  }else {
  contentsFuncionalidadesContador.push("0"+(i+1));
  }
}

for(let i = 0; i < contentsFuncionalidades.length; i++) {
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

/*** cardTerciario é elemento-filho de sectionRaizCoven ***/
  sectionRaizCoven.appendChild(cardInferior);

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
