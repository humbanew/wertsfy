/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var covencionais = new Covencionais();
var montadorPagina = new Montador();
let dynamicMultiplicacao = new Dinamicador();

function realizaAviso() {
  dynamicMultiplicacao.dynamicSpanStyleColor(spanNotificaçõesMultiplicacao);
  spanNotificaçõesMultiplicacao.textContent = "AVISO: Proibido colocar letras que não sejam comandos válidos. Cuidado!";
  setTimeout(() => { spanNotificaçõesMultiplicacao.textContent = "Como usar ▶ Comandos do Teclado: Valores Iniciais ➡ 'S' ou 's' | Multiplicar ➡ '*' | Finalizar ➡ 'Enter' | Limpar ➡ 'C' ou 'c' ou os Botões. Adicione os valores um de cada vez."; spanNotificaçõesMultiplicacao.style.backgroundColor = "#0066ff"; }, 10000);
}

/* 
 * Funcionalidade de Multiplicação
 */

montadorPagina.interligaBody(
  montadorPagina.montaElemento("section", "covencionais_multiplicacao", "covencionais_multiplicacao"));

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "botao_retorno", "botao_retorno__multiplicacao", "Voltar à página anterior"), "covencionais_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("h2", "covencionais_titulo", "coven_func__titulo", "Funcionalidade de Multiplicação"), "covencionais_multiplicacao");

const mensagemInfomultiplicacao = "Como usar ▶ Comandos do Teclado: Multiplicar ➡ '*' | Finalizar ➡ 'Enter' | Limpar ➡ 'C' ou 'c' ou os Botões. Adicione os valores um de cada vez.";

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("span", "covencionais_span", "coven_func_span__multiplicacao", mensagemInfomultiplicacao), "covencionais_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("div", "covencionais_div", "coven_card_multiplicacao"), "covencionais_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("input", "covencionais_input", "coven_input_multip", "", "text", "Insira aqui os valores"), "coven_card_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_multiplicar", "Multiplicar"), "coven_card_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_finalizar_multip", "Finalizar"), "coven_card_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_limpar_multip", "Limpar"), "coven_card_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("p", "covencionais_paragraph__parciais", "coven_p_s_parciais_multip", "Parciais ➡ 0"), "coven_card_multiplicacao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("p", "covencionais_paragraph", "coven_p_multiplicacao", "Resultado ➡ 0"), "coven_card_multiplicacao");

/* 
 * Lógica de Funcionamento da Multiplicação 
 */

let botaoMultiplicar = document.getElementById("coven_btn_multiplicar");
let botaoFinalizarMultiplicacao = document.getElementById("coven_btn_finalizar_multip");
let botaoLimparMultiplicacao = document.getElementById("coven_btn_limpar_multip");
let displayResultados2 = document.getElementById("coven_p_multiplicacao");
let displayResultadosParciais2 = document.getElementById("coven_p_s_parciais_multip");

let spanNotificaçõesMultiplicacao = document.getElementById("coven_func_span__multiplicacao");

let inputMultiplicacao = document.getElementById("coven_input_multip");
inputMultiplicacao.value = "0";
let valoresMultiplicacaoParciais = [];

inputMultiplicacao.addEventListener("keydown", ()=>{
  let valor = inputMultiplicacao.value;
  let x = event.key;

  let regexMultiplicacao = /([ABD-Zabd-z])/g;
  let resultadoMultiplicacao = null;

  if (inputMultiplicacao.value == "") {
    if (x == "Enter") {
      inputMultiplicacao.value = "0";
    }
    if (x != "Enter") {
      return;
    }
  }

  while (resultadoMultiplicacao = regexMultiplicacao.exec(valor)) {
    console.debug(resultadoMultiplicacao);
    console.debug(regexMultiplicacao.lastIndex);

    realizaAviso();
  }

  if (x == "*") {
    if (valor == "") {
      valor = 0;
    }
    valoresMultiplicacaoParciais.push(parseFloat(valor));
    displayResultadosParciais2.textContent = "Parciais ➡ " + `${parseFloat(valor)}`;
    inputMultiplicacao.value = "";
    inputMultiplicacao.focus();
    setTimeout(() => {
      inputMultiplicacao.value = "";
    }, 300);
  }

});
