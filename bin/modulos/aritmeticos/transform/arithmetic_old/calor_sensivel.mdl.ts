export var calorSensivel = (massa: number, calorEspecifico: number, temperatura: {inicial: number, final: number}): number => {
  return massa * calorEspecifico * (temperatura.final - temperatura.inicial);
};
