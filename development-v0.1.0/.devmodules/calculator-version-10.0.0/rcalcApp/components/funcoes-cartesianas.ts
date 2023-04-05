
export function $primeiroGrau(exp) { 
  let res = 0;
  let verif = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi; 
  let p1 = /([0-9]+(\.[0-9]+)?x)/gi;
  let p2 = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi; 
  let p3 = /(=[0-9]+(\.[0-9]+)?)/gi; 
  
  if (exp.match(verif) == null) { 
    return console.error("A expressão inserida não é uma função do 1º Grau!"); 
  } else { 
    res = (parseFloat(exp.match(p2)) - parseFloat(exp.match(p3))) / parseFloat(exp.match(p1)); 
  } 
  
  return res; 
}

export function $segundoGrau(a: number, b: number, c: number) { 
  let res = [0]; 
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, x2]; 
  
  return res; 
}

export function $terceiroGrau(a: number, b: number, c: number) { 
  let res = [0]; 
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, x2, 0]; 
  
  return res; 
}

export function $quartoGrau(a: number, b: number, c: number) { 
  let res = [0];
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, -1 * x1, x2, -1 * x2]; 
  
  return res; 
}

export function $quintoGrau(a: number, b: number, c: number) { 
  let res = [0], delta = (b ** 2) - (4 * a * c);  
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, -1 * x1, x2, -1 * x2, 0]; 
  
  return res; 
}

export function $sextoGrau(a: number, b: number, c: number) {
  let res = [0], delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, -1 * x1, x2, -1 * x2, 0, 0]; 
  
  return res; 
}

export function $setimoGrau(a: number, b: number, c: number) {
  let res = [0], delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, -1 * x1, x2, -1 * x2, 0, 0, 0]; 
  
  return res; 
}

export function $oitavoGrau(a: number, b: number, c: number) {
  let res = [0], delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, -1 * x1, x2, -1 * x2, 0, 0, 0, 0]; 
  
  return res; 
}