/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valorDecimal = 0;

var valorString = "767DDDF15";

var divisor = valorString.split("", valorString.length);

for (let y = 0; y < divisor.length; y++) {
  if (divisor[y] == "A") {
    divisor[y] = "10";
  }
  if (divisor[y] == "B") {
    divisor[y] = "11";
  }
  if (divisor[y] == "C") {
    divisor[y] = "12";
  }
  if (divisor[y] == "D") {
    divisor[y] = "13";
  }
  if (divisor[y] == "E") {
    divisor[y] = "14";
  }
  if (divisor[y] == "F") {
    divisor[y] = "15";
  }
}

for (let y = 0; y < divisor.length; y++) {
  divisor[y] = parseInt(divisor[y]);
}

for (let i = 0, u = divisor.length - 1; i < divisor.length; i++, u--) {
  if (u < 0) {
    break;
  }
  valorDecimal = parseInt(divisor[i]) * 16 ** u + valorDecimal;
}