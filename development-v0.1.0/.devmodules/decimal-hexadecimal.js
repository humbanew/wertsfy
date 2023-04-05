/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valor = 20;

var numeroHexadecimal = "";

var achaResto;

var resto;

while (valor > 1) {
  valor = valor / 16;

  achaResto = parseInt(valor) * 16;

  resto = (valor * 16) - achaResto;

  if (Number.isInteger(valor) == true) {
    numeroHexadecimal = "0" + numeroHexadecimal;
  }

  if (Number.isInteger(valor) == false) {
    resto = parseInt(resto);

    if(resto < 9) {
    numeroHexadecimal = resto + numeroHexadecimal;
    }

    if(resto > 9) {
      if(resto == 10) {
        numeroHexadecimal = "A" + numeroHexadecimal;
      }
      if(resto == 11) {
        numeroHexadecimal = "B" + numeroHexadecimal;
      }
      if(resto == 12) {
        numeroHexadecimal = "C" + numeroHexadecimal;
      }
      if(resto == 13) {
        numeroHexadecimal = "D" + numeroHexadecimal;
      }
      if(resto == 14) {
        numeroHexadecimal = "E" + numeroHexadecimal;
      }
      if(resto == 15) {
        numeroHexadecimal = "F" + numeroHexadecimal;
      }
    }
  }
}
