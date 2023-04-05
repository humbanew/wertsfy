/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valorString = "10100";

var divisor = [];

var verifCom4 = valorString.length / 4;

var verifCom5 = valorString.length / 5;

if(Number.isInteger(verifCom5) == true) {
  valorString = "0" + valorString;
}

if(Number.isInteger(verifCom4) == true) {
  valorString = "00" + valorString;
}

var separador = valorString.length / 3;

var repetidor = 1;
var e = 1;
var f = 2;

while(repetidor < separador+1) {
  let posicaoInicial = 0;
  let incremento = 3;

  if(repetidor == 1) {
    divisor.push(valorString.slice(posicaoInicial, incremento));
    repetidor++;
  }

  if(repetidor > 1) {
    divisor.push(valorString.slice(incremento*e, incremento*f));
    e++;
    f++;
    repetidor++;
  }
}

var numeroOctal = "";

for(let u = 0; u < divisor.length; u++) {
  if(divisor[u] == "000") {
    numeroOctal = numeroOctal + "0";
  }

  if(divisor[u] == "001") {
    numeroOctal = numeroOctal + "1";
  }

  if(divisor[u] == "010") {
    numeroOctal = numeroOctal + "2";
  }

  if(divisor[u] == "011") {
    numeroOctal = numeroOctal + "3";
  }

  if(divisor[u] == "100") {
    numeroOctal = numeroOctal + "4";
  }

  if(divisor[u] == "101") {
    numeroOctal = numeroOctal + "5";
  }

  if(divisor[u] == "110") {
    numeroOctal = numeroOctal + "6";
  }

  if(divisor[u] == "111") {
    numeroOctal = numeroOctal + "7";
  }
}
