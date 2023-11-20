/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

class ConverTechComp{

  converBinarioDecimal(_valorEmBinario=""){
    let valorDecimal = 0;

    let divisor = _valorEmBinario.split("", _valorEmBinario.length);

    for (let y = 0; y < divisor.length; y++) {
      divisor[y] = parseInt(divisor[y]);
    }

    for (let i = 0, u = divisor.length - 1; i < divisor.length; i++, u--) {
      if (u < 0) {
        break;
      }
      valorDecimal = parseInt(divisor[i]) * 2 ** u + valorDecimal;
    }
  }

  converBinarioHexadecimal(_valorEmBinario=""){
    let divisor = [];
    let verifCom5 = _valorEmBinario.length / 5;
    let verifCom6 = _valorEmBinario.length / 6;
    let verifCom7 = _valorEmBinario.length / 7;

    if (Number.isInteger(verifCom7) == true) {
      _valorEmBinario = "0" + _valorEmBinario;
    }
    if (Number.isInteger(verifCom6) == true) {
      _valorEmBinario = "00" + _valorEmBinario;
    }
    if (Number.isInteger(verifCom5) == true) {
      _valorEmBinario = "000" + _valorEmBinario;
    }

    let separador = _valorEmBinario.length / 4;
    let repetidor = 1;
    let e = 1;
    let f = 2;

    while (repetidor < separador + 1) {
      let posicaoInicial = 0;
      let incremento = 4;
      if (repetidor == 1) {
        divisor.push(_valorEmBinario.slice(posicaoInicial, incremento));
        repetidor++;
      }
      if (repetidor > 1) {
        divisor.push(_valorEmBinario.slice(incremento * e, incremento * f));
        e++;
        f++;
        repetidor++;
      }
    }

    let numeroHexadecimal = "";

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
  }

  converBinarioOctal(_valorEmBinario=""){
    let divisor = [];

    let verifCom4 = _valorEmBinario.length / 4;

    let verifCom5 = _valorEmBinario.length / 5;

    if (Number.isInteger(verifCom5) == true) {
      _valorEmBinario = "0" + _valorEmBinario;
    }

    if (Number.isInteger(verifCom4) == true) {
      _valorEmBinario = "00" + _valorEmBinario;
    }

    let separador = _valorEmBinario.length / 3;

    let repetidor = 1;
    let e = 1;
    let f = 2;

    while (repetidor < separador + 1) {
      let posicaoInicial = 0;
      let incremento = 3;

      if (repetidor == 1) {
        divisor.push(_valorEmBinario.slice(posicaoInicial, incremento));
        repetidor++;
      }

      if (repetidor > 1) {
        divisor.push(_valorEmBinario.slice(incremento * e, incremento * f));
        e++;
        f++;
        repetidor++;
      }
    }

    let numeroOctal = "";

    for (let u = 0; u < divisor.length; u++) {
      if (divisor[u] == "000") {
        numeroOctal = numeroOctal + "0";
      }

      if (divisor[u] == "001") {
        numeroOctal = numeroOctal + "1";
      }

      if (divisor[u] == "010") {
        numeroOctal = numeroOctal + "2";
      }

      if (divisor[u] == "011") {
        numeroOctal = numeroOctal + "3";
      }

      if (divisor[u] == "100") {
        numeroOctal = numeroOctal + "4";
      }

      if (divisor[u] == "101") {
        numeroOctal = numeroOctal + "5";
      }

      if (divisor[u] == "110") {
        numeroOctal = numeroOctal + "6";
      }

      if (divisor[u] == "111") {
        numeroOctal = numeroOctal + "7";
      }
    }
  }

  converDecimalBinario(_valorEmDecimal=0){
    var numeroBinario = "";

    if (_valorEmDecimal == 0) {
      numeroBinario = "0" + numeroBinario;
    }

    if (_valorEmDecimal == 3) {
      numeroBinario = "1" + numeroBinario;
    }

    while (_valorEmDecimal > 2) {
      _valorEmDecimal = _valorEmDecimal / 2;

      if (Number.isInteger(_valorEmDecimal) == true) {
        numeroBinario = "0" + numeroBinario;
      }

      if (Number.isInteger(_valorEmDecimal) == false) {
        numeroBinario = "1" + numeroBinario;
        _valorEmDecimal = parseInt(_valorEmDecimal);
      }

      if (_valorEmDecimal == 3) {
        numeroBinario = "1" + numeroBinario;
      }

      if (_valorEmDecimal == 2) {
        numeroBinario = "10" + numeroBinario;
      }
    }
  }

  converDecimalHexadecimal(){}

  converDecimalOctal(){}

  converOctalBinario(){}

  converOctalDecimal(){}

  converOctalHexadecimal(){}

  converHexadecimalDecimal(){}

  converHexadecimalOctal(){}

  converHexadecimalBinario(){}

}