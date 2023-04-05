interface ChaveConversora { 
  painel: [[][]] 
};

interface TamanhosSistemaInternacional { 
  seletor: "deca"|"hecto"|"kilo"|"mega"|"giga"|"tera"|"peta"|"exa"|"zeta"|"yotta"|"deci"|"centi"|"mili"|"micro"|"nano"|"pico"|"femto"|"atto"|"zepto"|"yocto"|"graus"|"radianos" 
};

interface NotacoesGrandezas { 
  seletor: "metros"|"litros"|"metros-quadrados"|"metros-cubicos" 
};

class Transformadores {

  protected terminal: ChaveConversora;

  private convBinarioDecimal(valor: string): number {
    let valorDecimal = 0;
    let res: number[] = [];
    let divisor: string[]|number[] = valor.split("" , valor.length);
    for(let y = 0; y < divisor.length; y++) {
      res[y] = parseInt(divisor[y]);
    }
    for(let i = 0, u = divisor.length - 1; i < divisor.length; i++, u--) {
      if(u < 0) { break; }
      valorDecimal = parseInt(divisor[i]) * 2 ** u + valorDecimal;
    }
    return valorDecimal;
  }

  private convBinarioHexadecimal(valor: string): string {  
    let divisor = [];
    let verifCom5 = valor.length / 5;
    let verifCom6 = valor.length / 6;
    let verifCom7 = valor.length / 7;
    if (Number.isInteger(verifCom7) == true) { valor = "0" + valor; }
    if (Number.isInteger(verifCom6) == true) { valor = "00" + valor; }
    if (Number.isInteger(verifCom5) == true) { valor = "000" + valor; }
    let separador = valor.length / 4;
    let repetidor = 1;
    let e = 1, f = 2;
    while (repetidor < separador + 1) {
      let posicaoInicial = 0;
      let incremento = 4;
      if (repetidor == 1) {
        divisor.push(valor.slice(posicaoInicial, incremento));
        repetidor++;
      }
      if (repetidor > 1) {
        divisor.push(valor.slice(incremento * e, incremento * f));
        e++; f++;
        repetidor++;
      }
    }
    let numeroHexadecimal = "";
    for (let u = 0; u < divisor.length; u++) {
      if (divisor[u] == "0000") { numeroHexadecimal = numeroHexadecimal + "0"; }
      if (divisor[u] == "0001") { numeroHexadecimal = numeroHexadecimal + "1"; }
      if (divisor[u] == "0010") { numeroHexadecimal = numeroHexadecimal + "2"; }
      if (divisor[u] == "0011") { numeroHexadecimal = numeroHexadecimal + "3"; }
      if (divisor[u] == "0100") { numeroHexadecimal = numeroHexadecimal + "4"; }
      if (divisor[u] == "0101") { numeroHexadecimal = numeroHexadecimal + "5"; }
      if (divisor[u] == "0110") { numeroHexadecimal = numeroHexadecimal + "6"; }
      if (divisor[u] == "0111") { numeroHexadecimal = numeroHexadecimal + "7"; }
      if (divisor[u] == "1000") { numeroHexadecimal = numeroHexadecimal + "8"; }
      if (divisor[u] == "1001") { numeroHexadecimal = numeroHexadecimal + "9"; }
      if (divisor[u] == "1010") { numeroHexadecimal = numeroHexadecimal + "A"; }
      if (divisor[u] == "1011") { numeroHexadecimal = numeroHexadecimal + "B"; }
      if (divisor[u] == "1100") { numeroHexadecimal = numeroHexadecimal + "C"; }
      if (divisor[u] == "1101") { numeroHexadecimal = numeroHexadecimal + "D"; }
      if (divisor[u] == "1110") { numeroHexadecimal = numeroHexadecimal + "E"; }
      if (divisor[u] == "1111") { numeroHexadecimal = numeroHexadecimal + "F"; }
    }
    return numeroHexadecimal;
  }

  private convBinarioOctal(valor: string): string {
    let divisor = [];
    let verifCom4 = valor.length / 4;
    let verifCom5 = valor.length / 5;
    if(Number.isInteger(verifCom5) == true) { valor = "0" + valor; }
    if(Number.isInteger(verifCom4) == true) { valor = "00" + valor; }
    let separador = valor.length / 3;
    let repetidor = 1;
    let e = 1, f = 2;
    while(repetidor < separador+1) {
      let posicaoInicial = 0;
      let incremento = 3;
      if(repetidor == 1) {
        divisor.push(valor.slice(posicaoInicial, incremento));
        repetidor++;
      }
      if(repetidor > 1) {
        divisor.push(valor.slice(incremento*e, incremento*f));
        e++; f++;
        repetidor++;
      }
    }
    let numeroOctal = "";
    for(let u = 0; u < divisor.length; u++) {
      if(divisor[u] == "000") { numeroOctal = numeroOctal + "0"; }
      if(divisor[u] == "001") { numeroOctal = numeroOctal + "1"; }
      if(divisor[u] == "010") { numeroOctal = numeroOctal + "2"; }
      if(divisor[u] == "011") { numeroOctal = numeroOctal + "3"; }
      if(divisor[u] == "100") { numeroOctal = numeroOctal + "4"; }
      if(divisor[u] == "101") { numeroOctal = numeroOctal + "5"; }
      if(divisor[u] == "110") { numeroOctal = numeroOctal + "6"; }
      if(divisor[u] == "111") { numeroOctal = numeroOctal + "7"; }
    }
    return numeroOctal;
  }

  private convDecimalBinario(valor: number): string {
    let numeroBinario = "";
    if(valor == 0) { numeroBinario = "0" + numeroBinario; }
    if(valor == 3) { numeroBinario = "1" + numeroBinario; }
    while(valor > 2) {
      valor = valor / 2;
      if (Number.isInteger(valor) == true) { numeroBinario = "0" + numeroBinario; }
      if (Number.isInteger(valor) == false) { numeroBinario = "1" + numeroBinario; }
      if (valor == 3) { numeroBinario = "1" + numeroBinario; }
      if (valor == 2) { numeroBinario = "10" + numeroBinario; }
    }
    return numeroBinario;
  }

  private convDecimalHexadecimal(valor: number): string {
    let numeroHexadecimal = "";
    let achaResto: any, resto: any;
    while (valor > 1) {
      valor = valor / 16;
      achaResto = valor * 16;
      resto = (valor * 16) - achaResto;
      if (Number.isInteger(valor) == true) { numeroHexadecimal = "0" + numeroHexadecimal; }
      if (Number.isInteger(valor) == false) {
        resto = parseInt(resto);
        if(resto < 9) { numeroHexadecimal = resto + numeroHexadecimal; }
        if(resto > 9) {
          if(resto == 10) { numeroHexadecimal = "A" + numeroHexadecimal; }
          if(resto == 11) { numeroHexadecimal = "B" + numeroHexadecimal; }
          if(resto == 12) { numeroHexadecimal = "C" + numeroHexadecimal; }
          if(resto == 13) { numeroHexadecimal = "D" + numeroHexadecimal; }
          if(resto == 14) { numeroHexadecimal = "E" + numeroHexadecimal; }
          if(resto == 15) { numeroHexadecimal = "F" + numeroHexadecimal; }
        }
      }
    }
    return numeroHexadecimal;
  }

  private convDecimalOctal(valor: number): string {
    let numeroOctal = "";
    let achaResto: any, resto: any;
    while(valor > 1) {
      valor = valor / 8;
      achaResto = valor * 8;
      resto = (valor * 8) - achaResto;
      if (Number.isInteger(valor) == true) { numeroOctal = "0" + numeroOctal; }
      if (Number.isInteger(valor) == false) { numeroOctal = parseInt(resto) + numeroOctal; }
    }
    return numeroOctal;
  }

  private convOctalBinario(valor: string): string {
    let divisor: any = valor.split("", valor.length);
    for (let y = 0; y < divisor.length; y++) {
      divisor[y] = parseInt(divisor[y]);
      if(divisor[y] == 0) { divisor[y] = "000"; valor = "000" + valor; }
      if(divisor[y] == 1) { divisor[y] = "001"; valor = "001" + valor; }
      if(divisor[y] == 2) { divisor[y] = "010"; valor = "010" + valor; }
      if(divisor[y] == 3) { divisor[y] = "011"; valor = "011" + valor; }
      if(divisor[y] == 4) { divisor[y] = "100"; valor = "100" + valor; }
      if(divisor[y] == 5) { divisor[y] = "101"; valor = "101" + valor; }
      if(divisor[y] == 6) { divisor[y] = "110"; valor = "110" + valor; }
      if(divisor[y] == 7) { divisor[y] = "111"; valor = "111" + valor; }
    }
    return valor;
  }

  private convOctalDecimal(valor: string): number {
    let valorDecimal = 0;
    let divisor: any = valor.split("", valor.length);
    for (let y = 0; y < divisor.length; y++) { divisor[y] = parseInt(divisor[y]); }
    for (let i = 0, u = divisor.length - 1; i < divisor.length; i++, u--) {
      if (u < 0) { break; }
      valorDecimal = parseInt(divisor[i]) * 8 ** u + valorDecimal;
    }
    return valorDecimal;
  }

  private convOctalHexadecimal(valor: string): string {
    let valorHexadecimal: any = 0;
    let divisor: any = valor.split("", valor.length);
    for (let y = 0; y < divisor.length; y++) { divisor[y] = parseInt(divisor[y]); }
    for (let i = 0, u = divisor.length - 1; i < divisor.length; i++, u--) {
      if (u < 0) { break; }
      valorHexadecimal = parseInt(divisor[i]) * 8 ** u + valorHexadecimal;
    }
    return valorHexadecimal;
  }

  private convHexadecimalDecimal(valor: string): number {
    let valorDecimal = 0;
    let divisor = valor.split("", valor.length);
    for (let y = 0; y < divisor.length; y++) {
      if (divisor[y] == "A") { divisor[y] = "10"; }
      if (divisor[y] == "B") { divisor[y] = "11"; }
      if (divisor[y] == "C") { divisor[y] = "12"; }
      if (divisor[y] == "D") { divisor[y] = "13"; }
      if (divisor[y] == "E") { divisor[y] = "14"; }
      if (divisor[y] == "F") { divisor[y] = "15"; }
    }
    return valorDecimal;
  }

  private convHexadecimalBinario(valor: string) { };

  private convHexadecimalOctal(valor: string) { };

  public static controlPanel() { };

} export let ModuloTransformadores = new Transformadores();
