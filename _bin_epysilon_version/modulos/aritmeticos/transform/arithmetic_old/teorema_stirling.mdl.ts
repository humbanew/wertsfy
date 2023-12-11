import { logaritmoBase10 } from "./logaritmo_base_10.mdl";

export var teoremaDeStirling = (valor: number): number => {
  return (logaritmoBase10(valor) * valor) / valor;
};
