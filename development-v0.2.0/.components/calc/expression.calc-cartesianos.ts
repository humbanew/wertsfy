import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const calculoCartesianos = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesCartesianos"]) => {

  let resultado: number|number[] = 0||[], attrs = undefined;

  switch(tipo[0]) {
    case "#primeiroGrau":
      attrs = tipo[1];
      let verif = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi
      ,p1 = /([0-9]+(\.[0-9]+)?x)/gi
      ,p2 = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi
      ,p3 = /(=[0-9]+(\.[0-9]+)?)/gi; 
      
      if (attrs.exp.match(verif) == null) { 
        return console.error(0); 
      } else { 
        resultado = (parseFloat(attrs.exp.match(p2)) - parseFloat(attrs.exp.match(p3))) / parseFloat(attrs.exp.match(p1)); 
      } break;
    case "#segundoGrau":
      attrs = tipo[1]; 
      let delta = (attrs.b ** 2) - (4 * attrs.a * attrs.c) 
      ,x1 = (-1 * attrs.b + Math.sqrt(delta)) / (2 * attrs.a) 
      ,x2 = (-1 * attrs.b - Math.sqrt(delta)) / (2 * attrs.a); 
      resultado = [x1, x2]; break; 
    case "#terceiroGrau":
      attrs = tipo[1]; 
      delta = (attrs.b ** 2) - (4 * attrs.a * attrs.c) 
      ,x1 = (-1 * attrs.b + Math.sqrt(delta)) / (2 * attrs.a) 
      ,x2 = (-1 * attrs.b - Math.sqrt(delta)) / (2 * attrs.a); 
      resultado = [x1, x2, 0]; break; 
    case "#quartoGrau":
      attrs = tipo[1]; 
      delta = (attrs.b ** 2) - (4 * attrs.a * attrs.c) 
      ,x1 = (-1 * attrs.b + Math.sqrt(delta)) / (2 * attrs.a) 
      ,x2 = (-1 * attrs.b - Math.sqrt(delta)) / (2 * attrs.a); 
      resultado = [x1, -1 * x1, x2, -1 * x2]; break; 
  }

  return resultado;

}; export { calculoCartesianos as Component_math_calculator_exp_calc_cartesianos_method }
