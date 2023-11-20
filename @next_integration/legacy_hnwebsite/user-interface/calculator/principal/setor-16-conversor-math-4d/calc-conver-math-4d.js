/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Math de 4 Dimensões ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverMath4d = "conver_math_4d";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_math_4d_titulo";
var classeCardInferior = "card_conver_math_4d__inferior";
var classeCardSuperior = "card_conver_math_4d__superior";
var classeCardLista = "card_conver_math_4d_lista";
var classeCardItem = "card_conver_math_4d_item";
var classeCardDescricao = "card_conver_math_4d_descricao";
var classeCardContador = "card_conver_math_4d_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverMath4d = document.createElement("section");

sectionRaizConverMath4d.classList.add(classeEIDSectionRaizConverMath4d);

sectionRaizConverMath4d.id = classeEIDSectionRaizConverMath4d;

ui.appendChild(sectionRaizConverMath4d);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverMath4d = document.createElement("button");

botaoRetornoConverMath4d.classList.add(classeEIDSectionBotao);

botaoRetornoConverMath4d.id = classeEIDSectionBotao;

botaoRetornoConverMath4d.textContent = "Voltar à página anterior";

sectionRaizConverMath4d.appendChild(botaoRetornoConverMath4d);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Math de 4 Dimensões";

sectionRaizConverMath4d.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Comprimento em Polegadas⁴",
  "Conversores de Comprimento em Pés⁴",
  "Conversores de Comprimento em Milhas⁴",
  "Conversores de Comprimento em Milhas Náuticas⁴",
  "Conversores de Comprimento em Angstrons⁴",
  "Conversores de Comprimento em Fermis⁴",
  "Conversores de Comprimento em Anos-luz⁴",
  "Conversores de Comprimento em Parsecs⁴",
  "Conversores de Comprimento em Braças⁴",
  "Conversores de Comprimento em Jardas⁴",
  "Conversores de Comprimento em Raios de Bohr⁴",
  "Conversores de Comprimento em Varas⁴",
  "Conversores de Comprimento em Mils⁴",
  "Conversores de Yoctômetros⁴",
  "Conversores de Zeptômetros⁴",
  "Conversores de Attômetros⁴",
  "Conversores de Fentômetros⁴",
  "Conversores de Picômetros⁴",
  "Conversores de Nanômetros⁴",
  "Conversores de Micrômetros⁴",
  "Conversores de Milímetros⁴",
  "Conversores de Centímetros⁴",
  "Conversores de Decímetros⁴",
  "Conversores de Metros⁴",
  "Conversores de Decâmetros⁴",
  "Conversores de Hectômetros⁴",
  "Conversores de Kilômetros⁴",
  "Conversores de Megametros⁴",
  "Conversores de Gigametros⁴",
  "Conversores de Terametros⁴",
  "Conversores de Petametros⁴",
  "Conversores de Exametros⁴",
  "Conversores de Zettametros⁴");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de in⁴ para outro tamanho",
  "Converte de ft⁴ para outro tamanho",
  "Converte de mi⁴ para outro tamanho",
  "Converte de mi naut.⁴ para outro tamanho",
  "Converte de Angstrons⁴ para outro tamanho",
  "Converte de Fermis⁴ para outro tamanho",
  "Converte de Anos-luz⁴ para outro tamanho",
  "Converte de Parsecs⁴ para outro tamanho",
  "Converte de Braças⁴ para outro tamanho",
  "Converte de Jardas⁴ para outro tamanho",
  "Converte de Raios de Bohr⁴ para outro tamanho",
  "Converte de Varas⁴ para outro tamanho",
  "Converte de Mils⁴ para outro tamanho",
  "Converte de ym⁴ para outro tamanho",
  "Converte de zm⁴ para outro tamanho",
  "Converte de am⁴ para outro tamanho",
  "Converte de fm⁴ para outro tamanho",
  "Converte de pm⁴ para outro tamanho",
  "Converte de nm⁴ para outro tamanho",
  "Converte de μm⁴ para outro tamanho",
  "Converte de mm⁴ para outro tamanho",
  "Converte de cm⁴ para outro tamanho",
  "Converte de dm⁴ para outro tamanho",
  "Converte de m⁴ para outro tamanho",
  "Converte de dam⁴ para outro tamanho",
  "Converte de hm⁴ para outro tamanho",
  "Converte de km⁴ para outro tamanho",
  "Converte de Mm⁴ para outro tamanho",
  "Converte de Gm⁴ para outro tamanho",
  "Converte de Tm⁴ para outro tamanho",
  "Converte de Pm⁴ para outro tamanho",
  "Converte de Em⁴ para outro tamanho",
  "Converte de Zm⁴ para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresMath4d = [];

var cardsSuperioresMath4d = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresMath4d.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresMath4d.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverMath4d ***/
  sectionRaizConverMath4d.appendChild(cardInferior);

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