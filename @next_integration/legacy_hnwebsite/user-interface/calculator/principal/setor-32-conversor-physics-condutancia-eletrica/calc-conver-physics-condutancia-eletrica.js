/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Condutância Elétrica ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsCondutanciaEletrica = "conver_physics_condutancia_eletrica";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_condutancia_eletrica_titulo";
var classeCardInferior = "card_conver_physics_condutancia_eletrica__inferior";
var classeCardSuperior = "card_conver_physics_condutancia_eletrica__superior";
var classeCardLista = "card_conver_physics_condutancia_eletrica_lista";
var classeCardItem = "card_conver_physics_condutancia_eletrica_item";
var classeCardDescricao = "card_conver_physics_condutancia_eletrica_descricao";
var classeCardContador = "card_conver_physics_condutancia_eletrica_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsCondutanciaEletrica = document.createElement("section");

sectionRaizConverPhysicsCondutanciaEletrica.classList.add(classeEIDSectionRaizConverPhysicsCondutanciaEletrica);

sectionRaizConverPhysicsCondutanciaEletrica.id = classeEIDSectionRaizConverPhysicsCondutanciaEletrica;

ui.appendChild(sectionRaizConverPhysicsCondutanciaEletrica);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsCondutEletrica = document.createElement("button");

botaoRetornoConverPhysicsCondutEletrica.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsCondutEletrica.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsCondutEletrica.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsCondutanciaEletrica.appendChild(botaoRetornoConverPhysicsCondutEletrica);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Condutância Elétrica" ;

sectionRaizConverPhysicsCondutanciaEletrica.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôsiemens",
  "Conversores de Zeptôsiemens",
  "Conversores de Attôsiemens",
  "Conversores de Fentôsiemens",
  "Conversores de Picôsiemens",
  "Conversores de Nanôsiemens",
  "Conversores de Micrôsiemens",
  "Conversores de Milísiemens",
  "Conversores de Centísiemens",
  "Conversores de Decísiemens",
  "Conversores de Siemens",
  "Conversores de Decâsiemens",
  "Conversores de Hectôsiemens",
  "Conversores de Kilôsiemens",
  "Conversores de Megasiemens",
  "Conversores de Gigasiemens",
  "Conversores de Terasiemens",
  "Conversores de Petasiemens",
  "Conversores de Exasiemens",
  "Conversores de Zettasiemens"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yS para outro tamanho",
  "Converte de zS para outro tamanho",
  "Converte de aS para outro tamanho",
  "Converte de fS para outro tamanho",
  "Converte de pS para outro tamanho",
  "Converte de nS para outro tamanho",
  "Converte de μS para outro tamanho",
  "Converte de mS para outro tamanho",
  "Converte de cS para outro tamanho",
  "Converte de dS para outro tamanho",
  "Converte de S para outro tamanho",
  "Converte de daS para outro tamanho",
  "Converte de hS para outro tamanho",
  "Converte de kS para outro tamanho",
  "Converte de MS para outro tamanho",
  "Converte de GS para outro tamanho",
  "Converte de TS para outro tamanho",
  "Converte de PS para outro tamanho",
  "Converte de ES para outro tamanho",
  "Converte de ZS para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsCondutanciaEletrica = [];

var cardsSuperioresPhysicsCondutanciaEletrica = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsCondutanciaEletrica.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsCondutanciaEletrica.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsCondutanciaEletrica ***/
  sectionRaizConverPhysicsCondutanciaEletrica.appendChild(cardInferior);

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