export var indiceDesenvolvimentoHumano = (saude: number, educacao: number, renda: number, populacao: number, ppc: number) => {
  return (saude + educacao + renda) / (populacao + ppc);
};
