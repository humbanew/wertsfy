export var titulacao = (massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number): number => {
  if(massaAcido == 0) return massaBase * volumeBase / volumeAcido;
  if(massaBase == 0) return massaAcido * volumeAcido / volumeBase;
  if(volumeAcido == 0) return massaBase * volumeBase / massaAcido;
  if(volumeBase == 0) return massaAcido * volumeAcido / massaBase;
};
