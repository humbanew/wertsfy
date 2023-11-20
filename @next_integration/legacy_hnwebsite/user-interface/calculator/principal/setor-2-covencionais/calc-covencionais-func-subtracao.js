/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var covencionais = new Covencionais();
var montadorPagina = new Montador();
let dynamicSubtracao = new Dinamicador();

function realizaAviso(){
  dynamicSubtracao.dynamicSpanStyleColor(spanNotificaçõesSubtracao);
  spanNotificaçõesSubtracao.textContent = "AVISO: Proibido colocar letras que não sejam comandos válidos. Cuidado!";
  setTimeout(() => { spanNotificaçõesSubtracao.textContent = "Como usar ▶ Comandos do Teclado: Valores Iniciais ➡ 'S' ou 's' | Subtrair ➡ '-' | Finalizar ➡ 'Enter' | Limpar ➡ 'C' ou 'c' ou os Botões. Adicione os valores um de cada vez."; spanNotificaçõesSubtracao.style.backgroundColor ="#0066ff";}, 10000);
}

/*
 * Funcionalidade de Subtração
 */

montadorPagina.interligaBody(
  montadorPagina.montaElemento("section", "covencionais_subtracao", "covencionais_subtracao"));

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "botao_retorno", "botao_retorno__subtracao", "Voltar à página anterior"), "covencionais_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("h2", "covencionais_titulo", "coven_func__titulo", "Funcionalidade de Subtração"), "covencionais_subtracao");

const mensagemInfoSubtracao = "Como usar ▶ Comandos do Teclado: Valores Iniciais ➡ 'S' ou 's' | Subtrair ➡ '-' | Finalizar ➡ 'Enter' | Limpar ➡ 'C' ou 'c' ou os Botões. Adicione os valores um de cada vez.";

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("span", "covencionais_span", "coven_func_span__subtracao", mensagemInfoSubtracao), "covencionais_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("div", "covencionais_div", "coven_card_subtracao"), "covencionais_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("input", "covencionais_input", "coven_input_s_sub", "", "text", "Insira aqui os valores"), "coven_card_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_v_inicial", "Valor Inicial"), "coven_card_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_subtrair", "Subtrair"), "coven_card_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_finalizar_sub", "Finalizar"), "coven_card_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("button", "covencionais_botao__uso", "coven_btn_limpar_sub", "Limpar"), "coven_card_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("p", "covencionais_paragraph__parciais", "coven_p_s_parciais_sub", "Parciais ➡ 0"), "coven_card_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("p", "covencionais_paragraph__restantes", "coven_p_s_restantes_sub", "Valores Iniciais ➡ 0"), "coven_card_subtracao");

montadorPagina.interligaElementos(
  montadorPagina.montaElemento("p", "covencionais_paragraph", "coven_p_sub", "Resultado ➡ 0"), "coven_card_subtracao");

/*
 * Lógica de Funcionamento da Subtração
 */

let botaoValorInicial = document.getElementById("coven_btn_v_inicial");
let botaoSubtrair = document.getElementById("coven_btn_subtrair");
let botaoFinalizarSubtracao = document.getElementById("coven_btn_finalizar_sub");
let botaoLimparSubtracao = document.getElementById("coven_btn_limpar_sub");
let displayResultados1 = document.getElementById("coven_p_sub");
let displayResultadosParciais1 = document.getElementById("coven_p_s_parciais_sub");
let displayResultadosRestantes = document.getElementById("coven_p_s_restantes_sub");

let spanNotificaçõesSubtracao = document.getElementById("coven_func_span__subtracao");

let inputSubtracao = document.getElementById("coven_input_s_sub");
inputSubtracao.value = "0";
let valoresSubtracaoParciais = [];
let valoresSubtracaoTotais = [];

inputSubtracao.addEventListener("keydown", () => {
  let x = event.key;
  let valor = inputSubtracao.value;

  let regexSubtracao = /([ABD-RT-Zabd-rt-z])/g;
  let resultadoSubtracao = null;

  if (inputSubtracao.value == "") {
    if (x == "Enter") {
      inputSubtracao.value = "0";
    }
    if (x != "Enter") {
      return;
    }
  }

  while (resultadoSubtracao = regexSubtracao.exec(valor)) {
    console.debug(resultadoSubtracao);
    console.debug(regexSubtracao.lastIndex);

    realizaAviso();
  }

  if (x == "S") {
    if (valor == "") {
      valor = 0;
    }
    valoresSubtracaoTotais.push(parseFloat(valor));
    displayResultadosRestantes.textContent = "Valores Iniciais ➡ " + `${parseFloat(valor)}`;
    inputSubtracao.value = "";
    inputSubtracao.focus();
    setTimeout(() => { inputSubtracao.value = ""; }, 300);
  }
  if (x == "s") {
    if (valor == "") {
      valor = 0;
    }
    valoresSubtracaoTotais.push(parseFloat(valor));
    displayResultadosRestantes.textContent = "Valores Iniciais ➡ " + `${parseFloat(valor)}`;
    inputSubtracao.value = "";
    inputSubtracao.focus();
    setTimeout(() => { inputSubtracao.value = ""; }, 300);
  }
  if (x == "-") {
    if (valor == "") {
      valor = 0;
    }
    valoresSubtracaoParciais.push(parseFloat(valor));
    displayResultadosParciais1.textContent = "Parciais ➡ " + `${parseFloat(valor)}`;
    inputSubtracao.value = "";
    inputSubtracao.focus();
    setTimeout(() => { inputSubtracao.value = ""; }, 300);
  }
  if (x == "Enter") {
    if (valor == "") {
      valor = 0;
    }
    covencionais.subtracao(valoresSubtracaoTotais, valoresSubtracaoParciais, 'coven_p_sub');
    valoresSubtracaoParciais = [];
    valoresSubtracaoTotais = [];
    inputSubtracao.focus();
    setTimeout(() => { displayResultados1.textContent = "Resultado ➡ 0"; }, 12500);
    setTimeout(() => { displayResultadosParciais1.textContent = "Parciais ➡ 0"; }, 12000);
    setTimeout(() => { displayResultadosRestantes.textContent = "Valores Iniciais ➡ 0"; }, 13000);
  }
  if (x == "C") {
    if (valor == "") {
      valor = 0;
    }
    inputSubtracao.value = "";
    valoresSubtracaoParciais = [];
    valoresSubtracaoTotais = [];
    inputSubtracao.focus();
    setTimeout(() => { displayResultados1.textContent = "Resultado ➡ 0"; }, 100);
    setTimeout(() => { displayResultadosParciais1.textContent = "Parciais ➡ 0"; }, 100);
    setTimeout(() => { displayResultadosRestantes.textContent = "Valores Iniciais ➡ 0"; }, 100);
    setTimeout(() => { inputSoma.value = ""; }, 300);
  }
  if (x == "c") {
    if (valor == "") {
      valor = 0;
    }
    inputSubtracao.value = "";
    valoresSubtracaoParciais = [];
    valoresSubtracaoTotais = [];
    inputSubtracao.focus();
    setTimeout(() => { displayResultados1.textContent = "Resultado ➡ 0"; }, 100);
    setTimeout(() => { displayResultadosParciais1.textContent = "Parciais ➡ 0"; }, 100);
    setTimeout(() => { displayResultadosRestantes.textContent = "Valores Iniciais ➡ 0"; }, 100);
    setTimeout(() => { inputSoma.value = ""; }, 300);
  }
});

botaoValorInicial.addEventListener("click", () => {
  let valor = inputSubtracao.value;
  if (valor == "") {
    valor = 0;
  }
  valoresSubtracaoTotais.push(parseFloat(valor));
  displayResultadosRestantes.textContent = "Valores Iniciais ➡ " + `${parseFloat(valor)}`;
  inputSubtracao.value = "";
  inputSubtracao.focus();
});

botaoSubtrair.addEventListener("click", () => {
  let valor = inputSubtracao.value;
  if (valor == "") {
    valor = 0;
  }
  valoresSubtracaoParciais.push(parseFloat(valor));
  displayResultadosParciais1.textContent = "Parciais ➡ " + `${parseFloat(valor)}`;
  inputSubtracao.value = "";
  inputSubtracao.focus();
});

botaoFinalizarSubtracao.addEventListener("click", () => {
  covencionais.subtracao(valoresSubtracaoTotais, valoresSubtracaoParciais, 'coven_p_sub');
  valoresSubtracaoParciais = [];
  valoresSubtracaoTotais = [];
  inputSubtracao.focus();
  setTimeout(() => { displayResultados1.textContent = "Resultado ➡ 0"; }, 12500);
  setTimeout(() => { displayResultadosParciais1.textContent = "Parciais ➡ 0"; }, 12000);
  setTimeout(() => { displayResultadosRestantes.textContent = "Valores Iniciais ➡ 0"; }, 13000);
});

botaoLimparSubtracao.addEventListener("click", () => {
  inputSubtracao.value = "";
  valoresSubtracaoParciais = [];
  valoresSubtracaoTotais = [];
  inputSubtracao.focus();
  setTimeout(() => { displayResultados1.textContent = "Resultado ➡ 0"; }, 100);
  setTimeout(() => { displayResultadosParciais1.textContent = "Parciais ➡ 0"; }, 100);
  setTimeout(() => { displayResultadosRestantes.textContent = "Valores Iniciais ➡ 0"; }, 100);
});
