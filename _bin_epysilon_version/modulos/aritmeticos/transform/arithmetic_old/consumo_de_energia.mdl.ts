export var consumoDeEnergia = (tempo: {inicial: number, final: number}, correnteEletrica: number, ddp: number): number => {
  return correnteEletrica * ddp * (tempo.final - tempo.inicial);
};
