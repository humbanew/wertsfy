/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valorBinario = "";

var valorString = "767";

var divisor = valorString.split("", valorString.length);

for (let y = 0; y < divisor.length; y++) {
  divisor[y] = parseInt(divisor[y]);

  if(divisor[y] == 0) {
    divisor[y] = "000";
    valorBinario = "000" + valorBinario;
  }
  if(divisor[y] == 1) {
    divisor[y] = "001";
    valorBinario = "001" + valorBinario;
  }
  if(divisor[y] == 2) {
    divisor[y] = "010";
    valorBinario = "010" + valorBinario;
  }
  if(divisor[y] == 3) {
    divisor[y] = "011";
    valorBinario = "011" + valorBinario;
  }
  if(divisor[y] == 4) {
    divisor[y] = "100";
    valorBinario = "100" + valorBinario;
  }
  if(divisor[y] == 5) {
    divisor[y] = "101";
    valorBinario = "101" + valorBinario;
  }
  if(divisor[y] == 6) {
    divisor[y] = "110";
    valorBinario = "110" + valorBinario;
  }
  if(divisor[y] == 7) {
    divisor[y] = "111";
    valorBinario = "111" + valorBinario;
  }
}
