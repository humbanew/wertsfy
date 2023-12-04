export var empuxoHidroestaticaHidrodinamica = (densidade: number, gravidade: number, volume: number): number => {
  return densidade * gravidade * volume;
};
