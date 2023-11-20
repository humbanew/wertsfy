/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Carga Elétrica ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsCargaEletrica = "conver_physics_carga_eletrica";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_carga_eletrica_titulo";
var classeCardInferior = "card_conver_physics_carga_eletrica__inferior";
var classeCardSuperior = "card_conver_physics_carga_eletrica__superior";
var classeCardLista = "card_conver_physics_carga_eletrica_lista";
var classeCardItem = "card_conver_physics_carga_eletrica_item";
var classeCardDescricao = "card_conver_physics_carga_eletrica_descricao";
var classeCardContador = "card_conver_physics_carga_eletrica_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsCargaEletrica = document.createElement("section");

sectionRaizConverPhysicsCargaEletrica.classList.add(classeEIDSectionRaizConverPhysicsCargaEletrica);

sectionRaizConverPhysicsCargaEletrica.id = classeEIDSectionRaizConverPhysicsCargaEletrica;

ui.appendChild(sectionRaizConverPhysicsCargaEletrica);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsCargaEletrica = document.createElement("button");

botaoRetornoConverPhysicsCargaEletrica.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsCargaEletrica.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsCargaEletrica.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsCargaEletrica.appendChild(botaoRetornoConverPhysicsCargaEletrica);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Carga Elétrica";

sectionRaizConverPhysicsCargaEletrica.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôcoulomb",
  "Conversores de Zeptôcoulomb",
  "Conversores de Attôcoulomb",
  "Conversores de Fentôcoulomb",
  "Conversores de Picôcoulomb",
  "Conversores de Nanôcoulomb",
  "Conversores de Micrôcoulomb",
  "Conversores de Milícoulomb",
  "Conversores de Centícoulomb",
  "Conversores de Decícoulomb",
  "Conversores de Coulomb",
  "Conversores de Decâcoulomb",
  "Conversores de Hectôcoulomb",
  "Conversores de Kilôcoulomb",
  "Conversores de Megacoulomb",
  "Conversores de Gigacoulomb",
  "Conversores de Teracoulomb",
  "Conversores de Petacoulomb",
  "Conversores de Exacoulomb",
  "Conversores de Zettacoulomb"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yC para outro tamanho",
  "Converte de zC para outro tamanho",
  "Converte de aC para outro tamanho",
  "Converte de fC para outro tamanho",
  "Converte de pC para outro tamanho",
  "Converte de nC para outro tamanho",
  "Converte de μC para outro tamanho",
  "Converte de mC para outro tamanho",
  "Converte de cC para outro tamanho",
  "Converte de dC para outro tamanho",
  "Converte de C para outro tamanho",
  "Converte de daC para outro tamanho",
  "Converte de hC para outro tamanho",
  "Converte de kC para outro tamanho",
  "Converte de MC para outro tamanho",
  "Converte de GC para outro tamanho",
  "Converte de TC para outro tamanho",
  "Converte de PC para outro tamanho",
  "Converte de EC para outro tamanho",
  "Converte de ZC para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsCargaEletrica = [];

var cardsSuperioresPhysicsCargaEletrica = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsCargaEletrica.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsCargaEletrica.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsCargaEletrica ***/
  sectionRaizConverPhysicsCargaEletrica.appendChild(cardInferior);

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