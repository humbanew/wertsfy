/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valorString = "111100";

var divisor = [];

var verifCom5 = valorString.length / 5;

var verifCom6 = valorString.length / 6;

var verifCom7 = valorString.length / 7;

if (Number.isInteger(verifCom7) == true) {
  valorString = "0" + valorString;
}

if (Number.isInteger(verifCom6) == true) {
  valorString = "00" + valorString;
}

if (Number.isInteger(verifCom5) == true) {
  valorString = "000" + valorString;
}

var separador = valorString.length / 4;

var repetidor = 1;
var e = 1;
var f = 2;

while (repetidor < separador + 1) {
  let posicaoInicial = 0;
  let incremento = 4;

  if (repetidor == 1) {
    divisor.push(valorString.slice(posicaoInicial, incremento));
    repetidor++;
  }

  if (repetidor > 1) {
    divisor.push(valorString.slice(incremento * e, incremento * f));
    e++;
    f++;
    repetidor++;
  }
}

var numeroHexadecimal = "";

for (let u = 0; u < divisor.length; u++) {
  if (divisor[u] == "0000") {
    numeroHexadecimal = numeroHexadecimal + "0";
  }

  if (divisor[u] == "0001") {
    numeroHexadecimal = numeroHexadecimal + "1";
  }

  if (divisor[u] == "0010") {
    numeroHexadecimal = numeroHexadecimal + "2";
  }

  if (divisor[u] == "0011") {
    numeroHexadecimal = numeroHexadecimal + "3";
  }

  if (divisor[u] == "0100") {
    numeroHexadecimal = numeroHexadecimal + "4";
  }

  if (divisor[u] == "0101") {
    numeroHexadecimal = numeroHexadecimal + "5";
  }

  if (divisor[u] == "0110") {
    numeroHexadecimal = numeroHexadecimal + "6";
  }

  if (divisor[u] == "0111") {
    numeroHexadecimal = numeroHexadecimal + "7";
  }

  if (divisor[u] == "1000") {
    numeroHexadecimal = numeroHexadecimal + "8";
  }

  if (divisor[u] == "1001") {
    numeroHexadecimal = numeroHexadecimal + "9";
  }

  if (divisor[u] == "1010") {
    numeroHexadecimal = numeroHexadecimal + "A";
  }

  if (divisor[u] == "1011") {
    numeroHexadecimal = numeroHexadecimal + "B";
  }

  if (divisor[u] == "1100") {
    numeroHexadecimal = numeroHexadecimal + "C";
  }

  if (divisor[u] == "1101") {
    numeroHexadecimal = numeroHexadecimal + "D";
  }

  if (divisor[u] == "1110") {
    numeroHexadecimal = numeroHexadecimal + "E";
  }

  if (divisor[u] == "1111") {
    numeroHexadecimal = numeroHexadecimal + "F";
  }
}
