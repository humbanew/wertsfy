/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

class Covencionais {

  soma(valorDaSoma=[0], ondeImprimirid=""){
    let total = 0.0;
    for(let y = 0; y < valorDaSoma.length; y++){
      total = total + valorDaSoma[y];}
    let elementoImpressao = document.getElementById(ondeImprimirid);
    elementoImpressao.textContent = "Resultado ➡ " + Math.round(total * 100000000) / 100000000;
    return elementoImpressao.textContent;
  }

  subtracao(valorTotal=[0], valorSubtraido=[0], ondeImprimirId=""){
    let total = 0.0;
    let total1 = 0.0;
    for (let i = 0; i < valorTotal.length; i++) {total = total + valorTotal[i];}
    for (let i = 0; i < valorSubtraido.length; i++) {total1 = total1 + valorSubtraido[i];}
    let elementoImpressao = document.getElementById(ondeImprimirId);
    elementoImpressao.textContent = "Resultado ➡ " + Math.round((total - total1) * 100000000) / 100000000;
    return elementoImpressao.textContent;
  }

  multiplicacao(valorMultiplicado=[0], ondeImprimirId=""){
    let total = 1.0;
    for (let i = 0; i < valorMultiplicado.length; i++) {
      total = total * valorMultiplicado[i]; Math.round(total);}
    let elementoImpressao = document.getElementById(ondeImprimirId);
    elementoImpressao.textContent = "Resultado ➡ " + Math.round(total * 100000000) / 100000000;
    return elementoImpressao.textContent;
  }

  divisao(valorTotal=[0], valorDividido=[0]){
    let total = 0;
    let total1 = 0;
    for (let i = 0; i < valorTotal.length; i++) {total = total + valorTotal[i];}
    for (let j = 0; j < valorDividido.length; j++) {total1 = total1 + valorDividido[j];
      if (valorDividido[j] == 0) {return 0;}
      if (valorDividido[j] == 0.0) {return 0.0;}}
    let totalp = Math.round((total / total1) * 100000000) / 100000000; return totalp;
  }

  potencia(valorBase=[0], valorExpoente=[0]){
    let total = 0;
    let total1 = 0;
    for (let i = 0; i < valorBase.length; i++) {total = total + valorBase[i];}
    for (let r = 0; r < valorExpoente.length; r++) {total1 = total1 + valorExpoente[r];}
    let totalp = Math.round(Math.pow(total, total1) * 100000000) / 100000000; return totalp;
  }

  potenciaDePotencia(valorBase=[0], valorExpoenteInferior=[0], valorExpoenteSuperior=[0]){
    let total = 0;
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    for (let i = 0; i < valorBase.length; i++) {total = total + valorBase[i]; Math.round(total);}
    for (let i = 0; i < valorExpoenteInferior.length; i++) {total1 = total1 + valorExpoenteInferior[i]; Math.round(total1);}
    for (let i = 0; i < valorExpoenteSuperior.length; i++) {total2 = total2 + valorExpoenteSuperior[i]; Math.round(total2);}
    total3 = total1 * total2;
    let totalp = Math.round(Math.pow(total, total3) * 100000000) / 100000000; return totalp;
  }

  raizQuadrada(valorDaRaizQuadrada=[0]){
    let total = 0;
    for (let i = 0; i < valorDaRaizQuadrada.length; i++) {total = total + valorDaRaizQuadrada[i];}
    let totalp = Math.round(Math.sqrt(total) * 100000000) / 100000000; return totalp;
  }

  raizCubica(valorDaRaizCubica=[0]){
    let total = 0;
    for (let i = 0; i < valorDaRaizCubica.length; i++) {total = total + valorDaRaizCubica[i];}
    let totalp = Math.round(Math.cbrt(total) * 100000000) / 100000000; return totalp;
  }

  raizBiquadrada(valorDaRaizBiquadrada=[0]){
    let total = 0;
    for (let i = 0; i < valorDaRaizBiquadrada.length; i++) {total = total + valorDaRaizBiquadrada[i];}
    let totalp = Math.round(Math.sqrt(Math.sqrt(total)) * 100000000) / 100000000; return totalp;
  }

  raizBicubica(valorDaRaizBicubica=[0]){
    let total = 0;
    for (let i = 0; i < valorDaRaizBicubica.length; i++) {total = total + valorDaRaizBicubica[i];}
    let totalp = Math.round(Math.cbrt(Math.cbrt(total)) * 100000000) / 100000000; return totalp;
  }
}
