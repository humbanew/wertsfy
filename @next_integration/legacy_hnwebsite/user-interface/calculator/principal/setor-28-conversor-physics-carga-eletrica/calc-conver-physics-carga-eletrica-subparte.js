/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsCargaEletricaSPart = "conver_physics_carga_eletrica__spart";
var classeTituloSPart = "conver_physics_carga_eletrica_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_carga_eletrica__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_carga_eletrica__superior___spart";
var classeCardContadorSPart = "card_conver_physics_carga_eletrica_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Carga Elétrica | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Carga Elétrica | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsCargaEletricaSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsCargaEletrica = [
  "Yoctôcoulomb",
  "Zeptôcoulomb",
  "Attôcoulomb",
  "Fentôcoulomb",
  "Picôcoulomb",
  "Nanôcoulomb",
  "Micrôcoulomb",
  "Milícoulomb",
  "Centícoulomb",
  "Decícoulomb",
  "Coulomb",
  "Decâcoulomb",
  "Hectôcoulomb",
  "Kilôcoulomb",
  "Megacoulomb",
  "Gigacoulomb",
  "Teracoulomb",
  "Petacoulomb",
  "Exacoulomb",
  "Zettacoulomb",
];

for (let u = 0; u < medidasPhysicsCargaEletrica.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Zeptôcoulomb`,
    `Conversor de Zeptôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Attôcoulomb`,
    `Conversor de Attôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Fentôcoulomb`,
    `Conversor de Fentôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Picôcoulomb`,
    `Conversor de Picôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Nanôcoulomb`,
    `Conversor de Nanôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Micrôcoulomb`,
    `Conversor de Micrôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Milícoulomb`,
    `Conversor de Milícoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Centícoulomb`,
    `Conversor de Centícoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Decícoulomb`,
    `Conversor de Decícoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Coulomb`,
    `Conversor de Coulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Decâcoulomb`,
    `Conversor de Decâcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Hectôcoulomb`,
    `Conversor de Hectôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Kilôcoulomb`,
    `Conversor de Kilôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Megacoulomb`,
    `Conversor de Megacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Gigacoulomb`,
    `Conversor de Gigacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Teracoulomb`,
    `Conversor de Teracoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Petacoulomb`,
    `Conversor de Petacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Exacoulomb`,
    `Conversor de Exacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Zettacoulomb`,
    `Conversor de Zettacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Conversor de ${medidasPhysicsCargaEletrica[u]} em Yottacoulomb`,
    `Conversor de Yottacoulomb em ${medidasPhysicsCargaEletrica[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsCargaEletrica[u]} em Zeptôcoulomb`,
    `Converte Zeptôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Attôcoulomb`,
    `Converte Attôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Fentôcoulomb`,
    `Converte Fentôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Picôcoulomb`,
    `Converte Picôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Nanôcoulomb`,
    `Converte Nanôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Micrôcoulomb`,
    `Converte Micrôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Milícoulomb`,
    `Converte Milícoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Centícoulomb`,
    `Converte Centícoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Decícoulomb`,
    `Converte Decícoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Coulomb`,
    `Converte Coulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Decâcoulomb`,
    `Converte Decâcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Hectôcoulomb`,
    `Converte Hectôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Kilôcoulomb`,
    `Converte Kilôcoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Megacoulomb`,
    `Converte Megacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Gigacoulomb`,
    `Converte Gigacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Teracoulomb`,
    `Converte Teracoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Petacoulomb`,
    `Converte Petacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Exacoulomb`,
    `Converte Exacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Zettacoulomb`,
    `Converte Zettacoulomb em ${medidasPhysicsCargaEletrica[u]}`,
    `Converte ${medidasPhysicsCargaEletrica[u]} em Yottacoulomb`,
    `Converte Yottacoulomb em ${medidasPhysicsCargaEletrica[u]}`
  ];

  var contentsFuncionalidadesContadorSubParte = [];

  for (let i = 0; i < contentsFuncionalidadesSubParte.length; i++) {
    if (i >= 9) {
      contentsFuncionalidadesContadorSubParte.push(i + 1);
    } else {
      contentsFuncionalidadesContadorSubParte.push("0" + (i + 1));
    }
  }

  /** Section dos cards **/

  var sectionRaizConverPhysicsCargaEletricaSPart = document.createElement("section");

  sectionRaizConverPhysicsCargaEletricaSPart.classList.add(classeEIDSectionRaizConverPhysicsCargaEletrica);

  sectionRaizConverPhysicsCargaEletricaSPart.id = "conver_physics_carga_eletrica__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsCargaEletricaSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsCargaEletricaSPart = document.createElement("button");

  botaoRetornoConverPhysicsCargaEletricaSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsCargaEletricaSPart.id = "botao_retorno_physics_carga_eletrica_part" + `_${u+1}`;

  botaoRetornoConverPhysicsCargaEletricaSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsCargaEletricaSPart.appendChild(botaoRetornoConverPhysicsCargaEletricaSPart);

  tituloConstructor(u);

  /* Ajustador para a retirada dos Cards indevidos nas divisões */

  for (let i = 0; i < u; i++) {
    contentsFuncionalidadesSubParte.splice(0, 2);
    contentsFuncionalidadesDescricaoSubParte.splice(0, 2);
  }

  /* Construtor das estruturas dos Cards */

  for (let i = 0; i < contentsFuncionalidadesSubParte.length; i++) {

    /*** Card Inferior ***/
    var cardInferiorSPart = document.createElement("div");

    cardInferiorSPart.classList.add(classeCardInferiorSPart);

    /*** Card Superior ***/
    var cardSuperiorSPart = document.createElement("div");

    cardSuperiorSPart.classList.add(classeCardSuperiorSPart);

    /*** Lista de Conteúdo do Card ***/
    var cardListaSPart = document.createElement("ol");

    cardListaSPart.classList.add(classeCardLista);

    /*** Item da Lista de Conteúdo do Card ***/
    var cardListaItemSPart = document.createElement("li");

    cardListaItemSPart.classList.add(classeCardItem);

    cardListaItemSPart.textContent = contentsFuncionalidadesSubParte[i];

    /*** Descrição do Item da Lista de Conteúdo do Card ***/
    var cardListaItemDescricaoSPart = document.createElement("dl");

    cardListaItemDescricaoSPart.classList.add(classeCardDescricao);

    cardListaItemDescricaoSPart.textContent = contentsFuncionalidadesDescricaoSubParte[i];

    /*** Descrição do Item da Lista de Conteúdo do Card ***/
    var cardListaItemContadorSPart = document.createElement("dd");

    cardListaItemContadorSPart.classList.add(classeCardContadorSPart);

    cardListaItemContadorSPart.textContent = contentsFuncionalidadesContadorSubParte[i];

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsCargaEletricaSPart ***/
    sectionRaizConverPhysicsCargaEletricaSPart.appendChild(cardInferiorSPart);

    /*** cardSuperiorSPart é elemento-filho de cardInferiorSPart ***/
    cardInferiorSPart.appendChild(cardSuperiorSPart);

    /*** cardListaSPart é elemento-filho de cardSuperiorSPart ***/
    cardSuperiorSPart.appendChild(cardListaSPart);

    /*** cardListaItemSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemSPart);

    /*** cardListaItemDescricaoSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemDescricaoSPart);

    /*** cardListaItemDescricaoSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemContadorSPart);
  }
}