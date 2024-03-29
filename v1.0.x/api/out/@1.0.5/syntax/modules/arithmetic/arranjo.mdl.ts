export var arranjo = (total: number, divisor: number): number => {
  let resultado: number = 0, totalConvertido: number = 1, divisorConvertido: number = 1;
  for (let i = total; i > 0; i--) { totalConvertido = totalConvertido * i; }
  for (let j = divisor; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
  resultado = totalConvertido / (totalConvertido - divisorConvertido);
  return resultado;
};
