/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades Conversoras de Base Math de Ângulos Covencionais ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizConverMathAn = "conver_math_an";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_an_titulo";
var classeCardInferior = "card_conver_math_an__inferior";
var classeCardSuperior = "card_conver_math_an__superior";
var classeCardLista = "card_conver_math_an_lista";
var classeCardItem = "card_conver_math_an_item";
var classeCardDescricao = "card_conver_math_an_descricao";
var classeCardContador = "card_conver_math_an_contador";

/*
var contentsFuncionalidades = [
    
];

var contentsFuncionalidadesDescricao = [
    
];
*/

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMathAn = document.createElement("section");

sectionRaizConverMathAn.classList.add(classeEIDSectionRaizConverMathAn);

sectionRaizConverMathAn.id = classeEIDSectionRaizConverMathAn;

ui.appendChild(sectionRaizConverMathAn);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMathAn = document.createElement("button");

botaoRetornoConverMathAn.classList.add(classeEIDSectionBotao);

botaoRetornoConverMathAn.id = classeEIDSectionBotao;

botaoRetornoConverMathAn.textContent = "Voltar à página anterior";

sectionRaizConverMathAn.appendChild(botaoRetornoConverMathAn);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de Ângulos Covencionais";

sectionRaizConverMathAn.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
"Conversor de Ângulos em Graus para Radianos",
"Conversor de Ângulos em Radianos para Graus");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
"Converte Ângulos em Graus para Radianos",
"Converte Ângulos em Radianos para Graus");

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

/*** cardTerciario é elemento-filho de sectionRaizConverMathAn ***/
  sectionRaizConverMathAn.appendChild(cardInferior);

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
