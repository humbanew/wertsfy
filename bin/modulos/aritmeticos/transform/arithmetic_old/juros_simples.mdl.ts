export var jurosSimples = (valor: number, taxa: number, tempo: number): number => {
  let resultado = valor * (1 + taxa * tempo);
  return resultado;
};
