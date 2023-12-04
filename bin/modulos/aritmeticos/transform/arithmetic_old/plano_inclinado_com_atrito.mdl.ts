export var planoInclinadoComAtrito = (forcaDeAtrito: number, massa: number, gravidade: number, angulo: number): number => {
  return forcaDeAtrito * massa * gravidade * angulo;
};
