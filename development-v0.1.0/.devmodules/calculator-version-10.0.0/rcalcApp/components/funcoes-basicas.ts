export function $soma(n1: number, n2:number) { 
  return n1 + n2; 
}

export function $subtracao(n1: number, n2:number) { 
  return n1 - n2; 
}

export function $multiplicacao(n1: number, n2:number) {
  return n1 * n2;
}

export function $divisao(n1: number, n2:number) {
  return n1 / n2;
}

export function $potencia(n1: number, n2:number) {
  return Math.pow(n1, n2);
}

export function $raizQuadrada(n1: number) {
  return Math.sqrt(n1);
}

export function $raizCubica(n1: number) {
  return Math.cbrt(n1);
}

export function $raizBiquadrada(n1: number) {
  return Math.sqrt(Math.sqrt(n1));
}

export function $raizBicubica(n1: number) {
  return Math.cbrt(Math.cbrt(n1));
}

export function $raizTriquadrada(n1: number) {
  return Math.sqrt(Math.sqrt(Math.sqrt(n1)));
}

export function $raizTricubica(n1: number) {
  return Math.cbrt(Math.cbrt(Math.cbrt(n1)));
}

export function $potenciaDePotencia(n1: number, n2:number, nPotencias:number, potencias:[number]) {
  let potenciaSuperior = 0;
  for (let i = 0; i < nPotencias; i++) { potenciaSuperior += potencias[i]; } 
  return Math.pow(Math.pow(n1, n2), potenciaSuperior);
}
