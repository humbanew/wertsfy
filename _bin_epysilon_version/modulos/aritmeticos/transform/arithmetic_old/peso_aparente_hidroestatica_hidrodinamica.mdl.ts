import { empuxoHidroestaticaHidrodinamica } from "./empuxo_hidroestatica_hidrodinamica.mdl";

export var pesoAparenteDaHidroestaticaHidrodinamica = (peso: number, densidade: number, gravidade: number, volume: number): number => {
  let resultado = peso - empuxoHidroestaticaHidrodinamica(densidade, gravidade, volume);
  return resultado;
};
