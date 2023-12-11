/** **Function** Fround() */
export var arrendondaParaDecimal32Bits = (x: number): string => {
  let tam = 24;
  let regexp = /([0-9]+)\.([0-9]+)/g;
  let redux = regexp.exec(x.toString())[1].length; 
  let k: string = new Float32Array(tam).toString();
  for(let i = 0; i < tam-1; i++) { 
    k = k.replace(",", "");
  };
  k = k.slice(0, k.length - redux);
  return x + k;
};
