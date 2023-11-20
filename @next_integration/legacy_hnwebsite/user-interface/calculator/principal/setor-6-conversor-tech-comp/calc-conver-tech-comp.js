/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades Conversoras de Bases Tech Computacionais ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizConverTechComp = "conver_tech_comp";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_tech_comp_titulo";
var classeCardInferior = "card_conver_tech_comp__inferior";
var classeCardSuperior = "card_conver_tech_comp__superior";
var classeCardLista = "card_conver_tech_comp_lista";
var classeCardItem = "card_conver_tech_comp_item";
var classeCardDescricao = "card_conver_tech_comp_descricao";
var classeCardContador = "card_conver_tech_comp_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverTechComp = document.createElement("section");

sectionRaizConverTechComp.classList.add(classeEIDSectionRaizConverTechComp);

sectionRaizConverTechComp.id = classeEIDSectionRaizConverTechComp;

ui.appendChild(sectionRaizConverTechComp);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverTechComp = document.createElement("button");

botaoRetornoConverTechComp.classList.add(classeEIDSectionBotao);

botaoRetornoConverTechComp.id = classeEIDSectionBotao;

botaoRetornoConverTechComp.textContent = "Voltar à página anterior";

sectionRaizConverTechComp.appendChild(botaoRetornoConverTechComp);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Tech Computacionais";

sectionRaizConverTechComp.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
"Conversor de Decimal em Binário",
"Conversor de Decimal em Octal",
"Conversor de Decimal em Hexadecimal",
"Conversor de Binário em Decimal",
"Conversor de Binário em Octal",
"Conversor de Binário em Hexadecimal",
"Conversor de Octal em Decimal",
"Conversor de Octal em Binário",
"Conversor de Octal em Hexadecimal",
"Conversor de Hexadecimal em Decimal",
"Conversor de Hexadecimal em Binário",
"Conversor de Hexadecimal em Octal");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Converte de Decimal para Binário",
"Converte de Decimal para Octal",
"Converte de Decimal para Hexadecimal",
"Converte de Binário para Decimal",
"Converte de Binário para Octal",
"Converte de Binário para Hexadecimal",
"Converte de Octal para Decimal",
"Converte de Octal para Binário",
"Converte de Octal para Hexadecimal",
"Converte de Hexadecimal para Decimal",
"Converte de Hexadecimal para Binário",
"Converte de Hexadecimal para Octal");

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

  /*** cardTerciario é elemento-filho de sectionRaizConverTechComp ***/
  sectionRaizConverTechComp.appendChild(cardInferior);

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
