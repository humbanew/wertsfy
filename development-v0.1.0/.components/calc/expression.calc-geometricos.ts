import { WertsfyPrototipos } from "../../.declarations/warch.prototype";
import { Component_math_corebase_pi_constant } from "../math/constant.pi";
import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const calculoGeometricos = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesGeometricos"]): number => {

  let resultado = 0, attrs = undefined;

  switch(tipo[0]) {
    case "#areaTrianguloQualquer":
      attrs = tipo[1];
      resultado = attrs.lado * attrs.lado * Component_math_corebase_sqrt_method(3) / 4; break;
    case "#apotemaTrianguloQualquer":
      attrs = tipo[1];
      resultado = attrs.lado * attrs.lado * Component_math_corebase_sqrt_method(3) / 2; break;
    case "#areaQuadradoQualquer":
      attrs = tipo[1];  
      resultado = attrs.lado * attrs.lado; break;
    case "#areaRetanguloQualquer":
      attrs = tipo[1];
      resultado = attrs.comprimento * attrs.largura; break;
    case "#areaCirculoQualquer":
      attrs = tipo[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2); break; 
    case "#areaElipseQualquer":
      attrs = tipo[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break;
    case "#areaPiramideQualquer":
      attrs = tipo[1]; 
      resultado = (attrs.base * attrs.altura) / 3; break;
    case "#areaCilindroQualquer":
      attrs = tipo[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break;
    case "#areaConeQualquer":
      attrs = tipo[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * (attrs.altura / 3); break;
    case "#areaTrapezioQualquer":
      attrs = tipo[1];
      resultado = (attrs.baseMaior + attrs.baseMenor * attrs.altura) / 2; break; 
    case "#areaLozangoQualquer":
      attrs = tipo[1];
      resultado = (attrs.diagonalMaior * attrs.diagonalMenor) / 2; break; 
    case "#areaSuperficieQualquer":
      attrs = tipo[1];
      resultado = attrs.comprimento * attrs.largura; break;
    case "#volumeSuperficieQualquer":
      attrs = tipo[1]; 
      resultado = attrs.area * attrs.comprimento * attrs.largura; break;
    case "#areaEsferaQualquer":
      attrs = tipo[1];
      resultado = 4 * Component_math_corebase_pi_constant * (attrs.raio ** 2) / 2; break; 
    case "#areaPoligonoQualquer":
      attrs = tipo[1];
      resultado = attrs.comprimento == attrs.largura ? attrs.nLados * ((attrs.comprimento * attrs.comprimento * Component_math_corebase_sqrt_method(3)) / 4) : attrs.nLados * (attrs.comprimento * attrs.largura / 2); break;
    case "#volumePoligonoFormatoLozangoQualquer":
      attrs = tipo[1];
      resultado = ((attrs.diagonalMaior * attrs.diagonalMenor) / 2 ) * attrs.altura; break;
    case "#volumePoligonoFormatoTrapezioQualquer":
      attrs = tipo[1];
      resultado = (attrs.baseMaior + attrs.baseMenor * attrs.altura) / 2; break;
    case "#areaParalelogramoQualquer":
      attrs = tipo[1];
      resultado = attrs.lado * attrs.altura; break;
    case "#areaLateralPrismaQualquer":
      attrs = tipo[1];
      resultado = attrs.nLados * (attrs.comprimento * attrs.largura); break;
    case "#volumePrismaQualquer":
      attrs = tipo[1];
      resultado = attrs.area * attrs.comprimento * attrs.largura; break;
    case "#volumeCuboQualquer":
      attrs = tipo[1];
      resultado = attrs.aresta * attrs.aresta * attrs.aresta; break;
    case "#volumeParalelogramoQualquer":
      attrs = tipo[1];
      resultado = attrs.comprimento * attrs.largura * attrs.altura; break; 
    case "#volumePiramideQualquer": 
      attrs = tipo[1];
      resultado = (attrs.base * attrs.altura) / 3; break;
    case "#volumeTetraedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 4; break; 
    case "#volumeHexaedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 6; break;
    case "#volumeOctaedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 8; break;
    case "#volumeDodecaedroQualquer":
      attrs = tipo[1]; 
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 12; break;
    case "#volumeIcosaedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 20; break;
    case "#volumeConeQualquer":
      attrs = tipo[1];
      resultado = (Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura) / 3; break; 
    case "#volumeCilindroQualquer":
      attrs = tipo[1];
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break; 
    case "#volumeEsferaQualquer":
      attrs = tipo[1];
      resultado = (4 * Component_math_corebase_pi_constant * (attrs.raio ** 3)) / 3; break; 
    case "#volumeRombQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta) / 2; break; 
    case "#areaCircunferenciaQualquer":
      attrs = tipo[1];
      resultado = Component_math_corebase_pi_constant * (attrs.raio * 2); break; 
    case "#areaLateralCilindroQualquer":
      attrs = tipo[1];
      resultado = 2 * Component_math_corebase_pi_constant * attrs.raio * attrs.altura;
  }

  return resultado;
  
}; export { calculoGeometricos as Component_math_calculator_exp_calc_geometricos_method }
