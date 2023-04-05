/// <reference path="../../.declarations/warch.prototype.d.ts" />

import { WertsfyPrototipos } from "../../.declarations/warch.prototype";
import { WComponents } from "../wcimport";

export const Component_math_calculator_advanced_method = (operation: WertsfyPrototipos.Logicos.Core["TAvancados"], ...numbers: number[]): number[] => {

  let resultado: number[] = [];

  for(let i = 0; i < numbers.length; i++) {
    
    switch(operation["modelo"]) {
      case "#sqrt":
        resultado.push(WComponents.Mathematic.sqrt_method(numbers[i])); break;
      case "#cbrt":
        resultado.push(WComponents.Mathematic.cbrt_method(numbers[i])); break;
      case "#quart":
        resultado.push(WComponents.Mathematic.quart_method(numbers[i])); break;
      case "#quirt":
        resultado.push(WComponents.Mathematic.quirt_method(numbers[i])); break;
      case "#sexrt":
        resultado.push(WComponents.Mathematic.sexrt_method(numbers[i])); break;
      case "#seprt":
        resultado.push(WComponents.Mathematic.seprt_method(numbers[i])); break;
      case "#octrt":
        resultado.push(WComponents.Mathematic.octrt_method(numbers[i])); break;
      case "#nonrt":
        resultado.push(WComponents.Mathematic.nonrt_method(numbers[i])); break;
      case "#decrt":
        resultado.push(WComponents.Mathematic.decrt_method(numbers[i])); break;
      case "#sin":
        resultado.push(WComponents.Mathematic.sin_method(numbers[i])); break;
      case "#cos":
        resultado.push(WComponents.Mathematic.cos_method(numbers[i])); break;
      case "#tan":
        resultado.push(WComponents.Mathematic.tan_method(numbers[i])); break;
      case "#sec":
        resultado.push(WComponents.Mathematic.sec_method(numbers[i])); break;
      case "#cosec":
        resultado.push(WComponents.Mathematic.cosec_method(numbers[i])); break;
      case "#cotan":
        resultado.push(WComponents.Mathematic.cotan_method(numbers[i])); break;
      case "#sinh":
        resultado.push(WComponents.Mathematic.sinh_method(numbers[i])); break;
      case "#cosh":
        resultado.push(WComponents.Mathematic.cosh_method(numbers[i])); break;
      case "#tanh":
        resultado.push(WComponents.Mathematic.tanh_method(numbers[i])); break;
      case "#sech":
        resultado.push(WComponents.Mathematic.sech_method(numbers[i])); break;
      case "#cosech":
        resultado.push(WComponents.Mathematic.cosech_method(numbers[i])); break;
      case "#cotanh":
        resultado.push(WComponents.Mathematic.cotanh_method(numbers[i])); break;
      case "#arcsin":
        resultado.push(WComponents.Mathematic.arcsin_method(numbers[i])); break;
      case "#arccos":
        resultado.push(WComponents.Mathematic.arccos_method(numbers[i])); break;
      case "#arctan":
        resultado.push(WComponents.Mathematic.arctan_method(numbers[i])); break;
      case "#arcsec":
        resultado.push(WComponents.Mathematic.arcsec_method(numbers[i])); break;
      case "#arccosec":
        resultado.push(WComponents.Mathematic.arccosec_method(numbers[i])); break;
      case "#arccotan":
        resultado.push(WComponents.Mathematic.arccotan_method(numbers[i])); break;
      case "#arcsinh":
        resultado.push(WComponents.Mathematic.arcsinh_method(numbers[i])); break;
      case "#arccosh":
        resultado.push(WComponents.Mathematic.arccosh_method(numbers[i])); break;
      case "#arctanh":
        resultado.push(WComponents.Mathematic.arctanh_method(numbers[i])); break;
      case "#arcsech":
        resultado.push(WComponents.Mathematic.arcsech_method(numbers[i])); break;
      case "#arccosech":
        resultado.push(WComponents.Mathematic.arccosech_method(numbers[i])); break;
      case "#arccotanh":
        resultado.push(WComponents.Mathematic.arccotanh_method(numbers[i])); break;
      case "#ln":
        resultado.push(WComponents.Mathematic.ln_method(numbers[i])); break;
      case "#lnm1":
        resultado.push(WComponents.Mathematic.lnm1_method(numbers[i])); break;
      case "#lnp1":
        resultado.push(WComponents.Mathematic.lnp1_method(numbers[i])); break;
      case "#coln":
        resultado.push(-1 * WComponents.Mathematic.ln_method(numbers[i])); break;
      case "#colnm1":
        resultado.push(-1 * WComponents.Mathematic.lnm1_method(numbers[i])); break;
      case "#colnp1":
        resultado.push(-1 * WComponents.Mathematic.lnp1_method(numbers[i])); break;
      case "#antiln":
        resultado.push(1 ** WComponents.Mathematic.ln_method(numbers[i])); break;
      case "#antilnm1":
        resultado.push(1 ** WComponents.Mathematic.lnm1_method(numbers[i])); break;
      case "#antilnp1":
        resultado.push(1 ** WComponents.Mathematic.lnp1_method(numbers[i])); break;
      case "#log2":
        resultado.push(WComponents.Mathematic.log2_method(numbers[i])); break;
      case "#log2m1":
        resultado.push(WComponents.Mathematic.log2m1_method(numbers[i])); break;
      case "#log2p1":
        resultado.push(WComponents.Mathematic.log2p1_method(numbers[i])); break;
      case "#colog2":
        resultado.push(-1 * WComponents.Mathematic.log2_method(numbers[i])); break;
      case "#colog2m1":
        resultado.push(-1 * WComponents.Mathematic.log2m1_method(numbers[i])); break;
      case "#colog2p1":
        resultado.push(-1 * WComponents.Mathematic.log2p1_method(numbers[i])); break;
      case "#antilog2":
        resultado.push(1 ** WComponents.Mathematic.log2_method(numbers[i])); break;
      case "#antilog2m1":
        resultado.push(1 ** WComponents.Mathematic.log2m1_method(numbers[i])); break;
      case "#antilog2p1":
        resultado.push(1 ** WComponents.Mathematic.log2p1_method(numbers[i])); break;
      case "#log10":
        resultado.push(WComponents.Mathematic.log_method(numbers[i])); break;
      case "#log10m1":
        resultado.push(WComponents.Mathematic.logm1_method(numbers[i])); break;
      case "#log10p1":
        resultado.push(WComponents.Mathematic.logp1_method(numbers[i])); break;
      case "#colog10":
        resultado.push(-1 * WComponents.Mathematic.log_method(numbers[i])); break;
      case "#colog10m1":
        resultado.push(-1 * WComponents.Mathematic.logm1_method(numbers[i])); break;
      case "#colog10p1":
        resultado.push(-1 * WComponents.Mathematic.logp1_method(numbers[i])); break;
      case "#antilog10":
        resultado.push(1 ** WComponents.Mathematic.log_method(numbers[i])); break;
      case "#antilog10m1":
        resultado.push(1 ** WComponents.Mathematic.logm1_method(numbers[i])); break;
      case "#antilog10p1":
        resultado.push(1 ** WComponents.Mathematic.logp1_method(numbers[i])); break;
      case "#logx":
        resultado.push(WComponents.Mathematic.logx_method(numbers[i], numbers[i+1])); i++; break;
      case "#logxm1":
        resultado.push(WComponents.Mathematic.logxm1_method(numbers[i], numbers[i+1])); i++; break;
      case "#logxp1":
        resultado.push(WComponents.Mathematic.logxp1_method(numbers[i], numbers[i+1])); i++; break;          
      case "#cologx":
        resultado.push(-1 * WComponents.Mathematic.logx_method(numbers[i], numbers[i+1])); i++; break;
      case "#cologxm1":
        resultado.push(-1 * WComponents.Mathematic.logxm1_method(numbers[i], numbers[i+1])); i++; break;
      case "#cologxp1":
        resultado.push(-1 * WComponents.Mathematic.logxp1_method(numbers[i], numbers[i+1])); i++; break;          
      case "#antilogx":
        resultado.push(1 ** WComponents.Mathematic.logx_method(numbers[i], numbers[i+1])); i++; break;
      case "#antilogxm1":
        resultado.push(1 ** WComponents.Mathematic.logxm1_method(numbers[i], numbers[i+1])); i++; break;
      case "#antilogxp1":
        resultado.push(1 ** WComponents.Mathematic.logxp1_method(numbers[i], numbers[i+1])); i++; break;
      case "#exp":
        resultado.push(WComponents.Mathematic.exp_method(numbers[i], numbers[i+1])); i++; break;          
      case "#expm1":
        resultado.push(WComponents.Mathematic.expp1_method(numbers[i], numbers[i+1])); i++; break;          
      case "#expp1":
        resultado.push(WComponents.Mathematic.expm1_method(numbers[i], numbers[i+1])); i++; break;          
    }
  
  }

  return resultado;

};
