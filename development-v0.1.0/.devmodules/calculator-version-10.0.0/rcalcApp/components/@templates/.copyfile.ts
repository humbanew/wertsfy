
// // Conversores de Bases
// convBasesTechnoNumericos(valor = typeof ("" || 0), input = 0, output = 0) {

//   function formulaBinarioDecimal(valor = '') {
//     let resultado = 0, numBinarioDesm = [], verificacao = /[2-9]/g;

//     if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
//       return console.error("O valor inserido não condiz com um valor de base binária!");
//     }

//     for (let a = 0, srt = 0, fnl = 1; a < valor.length; a++, srt++, fnl++) { numBinarioDesm.push(valor.slice(srt, fnl)); }

//     for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
//       numBinarioDesm[a] = numBinarioDesm[a] * 2 ** b;
//       resultado = resultado + numBinarioDesm[a];
//     }

//     return resultado;
//   }

//   function formulaBinarioOctadecimal(valor = '') {
//     let resultado = 0, numBinarioDesm = [], verificacao = /[2-9]/g, verificacaoResultado = /[8-9]/g;

//     if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
//       return console.error("O valor inserido não condiz com um valor de base binária!");
//     }

//     for (let a = 0, srt = 0, fnl = 1; a < valor.length; a++, srt++, fnl++) { numBinarioDesm.push(valor.slice(srt, fnl)); }

//     for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
//       numBinarioDesm[a] = numBinarioDesm[a] * 2 ** b;
//       resultado = resultado + numBinarioDesm[a];
//     }

//     let analise = verificacaoResultado.exec(resultado.toString());

//     if (analise == null) { resultado = resultado; }

//     if (analise == '8') { resultado = resultado + 1; }

//     if (analise == '9') { resultado = resultado + 2; }

//     return resultado;
//   }

//   function formulaBinarioHexadecimal(valor = '') {
//     let resultado = '', verificacao = /[2-9]/g;

//     if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
//       return console.error("O valor inserido não condiz com um valor de base binária!");
//     }

//     if (valor == '0') { resultado = resultado + '0'; }
//     if (valor == '1') { resultado = resultado + '1'; }
//     if (valor == '00') { resultado = resultado + '0'; }
//     if (valor == '01') { resultado = resultado + '1'; }
//     if (valor == '10') { resultado = resultado + '2'; }
//     if (valor == '11') { resultado = resultado + '3'; }
//     if (valor == '100') { resultado = resultado + '4'; }
//     if (valor == '101') { resultado = resultado + '5'; }
//     if (valor == '110') { resultado = resultado + '6'; }
//     if (valor == '111') { resultado = resultado + '7'; }

//     if (valor == '0000') { resultado = resultado + '0'; }
//     if (valor == '0001') { resultado = resultado + '1'; }
//     if (valor == '0010') { resultado = resultado + '2'; }
//     if (valor == '0011') { resultado = resultado + '3'; }
//     if (valor == '0100') { resultado = resultado + '4'; }
//     if (valor == '0101') { resultado = resultado + '5'; }
//     if (valor == '0110') { resultado = resultado + '6'; }
//     if (valor == '0111') { resultado = resultado + '7'; }
//     if (valor == '1000') { resultado = resultado + '8'; }
//     if (valor == '1001') { resultado = resultado + '9'; }
//     if (valor == '1010') { resultado = resultado + 'A'; }
//     if (valor == '1011') { resultado = resultado + 'B'; }
//     if (valor == '1100') { resultado = resultado + 'C'; }
//     if (valor == '1101') { resultado = resultado + 'D'; }
//     if (valor == '1110') { resultado = resultado + 'E'; }
//     if (valor == '1111') { resultado = resultado + 'F'; }

//     return resultado;
//   }

//   function formulaDecimalBinario(valor = 0) {
//     let resultado = '', numBinarioCons = [];

//     while (valor > 0) {
//       let resto = valor % 2; valor = valor / 2;

//       if (resto == 0) { numBinarioCons.push('0'); }
//       if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
//     }

//     for (let a = numBinarioCons.length; a > 0; a--) {
//       resultado = resultado + numBinarioCons[a - 1];
//     }

//     return resultado;
//   }

//   function formulaDecimalOctadecimal(valor = 0) {
//     let resultado = '', numBinarioCons = [];

//     while (valor > 0) {
//       let resto = valor % 8; valor = valor / 8;

//       if (resto == 0) { numBinarioCons.push('0'); }
//       if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
//       if (resto == 2) { numBinarioCons.push('2'); valor = parseInt(valor); }
//       if (resto == 3) { numBinarioCons.push('3'); valor = parseInt(valor); }
//       if (resto == 4) { numBinarioCons.push('4'); valor = parseInt(valor); }
//       if (resto == 5) { numBinarioCons.push('5'); valor = parseInt(valor); }
//       if (resto == 6) { numBinarioCons.push('6'); valor = parseInt(valor); }
//       if (resto == 7) { numBinarioCons.push('7'); valor = parseInt(valor); }
//     }

//     for (let a = numBinarioCons.length; a > 0; a--) {
//       resultado = resultado + numBinarioCons[a - 1];
//     }

//     return resultado;
//   }

//   function formulaDecimalHexadecimal(valor = 0) {
//     let resultado = '', numBinarioCons = [];

//     while (valor > 0) {
//       let resto = valor % 16; valor = valor / 16;

//       if (resto == 0) { numBinarioCons.push('0'); }
//       if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
//       if (resto == 2) { numBinarioCons.push('2'); valor = parseInt(valor); }
//       if (resto == 3) { numBinarioCons.push('3'); valor = parseInt(valor); }
//       if (resto == 4) { numBinarioCons.push('4'); valor = parseInt(valor); }
//       if (resto == 5) { numBinarioCons.push('5'); valor = parseInt(valor); }
//       if (resto == 6) { numBinarioCons.push('6'); valor = parseInt(valor); }
//       if (resto == 7) { numBinarioCons.push('7'); valor = parseInt(valor); }
//       if (resto == 8) { numBinarioCons.push('8'); valor = parseInt(valor); }
//       if (resto == 9) { numBinarioCons.push('9'); valor = parseInt(valor); }
//       if (resto == 10) { numBinarioCons.push('A'); valor = parseInt(valor); }
//       if (resto == 11) { numBinarioCons.push('B'); valor = parseInt(valor); }
//       if (resto == 12) { numBinarioCons.push('C'); valor = parseInt(valor); }
//       if (resto == 13) { numBinarioCons.push('D'); valor = parseInt(valor); }
//       if (resto == 14) { numBinarioCons.push('E'); valor = parseInt(valor); }
//       if (resto == 15) { numBinarioCons.push('F'); valor = parseInt(valor); }
//     }

//     for (let a = numBinarioCons.length; a > 0; a--) {
//       resultado = resultado + numBinarioCons[a - 1];
//     }

//     return resultado;
//   }

//   function formulaOctadecimalBinario(valor = 0) {
//     let resultado = '', numBinarioCons = [], verificacao = /[8-9]$/g;

//     let teste = verificacao.exec(valor);

//     if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

//     for (let a = 0; a < valor.toString().length; a++) {
//       numBinarioCons.push(valor.toString().slice(a, a + 1));

//       if (numBinarioCons[a] == '0') { resultado = resultado + '000'; }
//       if (numBinarioCons[a] == '1') { resultado = resultado + '001'; }
//       if (numBinarioCons[a] == '2') { resultado = resultado + '010'; }
//       if (numBinarioCons[a] == '3') { resultado = resultado + '011'; }
//       if (numBinarioCons[a] == '4') { resultado = resultado + '100'; }
//       if (numBinarioCons[a] == '5') { resultado = resultado + '101'; }
//       if (numBinarioCons[a] == '6') { resultado = resultado + '110'; }
//       if (numBinarioCons[a] == '7') { resultado = resultado + '111'; }

//     }

//     resultado = resultado.match(/[1]+([0-1]+)?/g).toString();

//     return resultado;
//   }

//   function formulaOctadecimalDecimal(valor = 0) {
//     let resultado = 0, numBinarioDesm = [], verificacao = /[8-9]$/g;

//     let teste = verificacao.exec(valor);

//     if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

//     for (let a = 0; a < valor.toString().length; a++) {
//       numBinarioDesm.push(valor.toString().slice(a, a + 1));
//     }

//     for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
//       numBinarioDesm[a] = numBinarioDesm[a] * 8 ** b;
//       resultado = resultado + numBinarioDesm[a];
//     }

//     return resultado;
//   }

//   function formulaOctadecimalHexadecimal(valor = 0) {
//     let resultado = '', numBinarioCons = [], passoIntermediario = [], passoIntermediarioResultado = '', passoFinal = [], verificacao = /[8-9]$/g;

//     let teste = verificacao.exec(valor);

//     if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

//     for (let a = 0; a < valor.toString().length; a++) {

//       numBinarioCons.push(valor.toString().slice(a, a + 1));

//       if (numBinarioCons[a] == '0') { passoIntermediario.push('000'); }
//       if (numBinarioCons[a] == '1') { passoIntermediario.push('001'); }
//       if (numBinarioCons[a] == '2') { passoIntermediario.push('010'); }
//       if (numBinarioCons[a] == '3') { passoIntermediario.push('011'); }
//       if (numBinarioCons[a] == '4') { passoIntermediario.push('100'); }
//       if (numBinarioCons[a] == '5') { passoIntermediario.push('101'); }
//       if (numBinarioCons[a] == '6') { passoIntermediario.push('110'); }
//       if (numBinarioCons[a] == '7') { passoIntermediario.push('111'); }

//       passoIntermediarioResultado = passoIntermediarioResultado + passoIntermediario[a];
//     }

//     passoIntermediarioResultado = passoIntermediarioResultado.match(/[1]+([0-1]+)?/g).toString();

//     let divHex = passoIntermediarioResultado.length / 4;
//     divHex = Math.round(divHex);

//     if (passoIntermediarioResultado.length == 1) { divHex = 1; }

//     for (let a = 0, b = 0, c = 4; a < divHex; a++, b = b + 4, c = c + 4) {
//       passoFinal.push(passoIntermediarioResultado.slice(b, c));
//     }

//     for (let a = 0; a < passoFinal.length; a++) {

//       if (passoFinal[a] == '0') { resultado = resultado + '0'; }
//       if (passoFinal[a] == '00') { resultado = resultado + '0'; }
//       if (passoFinal[a] == '000') { resultado = resultado + '0'; }
//       if (passoFinal[a] == '0000') { resultado = resultado + '0'; }

//       if (passoFinal[a] == '1') { resultado = resultado + '1'; }
//       if (passoFinal[a] == '01') { resultado = resultado + '1'; }
//       if (passoFinal[a] == '001') { resultado = resultado + '1'; }
//       if (passoFinal[a] == '0001') { resultado = resultado + '1'; }

//       if (passoFinal[a] == '10') { resultado = resultado + '2'; }
//       if (passoFinal[a] == '010') { resultado = resultado + '2'; }
//       if (passoFinal[a] == '0010') { resultado = resultado + '2'; }

//       if (passoFinal[a] == '11') { resultado = resultado + '3'; }
//       if (passoFinal[a] == '011') { resultado = resultado + '3'; }
//       if (passoFinal[a] == '0011') { resultado = resultado + '3'; }

//       if (passoFinal[a] == '100') { resultado = resultado + '4'; }
//       if (passoFinal[a] == '0100') { resultado = resultado + '4'; }

//       if (passoFinal[a] == '101') { resultado = resultado + '5'; }
//       if (passoFinal[a] == '0101') { resultado = resultado + '5'; }

//       if (passoFinal[a] == '110') { resultado = resultado + '6'; }
//       if (passoFinal[a] == '0110') { resultado = resultado + '6'; }

//       if (passoFinal[a] == '111') { resultado = resultado + '7'; }
//       if (passoFinal[a] == '0111') { resultado = resultado + '7'; }

//       if (passoFinal[a] == '1000') { resultado = resultado + '8'; }

//       if (passoFinal[a] == '1001') { resultado = resultado + '9'; }

//       if (passoFinal[a] == '1010') { resultado = resultado + 'A'; }

//       if (passoFinal[a] == '1011') { resultado = resultado + 'B'; }

//       if (passoFinal[a] == '1100') { resultado = resultado + 'C'; }

//       if (passoFinal[a] == '1101') { resultado = resultado + 'D'; }

//       if (passoFinal[a] == '1110') { resultado = resultado + 'E'; }

//       if (passoFinal[a] == '1111') { resultado = resultado + 'F'; }

//     }

//     return resultado;
//   }

//   function formulaHexadecimalBinario(valor = '') {
//     let resultado = '', numHexDesm = [], verificacaoHex = /[g-zG-Z]/g;

//     if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
//       return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
//     }

//     for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

//     for (let a = 0; a < numHexDesm.length; a++) {

//       if (numHexDesm[a] == '0') { resultado = resultado + '0000'; }
//       if (numHexDesm[a] == '1') { resultado = resultado + '0001'; }
//       if (numHexDesm[a] == '2') { resultado = resultado + '0010'; }
//       if (numHexDesm[a] == '3') { resultado = resultado + '0011'; }
//       if (numHexDesm[a] == '4') { resultado = resultado + '0100'; }
//       if (numHexDesm[a] == '5') { resultado = resultado + '0101'; }
//       if (numHexDesm[a] == '6') { resultado = resultado + '0110'; }
//       if (numHexDesm[a] == '7') { resultado = resultado + '0111'; }
//       if (numHexDesm[a] == '8') { resultado = resultado + '1000'; }
//       if (numHexDesm[a] == '9') { resultado = resultado + '1001'; }

//       if (numHexDesm[a] == 'a') { resultado = resultado + '1010'; }
//       if (numHexDesm[a] == 'A') { resultado = resultado + '1010'; }

//       if (numHexDesm[a] == 'b') { resultado = resultado + '1011'; }
//       if (numHexDesm[a] == 'B') { resultado = resultado + '1011'; }

//       if (numHexDesm[a] == 'c') { resultado = resultado + '1100'; }
//       if (numHexDesm[a] == 'C') { resultado = resultado + '1100'; }

//       if (numHexDesm[a] == 'd') { resultado = resultado + '1101'; }
//       if (numHexDesm[a] == 'D') { resultado = resultado + '1101'; }

//       if (numHexDesm[a] == 'e') { resultado = resultado + '1110'; }
//       if (numHexDesm[a] == 'E') { resultado = resultado + '1110'; }

//       if (numHexDesm[a] == 'f') { resultado = resultado + '1111'; }
//       if (numHexDesm[a] == 'F') { resultado = resultado + '1111'; }
//     }

//     resultado = resultado.match(/[1]+([0-1]+)?/g).toString();

//     return resultado;
//   }

//   function formulaHexadecimalDecimal(valor = '') {
//     let resultado = 0, numHexDesm = [], verificacaoHex = /[g-zG-Z]/g;

//     if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
//       return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
//     }

//     for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

//     for (let a = 0, b = numHexDesm.length - 1; a < numHexDesm.length, b > -1; a++, b--) {

//       if (numHexDesm[a] == 'a') { numHexDesm[a] = 10; }
//       if (numHexDesm[a] == 'A') { numHexDesm[a] = 10; }

//       if (numHexDesm[a] == 'b') { numHexDesm[a] = 11; }
//       if (numHexDesm[a] == 'B') { numHexDesm[a] = 11; }

//       if (numHexDesm[a] == 'c') { numHexDesm[a] = 12; }
//       if (numHexDesm[a] == 'C') { numHexDesm[a] = 12; }

//       if (numHexDesm[a] == 'd') { numHexDesm[a] = 13; }
//       if (numHexDesm[a] == 'D') { numHexDesm[a] = 13; }

//       if (numHexDesm[a] == 'e') { numHexDesm[a] = 14; }
//       if (numHexDesm[a] == 'E') { numHexDesm[a] = 14; }

//       if (numHexDesm[a] == 'f') { numHexDesm[a] = 15; }
//       if (numHexDesm[a] == 'F') { numHexDesm[a] = 15; }

//       numHexDesm[a] = parseInt(numHexDesm[a]) * 16 ** b;
//       resultado = resultado + numHexDesm[a];
//     }

//     return resultado;
//   }

//   function formulaHexadecimalOctadecimal(valor = '') {
//     let resultado = '', numHexDesm = [], numOctCons = [], verificacaoHex = /[g-zG-Z]/g;

//     if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
//       return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
//     }

//     for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

//     for (let a = 0, b = numHexDesm.length - 1; a < numHexDesm.length, b > -1; a++, b--) {

//       if (numHexDesm[a] == 'a') { numHexDesm[a] = 10; }
//       if (numHexDesm[a] == 'A') { numHexDesm[a] = 10; }

//       if (numHexDesm[a] == 'b') { numHexDesm[a] = 11; }
//       if (numHexDesm[a] == 'B') { numHexDesm[a] = 11; }

//       if (numHexDesm[a] == 'c') { numHexDesm[a] = 12; }
//       if (numHexDesm[a] == 'C') { numHexDesm[a] = 12; }

//       if (numHexDesm[a] == 'd') { numHexDesm[a] = 13; }
//       if (numHexDesm[a] == 'D') { numHexDesm[a] = 13; }

//       if (numHexDesm[a] == 'e') { numHexDesm[a] = 14; }
//       if (numHexDesm[a] == 'E') { numHexDesm[a] = 14; }

//       if (numHexDesm[a] == 'f') { numHexDesm[a] = 15; }
//       if (numHexDesm[a] == 'F') { numHexDesm[a] = 15; }

//       numHexDesm[a] = parseInt(numHexDesm[a]) * 16 ** b;

//       while (numHexDesm[a] > 0) {
//         let resto = numHexDesm[a] % 8; numHexDesm[a] = numHexDesm[a] / 8;

//         if (resto == 0) { numOctCons.push('0'); }
//         if (resto == 1) { numOctCons.push('1'); numHexDesm[a] = parseInt(numHexDesm[a]); }
//         if (resto == 2) { numOctCons.push('2'); numHexDesm[a] = parseInt(numHexDesm[a]); }
//         if (resto == 3) { numOctCons.push('3'); numHexDesm[a] = parseInt(numHexDesm[a]); }
//         if (resto == 4) { numOctCons.push('4'); numHexDesm[a] = parseInt(numHexDesm[a]); }
//         if (resto == 5) { numOctCons.push('5'); numHexDesm[a] = parseInt(numHexDesm[a]); }
//         if (resto == 6) { numOctCons.push('6'); numHexDesm[a] = parseInt(numHexDesm[a]); }
//         if (resto == 7) { numOctCons.push('7'); numHexDesm[a] = parseInt(numHexDesm[a]); }
//       }

//       for (let a = numOctCons.length; a > 0; a--) {
//         resultado = resultado + numOctCons[a - 1];
//       }
//     }
//     resultado = parseInt(resultado);

//     return resultado;
//   }


//   let chaves = ['t01_binário', 't02_decimal', 't03_octadecimal', 't04_hexadecimal'];

//   switch (input) {
//     case 1:
//       input = chaves[0];
//       break;
//     case 2:
//       input = chaves[1];
//       break;
//     case 3:
//       input = chaves[2];
//       break;
//     case 4:
//       input = chaves[3];
//       break;
//   }

//   switch (output) {
//     case 1:
//       output = chaves[0];
//       break;
//     case 2:
//       output = chaves[1];
//       break;
//     case 3:
//       output = chaves[2];
//       break;
//     case 4:
//       output = chaves[3];
//       break;
//   }

//   let combinacao = [[input], [output]];

//   switch (combinacao[0][0]) {
//     case 't01_binário':
//       switch (combinacao[1][0]) {
//         case 't02_decimal':
//           return formulaBinarioDecimal(valor);
//         case 't03_octadecimal':
//           return formulaBinarioOctadecimal(valor);
//         case 't04_hexadecimal':
//           return formulaBinarioHexadecimal(valor);
//       }
//       break;
//     case 't02_decimal':
//       switch (combinacao[1][0]) {
//         case 't01_binário':
//           return formulaDecimalBinario(valor);
//         case 't03_octadecimal':
//           return formulaDecimalOctadecimal(valor);
//         case 't04_hexadecimal':
//           return formulaDecimalHexadecimal(valor);
//       }
//       break;
//     case 't03_octadecimal':
//       switch (combinacao[1][0]) {
//         case 't01_binário':
//           return formulaOctadecimalBinario(valor);
//         case 't02_decimal':
//           return formulaOctadecimalDecimal(valor);
//         case 't04_hexadecimal':
//           return formulaOctadecimalHexadecimal(valor);
//       }
//       break;
//     case 't04_hexadecimal':
//       switch (combinacao[1][0]) {
//         case 't01_binário':
//           return formulaHexadecimalBinario(valor);
//         case 't02_decimal':
//           return formulaHexadecimalDecimal(valor);
//         case 't03_octadecimal':
//           return formulaHexadecimalOctadecimal(valor);
//       }
//       break;
//   }
// }