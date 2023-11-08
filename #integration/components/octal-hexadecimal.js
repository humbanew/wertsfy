/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valorHexadecimal = 0;

var valorString = "767";

var divisor = valorString.split("", valorString.length);

for (let y = 0; y < divisor.length; y++) {
  divisor[y] = parseInt(divisor[y]);
}

for (let i = 0, u = divisor.length - 1; i < divisor.length; i++, u--) {
  if (u < 0) {
    break;
  }
  valorDecimal = parseInt(divisor[i]) * 8 ** u + valorDecimal;
}