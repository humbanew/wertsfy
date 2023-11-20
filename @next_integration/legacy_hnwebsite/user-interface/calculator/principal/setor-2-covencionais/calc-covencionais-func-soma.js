/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var covencionais = new Covencionais();
var montadorPagina = new Montador();
let dynamicSoma = new Dinamicador();

function realizaAviso() {
  dynamicSoma.dynamicSpanStyleColor(spanNotificaçõesSoma);
  spanNotificaçõesSoma.textContent = "AVISO: Proibido colocar letras que não sejam comandos válidos. Cuidado!";
  setTimeout(() => {
    spanNotificaçõesSoma.textContent = "Como usar ▶ Comandos do Teclado: Valores Iniciais ➡ 'S' ou 's' | Somar ➡ '+' | Finalizar ➡ 'Enter' | Limpar ➡ 'C' ou 'c' ou os Botões. Adicione os valores um de cada vez.";
    spanNotificaçõesSoma.style.backgroundColor = "#0066ff";
  }, 10000);
}

/* 
 * Funcionalidade de Soma
 */

montadorPagina.interligaBody(
  montadorPagina.montaElemento("section", "covencionais_soma", "covencionais_soma"));

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "botao_retorno", "botao_retorno__soma", "Voltar à página anterior"), "covencionais_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("h2", "covencionais_titulo", "coven_func__titulo", "Funcionalidade de Soma"), "covencionais_soma");

const mensagemInfoSoma = "Como usar ▶ Comandos do Teclado: Somar ➡ '+' | Finalizar ➡ 'Enter' | Limpar ➡ 'C' ou 'c' ou os Botões. Adicione os valores um de cada vez.";

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("span", "covencionais_span", "coven_func_span__soma", mensagemInfoSoma), "covencionais_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("div", "covencionais_div", "coven_card_soma"), "covencionais_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("input", "covencionais_input", "coven_input_soma", "", "text", "Insira aqui os valores"), "coven_card_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_somar", "Somar"), "coven_card_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_finalizar_soma", "Finalizar"), "coven_card_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_limpar_soma", "Limpar"), "coven_card_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("p", "covencionais_paragraph__parciais", "coven_p_s_parciais", "Parciais ➡ 0"), "coven_card_soma");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("p", "covencionais_paragraph", "coven_p_soma", "Resultado ➡ 0"), "coven_card_soma");

/*
 * Lógica de Funcionamento da Soma
 */

let botaoSomar = document.getElementById("coven_btn_somar");
let botaoFinalizarSoma = document.getElementById("coven_btn_finalizar_soma");
let botaoLimparSoma = document.getElementById("coven_btn_limpar_soma");
let displayResultados = document.getElementById("coven_p_soma");
let displayResultadosParciais = document.getElementById("coven_p_s_parciais");

let spanNotificaçõesSoma = document.getElementById("coven_func_span__soma");

let inputSoma = document.getElementById("coven_input_soma");
inputSoma.value = "0";
let valoresSomaParciais = [];

inputSoma.addEventListener("keydown", () => {
  let valor = inputSoma.value;
  let x = event.key;

  let regexSoma = /([ABD-Zabd-z])/g;
  let resultadoSoma = null;

  if (inputSoma.value == "") {
    if (x == "Enter") {
      inputSoma.value = "0";
    }
    if (x != "Enter") {
      return;
    }
  }

  while (resultadoSoma = regexSoma.exec(valor)) {
    console.debug(resultadoSoma);
    console.debug(regexSoma.lastIndex);

    realizaAviso();
  }

  if (x == "+") {
    if (valor == "") {
      valor = 0;
    }
    valoresSomaParciais.push(parseFloat(valor));
    displayResultadosParciais.textContent = "Parciais ➡ " + `${parseFloat(valor)}`;
    inputSoma.value = "";
    inputSoma.focus();
    setTimeout(() => {
      inputSoma.value = "";
    }, 300);
  }
  if (x == "Enter") {
    if (valor == "") {
      valor = 0;
    }
    covencionais.soma(valoresSomaParciais, 'coven_p_soma');
    valoresSomaParciais = [];
    inputSoma.focus();
    setTimeout(() => {
      displayResultados.textContent = "Resultado ➡ 0";
    }, 12500);
    setTimeout(() => {
      displayResultadosParciais.textContent = "Parciais ➡ 0";
    }, 12000);
  }
  if (x == "C") {
    if (valor == "") {
      valor = 0;
    }
    inputSoma.value = "";
    valoresSomaParciais = [];
    inputSoma.focus();
    setTimeout(() => {
      displayResultados.textContent = "Resultado ➡ 0";
    }, 100);
    setTimeout(() => {
      displayResultadosParciais.textContent = "Parciais ➡ 0";
    }, 100);
    setTimeout(() => {
      inputSoma.value = "";
    }, 300);
  }
  if (x == "c") {
    if (valor == "") {
      valor = 0;
    }
    inputSoma.value = "";
    valoresSomaParciais = [];
    inputSoma.focus();
    setTimeout(() => {
      displayResultados.textContent = "Resultado ➡ 0";
    }, 100);
    setTimeout(() => {
      displayResultadosParciais.textContent = "Parciais ➡ 0";
    }, 100);
    setTimeout(() => {
      inputSoma.value = "";
    }, 300);
  }
});

botaoSomar.addEventListener("click", () => {
  let valor = inputSoma.value;
  valoresSomaParciais.push(parseFloat(valor));
  displayResultadosParciais.textContent = "Parciais ➡ " + `${parseFloat(valor)}`;
  inputSoma.focus();
  inputSoma.value = "";
});

botaoFinalizarSoma.addEventListener("click", () => {
  covencionais.soma(valoresSomaParciais, 'coven_p_soma');
  valoresSomaParciais = [];
  inputSoma.focus();
  setTimeout(() => {
    displayResultados.textContent = "Resultado ➡ 0";
  }, 12500);
  setTimeout(() => {
    displayResultadosParciais.textContent = "Parciais ➡ 0";
  }, 12000);
});

botaoLimparSoma.addEventListener("click", () => {
  inputSoma.value = "";
  valoresSomaParciais = [];
  inputSoma.focus();
  setTimeout(() => {
    displayResultados.textContent = "Resultado ➡ 0";
  }, 100);
  setTimeout(() => {
    displayResultadosParciais.textContent = "Parciais ➡ 0";
  }, 100);
});
