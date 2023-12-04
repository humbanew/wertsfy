export var efeitoJoule = (corrente: number, resistencia: number, tempo: {inicial: number, final: number}): number => {
  return (corrente ** 2) * resistencia * (tempo.final - tempo.inicial);
};
