import { divisao } from "./divisao.mdl";

export var rendimento = (valorParte: number, valorTotal: number): number => {
  return divisao(valorParte, valorTotal);
};
