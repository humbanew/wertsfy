/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/** $$ Classe e IDs $$ **/

const classeEIDSectionRaizMain = "calc_principal";
var classeEIDContadorFuncionalidades = "calc_contador_functions";
var classeCardInferior = "card_principal__inferior";
var classeCardSuperior = "card_principal__superior";
var classeCardLista = "card_principal__lista";
var classeCardListaItem = "card_principal__item";
var classeCardListaItemContador = "card_principal__contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaiz = document.createElement("section");

sectionRaiz.classList.add(classeEIDSectionRaizMain);

sectionRaiz.id = classeEIDSectionRaizMain;

ui.appendChild(sectionRaiz);

/** ! Contador de Funcionalidades ! **/

var contador = new Contador();
contador.adicionar("card_covencionais__inferior");
contador.adicionar("card_trigonometricas__inferior");
contador.adicionar("card_arcos_trigonometricos__inferior");
contador.adicionar("card_logaritmas__inferior");
contador.adicionar("card_conver_tech__inferior___spart");
contador.adicionar("card_conver_tech_comp__inferior");
contador.adicionar("card_conver_math_an__inferior");
contador.adicionar("card_conver_math_an_s__inferior___spart");
contador.adicionar("card_conver_math_an_p__inferior___spart");
contador.adicionar("card_conver_math_c__inferior___spart");
contador.adicionar("card_conver_math_a__inferior___spart");
contador.adicionar("card_conver_math_v__inferior___spart");
contador.adicionar("card_conver_math_4d__inferior___spart");
contador.adicionar("card_conver_math_m__inferior___spart");
contador.adicionar("card_conver_physics_tempo__inferior___spart");
contador.adicionar("card_conver_physics_pressao__inferior___spart");
contador.adicionar("card_conver_physics_temperatura__inferior");
contador.adicionar("card_conver_physics_fluxo_magnetico__inferior");
contador.adicionar("card_conver_physics_frequencia__inferior___spart");
contador.adicionar("card_conver_physics_forca__inferior___spart");
contador.adicionar("card_conver_physics_energia__inferior___spart");
contador.adicionar("card_conver_physics_potencia__inferior___spart");
contador.adicionar("card_conver_physics_carga_eletrica__inferior___spart");
contador.adicionar("card_conver_physics_dif_pot_eletrico__inferior___spart");
contador.adicionar("card_conver_physics_capacitancia__inferior___spart");
contador.adicionar("card_conver_physics_resistencia_eletrica__inferior___spart");
contador.adicionar("card_conver_physics_condutancia_eletrica__inferior___spart");
contador.adicionar("card_conver_physics_fluxo_inducao_magnetica__inferior___spart");
contador.adicionar("card_conver_physics_inducao_magnetica__inferior___spart");
contador.adicionar("card_conver_physics_indutancia__inferior___spart");
contador.adicionar("card_conver_physics_fluxo_luminoso__inferior___spart");
contador.adicionar("card_conver_physics_iluminancia__inferior___spart");
contador.adicionar("card_conver_chemical_ativ_radionuc__inferior___spart");
contador.adicionar("card_conver_chemical_dose_absorvida__inferior___spart");
contador.adicionar("card_conver_chemical_dose_equivalente__inferior___spart");
contador.adicionar("card_conver_chemical_atividade_catalitica__inferior___spart");
contador.adicionar("card_conver_chemical_massa_especifica__inferior___spart");
contador.montar(sectionRaiz, classeEIDContadorFuncionalidades);

/** Cards principais da calculadora **/

/*** Conteúdo de texto dos Cards ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Funcionalidades Unificadas",
  "Funcionalidades Covencionais",
  "Funcionalidades Trigonométricas",
  "Funcionalidades de Arcos Trigonométricos",
  "Funcionalidades Logarítmas",
  "Funcionalidades de Conversão Tech",
  "Funcionalidades de Conversão Tech Computacionais",
  "Funcionalidades de Conversão Math de Ângulos Coven.",
  "Funcionalidades de Conversão Math de Ângulos Planos",
  "Funcionalidades de Conversão Math de Ângulos Sólidos",
  "Funcionalidades de Conversão Math de Comprimento",
  "Funcionalidades de Conversão Math de Área",
  "Funcionalidades de Conversão Math de Volume",
  "Funcionalidades de Conversão Math de 4 Dimensões",
  "Funcionalidades de Conversão Math de Massa",
  "Funcionalidades de Conversão Physics de Tempo",
  "Funcionalidades de Conversão Physics de Pressão",
  "Funcionalidades de Conversão Physics de Temperatura",
  "Funcionalidades de Conversão Physics de Fluxo Magnético",
  "Funcionalidades de Conversão Physics de Frequência",
  "Funcionalidades de Conversão Physics de Força e Tensão",
  "Funcionalidades de Conversão Physics de Energia",
  "Funcionalidades de Conversão Physics de Potência",
  "Funcionalidades de Conversão Physics de Carga Elétrica",
  "Funcionalidades de Conver. Phys. de Dif. de Pot. Elétrica",
  "Funcionalidades de Conversão Physics de Capacitância",
  "Funcionalidades de Conversão Physics de Resist. Elétrica",
  "Funcionalidades de Conversão Physics de Codunt. Elétrica",
  "Funcionalidades de Conversão Physics de Fluxo de Ind.",
  "Funcionalidades de Conversão Physics de Ind. Magnética",
  "Funcionalidades de Conversão Physics de Indutância",
  "Funcionalidades de Conversão Physics de Fluxo Lumin.",
  "Funcionalidades de Conversão Physics de Iluminância",
  "Funcionalidades de Conversão Chm. de Ativ. Radion.",
  "Funcionalidades de Conversão Chm. de Dose Absorv.",
  "Funcionalidades de Conversão Chm. de Dose Equiv.",
  "Funcionalidades de Conversão Chm. de Ativ. Catalítica",
  "Funcionalidades de Conv. Chm. de Mas. Esp. e Qnt. de Mat.",
  "Funcionalidades de Conversão Monetária",
  "Funcionalidades de Fórmulas Matemáticas",
  "Funcionalidades de Fórmulas Físicas",
  "Funcionalidades de Fórmulas Químicas",
  "Funcionalidades de Fórmulas Biológicas",
  "Funcionalidades de Fórmulas Geográficas",
  "Funcionalidades de Transformação",
  "Funcionalidades Demonstradoras",
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferiores = [];

var cardsSuperiores = [];

for(let i = 0; i < contentsFuncionalidades.length; i++) {
  
  /*** Card Primário ***/
    var cardInferior = document.createElement("div");
  
    cardInferior.classList.add(classeCardInferior);

    cardsInferiores.push(cardInferior);
  
  /*** Card Superior ***/
    var cardSuperior = document.createElement("div");
  
    cardSuperior.classList.add(classeCardSuperior);

    cardsSuperiores.push(cardSuperior);
  
  /*** Lista de Conteúdo do Card ***/
    var cardLista = document.createElement("ol");
  
    cardLista.classList.add(classeCardLista);
  
  /*** Item da Lista de Conteúdo do Card ***/
    var cardListaItem = document.createElement("li");
  
    cardListaItem.classList.add(classeCardListaItem);
  
    cardListaItem.textContent = contentsFuncionalidades[i];
  
  /*** Descrição do Item da Lista de Conteúdo do Card ***/
    var cardListaItemContador = document.createElement("dd");
  
    cardListaItemContador.classList.add(classeCardListaItemContador);
  
    cardListaItemContador.textContent = contentsFuncionalidadesContador[i];

  /*** cardInferior é elemento-filho de sectionRaiz ***/
    sectionRaiz.appendChild(cardInferior);

  /*** cardSuperior é elemento-filho de cardInferior***/
    cardInferior.appendChild(cardSuperior);

  /*** cardLista é elemento-filho de cardSuperior ***/
    cardSuperior.appendChild(cardLista);

  /*** cardListaItem é elemento-filho de cardLista ***/
    cardLista.appendChild(cardListaItem);

  /*** cardListaItemContador é elemento-filho de cardLista ***/
    cardLista.appendChild(cardListaItemContador);
}
