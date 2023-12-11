/** **Function** Ceil() */
export var arrendondaParaCima = (x: number): number => {
  return x > parseInt(x.toString())+0.5 ? parseInt(x.toString()) + 1 : parseInt(x.toString());
};
