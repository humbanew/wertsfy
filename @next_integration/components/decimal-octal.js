/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valor = 20;

var numeroOctal = "";

var achaResto;

var resto;

while(valor > 1) {
  valor = valor / 8;

  achaResto = parseInt(valor) * 8;

  resto = (valor * 8) - achaResto;

  if (Number.isInteger(valor) == true) {
    numeroOctal = "0" + numeroOctal;
  }

  if (Number.isInteger(valor) == false) {
    numeroOctal = parseInt(resto) + numeroOctal;
  }
}
