/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var valor = 40;

var numeroBinario = "";

if(valor == 0) {
  numeroBinario = "0" + numeroBinario;
}

if (valor == 3) {
  numeroBinario = "1" + numeroBinario;
}

while(valor > 2) {
  valor = valor / 2;

  if (Number.isInteger(valor) == true) {
    numeroBinario = "0" + numeroBinario;
  }

  if (Number.isInteger(valor) == false) {
    numeroBinario = "1" + numeroBinario;
    valor = parseInt(valor);
  }

  if (valor == 3) {
    numeroBinario = "1" + numeroBinario;
  }

  if (valor == 2) {
    numeroBinario = "10" + numeroBinario;
  }
}
