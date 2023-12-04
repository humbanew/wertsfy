export var fatorial = (x: number): number => {
  let resultado: number = 1;
  if(x == 0) { return resultado = 1; }
  for (let i = x; i > 0; i--) { resultado = i * resultado; };
  return resultado;
};
