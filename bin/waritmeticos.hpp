#ifndef _WARITMETICOS_HPP_
#define _WARITMETICOS_HPP_

#include <cstdio>
#include <cstdlib>

#include "wcorebase.hpp"

lista_registros *lr_glossario_aritmeticos = cria_lista_registros("WA");

namespace WERTSFY 
{ 
  
  namespace BIBLIOTECAS 
  { 
    
    struct Aritmeticos 
    { 

      protected:
        bool NaN = false;
        void registros() { }
      
      public:
        typedef struct Const_Avogadro
        {

          float valor=6.022140857e23;
          registro *reg=cria_registro('B', 'C', "ARIT", 1, "1.0.0", "1.0.0", 'R');

        } avogadro;

        typedef struct Const_Cbrt_of01_02
        {

          float valor=0.7071067811865476;
          registro *reg=cria_registro('B', 'C', "ARIT", 2, "1.0.0", "1.0.0", 'R');

        } cbrt_of01_02;

        typedef struct Const_Cbrt_of01_04
        {

          float valor=0.50000000000000;
          registro *reg=cria_registro('B', 'C', "ARIT", 3, "1.0.0", "1.0.0", 'R');

        } cbrt_of01_04;

        typedef struct Const_Cbrt_of01_06
        {

          float valor=0.408248290463863;
          registro *reg=cria_registro('B', 'C', "ARIT", 4, "1.0.0", "1.0.0", 'R');

        } cbrt_of01_06;

        typedef struct Const_Cbrt_of01_08
        {

          float valor=0.3535533905932738;
          registro *reg=cria_registro('B', 'C', "ARIT", 5, "1.0.0", "1.0.0", 'R');

        } cbrt_of01_08;

        typedef struct Const_Cbrt_of01
        {

          float valor=1.00000000000000;
          registro *reg=cria_registro('B', 'C', "ARIT", 6, "1.0.0", "1.0.0", 'R');

        } cbrt_of01;

        typedef struct Const_Cbrt_of02
        {

          float valor=1.25992104989487;
          registro *reg=cria_registro('B', 'C', "ARIT", 7, "1.0.0", "1.0.0", 'R');

        } cbrt_of02;

        typedef struct Const_Cbrt_of03
        {

          float valor=1.5874010519682;
          registro *reg=cria_registro('B', 'C', "ARIT", 8, "1.0.0", "1.0.0", 'R');

        } cbrt_of03;

        typedef struct Const_Cbrt_of04
        {

          float valor=1.99999999999999;
          registro *reg=cria_registro('B', 'C', "ARIT", 9, "1.0.0", "1.0.0", 'R');

        } cbrt_of04;

        typedef struct Const_Cbrt_of05
        {

          float valor=2.23606797749979;
          registro *reg=cria_registro('B', 'C', "ARIT", 10, "1.0.0", "1.0.0", 'R');

        } cbrt_of05;

        typedef struct Const_Cbrt_of06
        {

          float valor=2.58198889747161;
          registro *reg=cria_registro('B', 'C', "ARIT", 11, "1.0.0", "1.0.0", 'R');

        } cbrt_of06;

        typedef struct Const_Cbrt_of07
        {

          float valor=2.91293118277239;
          registro *reg=cria_registro('B', 'C', "ARIT", 12, "1.0.0", "1.0.0", 'R');

        } cbrt_of07;

        typedef struct Const_Cbrt_of08
        {

          float valor=3.26249509498958;
          registro *reg=cria_registro('B', 'C', "ARIT", 13, "1.0.0", "1.0.0", 'R');

        } cbrt_of08;

        typedef struct Const_Cbrt_of09
        {

          float valor=3.62449963442055;
          registro *reg=cria_registro('B', 'C', "ARIT", 14, "1.0.0", "1.0.0", 'R');

        } cbrt_of09;

        typedef struct Const_Cbrt_of10
        {

          float valor=3.99999999999999;
          registro *reg=cria_registro('B', 'C', "ARIT", 15, "1.0.0", "1.0.0", 'R');

        } cbrt_of10;

        typedef struct Const_Coulomb { 

          float valor=1.60217657e-19;
          registro *reg=cria_registro('B', 'C', "ARIT", 16, "1.0.0", "1.0.0", 'R');

        } coulomb;
        
        typedef struct Const_Euler { 

          float valor=2.7182818284590452353602874713527;
          registro *reg=cria_registro('B', 'C', "ARIT", 17, "1.0.0", "1.0.0", 'R');

        } euler;
        
        typedef struct Const_Euler2 { 

          float valor=7.38905609893065;
          registro *reg=cria_registro('B', 'C', "ARIT", 18, "1.0.0", "1.0.0", 'R');

        } euler2;
        
        typedef struct Const_Logarithm2 { 

          float valor=0.6931471805599453;
          registro *reg=cria_registro('B', 'C', "ARIT", 19, "1.0.0", "1.0.0", 'R');

        } logarithm2;
        
        typedef struct Const_Logarithm2e { 

          float valor=1.4426950408889634;
          registro *reg=cria_registro('B', 'C', "ARIT", 20, "1.0.0", "1.0.0", 'R');

        } logarithm2e;
        
        typedef struct Const_Logarithm10 { 

          float valor=2.302585092994046;
          registro *reg=cria_registro('B', 'C', "ARIT", 21, "1.0.0", "1.0.0", 'R');

        } logarithm10;
        
        typedef struct Const_Logarithm10e { 

          float valor=0.43429448190325183;
          registro *reg=cria_registro('B', 'C', "ARIT", 22, "1.0.0", "1.0.0", 'R');

        } logarithm10e;
        
        typedef struct Const_Maxvalue { 

          float valor=999999999999999;
          registro *reg=cria_registro('B', 'C', "ARIT", 23, "1.0.0", "1.0.0", 'R');

        } maxvalue;
        
        typedef struct Const_Minvalue { 

          float valor=-999999999999999;
          registro *reg=cria_registro('B', 'C', "ARIT", 24, "1.0.0", "1.0.0", 'R');

        } minvalue;
        
        typedef struct Const_Newton { 

          float valor=0.6931471805599453;
          registro *reg=cria_registro('B', 'C', "ARIT", 25, "1.0.0", "1.0.0", 'R');

        } newton;
        
        typedef struct Const_Pi { 

          float valor=3.1415926535897932384626433832795;
          registro *reg=cria_registro('B', 'C', "ARIT", 26, "1.0.0", "1.0.0", 'R');

        } pi;
        
        typedef struct Const_Plank { 

          float valor=6.62606957e-34;
          registro *reg=cria_registro('B', 'C', "ARIT", 27, "1.0.0", "1.0.0", 'R');

        } plank;
        
        typedef struct Const_Sqrt_of01_02 { 

          float valor=0.7937005259840998;
          registro *reg=cria_registro('B', 'C', "ARIT", 28, "1.0.0", "1.0.0", 'R');

        } sqrt_of01_02;
        
        typedef struct Const_Sqrt_of01_04 { 

          float valor=0.6299605249474366;
          registro *reg=cria_registro('B', 'C', "ARIT", 29, "1.0.0", "1.0.0", 'R');

        } sqrt_of01_04;
        
        typedef struct Const_Sqrt_of01_06 { 

          float valor=0.5503212081491045;
          registro *reg=cria_registro('B', 'C', "ARIT", 30, "1.0.0", "1.0.0", 'R');

        } sqrt_of01_06;
        
        typedef struct Const_Sqrt_of01_08 {

          float valor=0.500000000000000;
          registro *reg=cria_registro('B', 'C', "ARIT", 31, "1.0.0", "1.0.0", 'R');

        } sqrt_of01_08;
        
        typedef struct Const_Sqrt_of01 { 

          float valor=1.00000000000000;
          registro *reg=cria_registro('B', 'C', "ARIT", 32, "1.0.0", "1.0.0", 'R');

        } sqrt_of01;
        
        typedef struct Const_Sqrt_of02 { 

          float valor=1.414213562373095;
          registro *reg=cria_registro('B', 'C', "ARIT", 33, "1.0.0", "1.0.0", 'R');

        } sqrt_of02;
        
        typedef struct Const_Sqrt_of03 {

          float valor=1.732050807568877;
          registro *reg=cria_registro('B', 'C', "ARIT", 34, "1.0.0", "1.0.0", 'R');

        } sqrt_of03;
        
        typedef struct Const_Sqrt_of04 { 

          float valor=2.00000000000000;
          registro *reg=cria_registro('B', 'C', "ARIT", 35, "1.0.0", "1.0.0", 'R');

        } sqrt_of04;
        
        typedef struct Const_Sqrt_of05 { 

          float valor=2.23606797749979;
          registro *reg=cria_registro('B', 'C', "ARIT", 36, "1.0.0", "1.0.0", 'R');

        } sqrt_of05;
        
        typedef struct Const_Sqrt_of06 { 

          float valor=2.449489742783178;
          registro *reg=cria_registro('B', 'C', "ARIT", 37, "1.0.0", "1.0.0", 'R');

        } sqrt_of06;
        
        typedef struct Const_Sqrt_of07 { 

          float valor=2.64575131106459;
          registro *reg=cria_registro('B', 'C', "ARIT", 38, "1.0.0", "1.0.0", 'R');

        } sqrt_of07;
        
        typedef struct Const_Sqrt_of08 { 

          float valor=2.82842712474619;
          registro *reg=cria_registro('B', 'C', "ARIT", 39, "1.0.0", "1.0.0", 'R');

        } sqrt_of08;
        
        typedef struct Const_Sqrt_of09 { 

          float valor=3.00000000000000;
          registro *reg=cria_registro('B', 'C', "ARIT", 40, "1.0.0", "1.0.0", 'R');

        } sqrt_of09;
        
        typedef struct Const_Sqrt_of10 { 

          float valor=3.16227766016838;
          registro *reg=cria_registro('B', 'C', "ARIT", 41, "1.0.0", "1.0.0", 'R');

        } sqrt_of10;
        
        typedef struct Const_Tesla { 

          float valor=1.60217657e-19;
          registro *reg=cria_registro('B', 'C', "ARIT", 42, "1.0.0", "1.0.0", 'R');

        } tesla;

    };
  
  } 
  
}


// Código para ser convertido para C++ (comentário dispensável para este método)

// From "./private/logaritmo.private.mdl";
// /////////////////////////////////////////////////////
// export var _logaritmoBase = (expo: number, x: number): number => {
//   let exp = expo , scan = x % exp;

//   while(scan != 0) {
//     scan = scan % exp;

//     if(expo ** exp != x) {   
//       if(expo ** exp != x) {
//         if (expo ** exp != x) {
//           exp += 0.0001;
//         }
//         exp += 0.001;
//       }
//       exp += 0.01; 
//     } 
//     exp += 0.1;
//   }
//   return exp;
// };

float form_absoluto(float n) 
{ 
  
  return n < 0.0 ? -1.0 * n : n;

}

// export var aceleracaoAngularMCUV = (velocidadeAngular: { inicial: number, final: number}, tempo: { inicial: number, final: number}): number => {
//   return (velocidadeAngular.final - velocidadeAngular.inicial) / (tempo.final - tempo.inicial);
// };
float form_aceleracao_angular_mcuv() 
{ 
  
  return 0.0;

}

// export var aceleracaoCentripetaMCU = (velocidade: number, raio: number): number => {
//   return (velocidade ** 2) / raio;
// };
float form_aceleracao_centripeta_mcu() 
{ 
  
  return 0.0;

}

// import { seno } from "./seno.mdl";
// export var aceleracaoPlanoInclinadoEixoX = (massa: number, gravidade: number, angulo: number): number => {
//   return massa * gravidade * seno(angulo);
// };
float form_aceleracao_plano_inclinadox() 
{ 
  
  return 0.0;

}

// import { cosseno } from "./cosseno.mdl";
// export var aceleracaoPlanoInclinadoEixoY = (massa: number, gravidade: number, angulo: number): number => {
//   return massa * gravidade * cosseno(angulo);
// };
float form_aceleracao_plano_inclinadoy() 
{ 
  
  return 0.0;

}

// export var aceleracao = (velocidade: number, tempo: {inicial: number, final: number}): number => {
//   return velocidade / (tempo.final - tempo.inicial);
// };
float form_aceleracao() 
{ 
  
  return 0.0;

}

// import { cosseno } from "./cosseno.mdl";
// export var alcanceLancamentoVertical = (velocidade: number, tempo: {inicial: number, final: number}, angulo: number): number => {
//   return velocidade * cosseno(angulo) * (tempo.final - tempo.inicial);
// };
float form_alcance_lancamento_vertical() 
{ 
  
  return 0.0;

}

// import { seno } from "./seno.mdl";
// export var alcanceMaximoLancamentoVertical = (velocidade: number, angulo: number, gravidade: number): number => {
//   return (velocidade ** 2 * (seno(angulo) ** 2)) / gravidade;
// };
float form_alcance_maximo_lancamento_vertical() 
{ 
  
  return 0.0;

}

// import { seno } from "./seno.mdl";
// export var alturaMaximaLancamentoVertical = (velocidadeInicial: number, gravidade: number, angulo: number): number => {
//   return (velocidadeInicial ** 2) * ((seno(angulo) ** 2) / 2) * gravidade;
// };
float form_altura_maxima_lancamento_vertical() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoBase2 = (x: number): number => {
//   return 1 ** _logaritmoBase(2, x);
// };
float form_antilogaritmo_base_2() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoBase2Mais1 = (x: number): number => {
//   return (1 ** _logaritmoBase(2, x)) + 1;
// };
float form_antilogaritmo_base_2_mais_1() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoBase2Menos1 = (x: number): number => {
//   return (1 ** _logaritmoBase(2, x)) - 1;
// };
float form_antilogaritmo_base_2_menos_1() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl"
// export var antilogaritmoBase10 = (x: number): number => {
//   return 1 ** _logaritmoBase(10, x);
// };
float form_antilogaritmo_base_10() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl"
// export var cologaritmoBase10Mais1 = (x: number): number => {
//   return (-1 * _logaritmoBase(10, x)) + 1;
// };
float form_antilogaritmo_base_10_mais_1() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl"
// export var cologaritmoBase10Menos1 = (x: number): number => {
//   return (-1 * _logaritmoBase(10, x)) - 1;
// };
float form_antilogaritmo_base_10_menos_1() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl"
// export var antilogaritmoBaseQualquer = (base: number, x: number): number => {
//   return 1 ** _logaritmoBase(base, x);
// };
float form_antilogaritmo_base_qualquer() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoBaseQualquerMais1 = (base: number, x: number): number => {
//   return (1 ** _logaritmoBase(base, x)) - 1;
// };
float form_antilogaritmo_base_qualquer_mais_1() 
{ 
  
  return 0.0;

}

// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoBaseQualquerMenos1 = (base: number, x: number): number => {
//   return (1 ** _logaritmoBase(base, x)) - 1;
// };
float form_antilogaritmo_base_qualquer_menos_1() 
{ 
  
  return 0.0;

}

// import { Aritmeticos } from "../../arithmetic.lib";
// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoNatural = (x: number): number => {
//   return 1 ** _logaritmoBase(Aritmeticos.Consts.c_euler, x);
// };
float form_antilogaritmo_base_natural() 
{ 
  
  return 0.0;

}

// import { Aritmeticos } from "../../arithmetic.lib";
// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoNaturalMais1 = (x: number): number => {
// return (1 ** _logaritmoBase(Aritmeticos.Consts.c_euler, x)) + 1;
// };
float form_antilogaritmo_base_natural_mais_1() 
{ 
  
  return 0.0;

}

// import { Aritmeticos } from "../../arithmetic.lib";
// import { _logaritmoBase } from "./private/logaritmo.private.mdl";
// export var antilogaritmoNaturalMenos1 = (x: number): number => {
//   return (1 ** _logaritmoBase(Aritmeticos.Consts.c_euler, x)) - 1;
// };
float form_antilogaritmo_base_natural_menos_1() 
{ 
  
  return 0.0;

}

// import { raizQuadrada } from "./raiz_quadrada.mdl";
// export var apotemaTriangulo = (lado: number): number => { 
//   return (lado ** 2) * raizQuadrada(3) / 2;
// };
float form_apotema_triangulo() 
{ 
  
  return 0.0;

}

float form_arco_cosecante() 
{ 
  
  return 0.0;

}

float form_arco_cosecante_hiperbolica() 
{ 
  
  return 0.0;

}

float form_arco_cosseno() 
{ 
  
  return 0.0;

}

float form_arco_cosseno_hiperbolico() 
{ 
  
  return 0.0;

}

float form_arco_cotangente() 
{ 
  
  return 0.0;

}

float form_arco_cotangente_hiperbolica() 
{ 
  
  return 0.0;

}

float form_arco_secante() 
{ 
  
  return 0.0;

}

float form_arco_secante_hiperbolica() 
{ 
  
  return 0.0;

}

float form_arco_seno() 
{ 
  
  return 0.0;

}

float form_arco_seno_hiperbolico() 
{ 
  
  return 0.0;

}

float form_arco_tangente() 
{ 
  
  return 0.0;

}

float form_arco_tangente_hiperbolica() 
{ 
  
  return 0.0;

}

float form_area_circulo() 
{ 
  
  return 0.0;

}

float form_area_circunferencia() 
{ 
  
  return 0.0;

}

float form_area_elipse() 
{ 
  
  return 0.0;

}

float form_area_esfera() 
{ 
  
  return 0.0;

}

float form_area_lateral_cilindro() 
{ 
  
  return 0.0;

}

float form_area_lateral_prisma() 
{ 
  
  return 0.0;

}

float form_area_lozango() 
{ 
  
  return 0.0;

}

float form_area_piramide() 
{ 
  
  return 0.0;

}

float form_area_poligono() 
{ 
  
  return 0.0;

}

float form_area_quadrado() 
{ 
  
  return 0.0;

}

float form_area_retangulo() 
{ 
  
  return 0.0;

}

float form_area_trapezio() 
{ 
  
  return 0.0;

}

float form_area_triangulo() 
{ 
  
  return 0.0;

}

float form_arranjo() 
{ 
  
  return 0.0;

}

float form_arrendonda_para_baixo() 
{ 
  
  return 0.0;

}

float form_arrendonda_para_cima() 
{ 
  
  return 0.0;

}

float form_arrendonda_para_decimal_32bits() 
{ 
  
  return 0.0;

}

float form_atrito() 
{ 
  
  return 0.0;

}

float form_calor_latente() 
{ 
  
  return 0.0;

}

float form_calor_sensivel() 
{ 
  
  return 0.0;

}

float form_celsius_fahrenheit() 
{ 
  
  return 0.0;

}

float form_celsius_kelvin() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_2() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_2_mais_1() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_2_menos_1() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_10() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_10_mais_1() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_10_menos_1() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_qualquer() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_qualquer_mais_1() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_qualquer_menos_1() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_natural() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_natural_mais_1() 
{ 
  
  return 0.0;

}

float form_cologaritmo_base_natural_menos_1() 
{ 
  
  return 0.0;

}

float form_combinacao() 
{ 
  
  return 0.0;

}

float form_concentracao() 
{ 
  
  return 0.0;

}

float form_consumo_de_energia() 
{ 
  
  return 0.0;

}

float form_contra_forca_eletromotriz() 
{ 
  
  return 0.0;

}

float form_cosecante() 
{ 
  
  return 0.0;

}

float form_cosecante_hiperbolica() 
{ 
  
  return 0.0;

}

float form_cosseno() 
{ 
  
  return 0.0;

}

float form_cosseno_hiperbolico() 
{ 
  
  return 0.0;

}

float form_cotangente() 
{ 
  
  return 0.0;

}

float form_cotangente_hiperbolica() 
{ 
  
  return 0.0;

}

float form_densidade() 
{ 
  
  return 0.0;

}

float form_densidade_populacional() 
{ 
  
  return 0.0;

}

float form_determinante_2x2() 
{ 
  
  return 0.0;

}

float form_determinante_3x3() 
{ 
  
  return 0.0;

}

float form_determinante_4x4() 
{ 
  
  return 0.0;

}

float form_diagrama_venn_2_conjuntos() 
{ 
  
  return 0.0;

}

float form_diagrama_venn_3_conjuntos() 
{ 
  
  return 0.0;

}

float form_diagrama_venn_4_conjuntos() 
{ 
  
  return 0.0;

}

float form_diagrama_venn_5_conjuntos() 
{ 
  
  return 0.0;

}

float form_dilatacao_linear() 
{ 
  
  return 0.0;

}

float form_dilatacao_superficial() 
{ 
  
  return 0.0;

}

float form_dilatacao_volumetrica() 
{ 
  
  return 0.0;

}

float form_divisao() 
{ 
  
  return 0.0;

}

float form_efeito_fotoeletrico() 
{ 
  
  return 0.0;

}

float form_efeito_joule() 
{ 
  
  return 0.0;

}

float form_empuxo_hidrostatica_hidrodinamica() 
{ 
  
  return 0.0;

}

float form_energia_cinetica() 
{ 
  
  return 0.0;

}

float form_energia_potencial_elastica() 
{ 
  
  return 0.0;

}

float form_energia_potencial_gravitacional() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_aceleracao() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_aceleracao_mhs() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_espaco() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_espaco_mcuv() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_forca() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_posicao_mhs() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_tempo() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_tempo_espaco() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_tempo_mcuv() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_velocidade() 
{ 
  
  return 0.0;

}

float form_equacao_horaria_velocidade_mhs() 
{ 
  
  return 0.0;

}

float form_equacao_lagrange() 
{ 
  
  return 0.0;

}

float form_equacao_torricelli() 
{ 
  
  return 0.0;

}

float form_escala_geografica() 
{ 
  
  return 0.0;

}

float form_espaco() 
{ 
  
  return 0.0;

}

float form_exponencial() 
{ 
  
  return 0.0;

}

float form_exponencial_mais_1() 
{ 
  
  return 0.0;

}

float form_exponencial_menos_1() 
{ 
  
  return 0.0;

}

float form_fahrenheit_celsius() 
{ 
  
  return 0.0;

}

float form_fahrenheit_kelvin() 
{ 
  
  return 0.0;

}

float form_forca_eletromotriz() 
{ 
  
  return 0.0;

}

float form_forca_gravitacional() 
{ 
  
  return 0.0;

}

float form_frequencia() 
{ 
  
  return 0.0;

}

float form_indice_desenvolvimento_humano() 
{ 
  
  return 0.0;

}

float form_indice_gini() 
{ 
  
  return 0.0;

}

float form_indice_massa_corporal() 
{ 
  
  return 0.0;

}

float form_juros_compostos() 
{ 
  
  return 0.0;

}

float form_juros_simples() 
{ 
  
  return 0.0;

}

float form_kelvin_celsius() 
{ 
  
  return 0.0;

}

float form_kelvin_fahrenheit() 
{ 
  
  return 0.0;

}

float form_lancamento_horizontal() 
{ 
  
  return 0.0;

}

float form_lei_de_coulomb() 
{ 
  
  return 0.0;

}

float form_lei_de_lenz() 
{ 
  
  return 0.0;

}

float form_lei_de_ohm() 
{ 
  
  return 0.0;

}

float form_lei_geral_dos_gases() 
{ 
  
  return 0.0;

}

float form_lei_de_newton() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_2() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_2_mais_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_2_menos_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_10() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_10_mais_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_10_menos_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_qualquer() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_qualquer_mais_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_qualquer_menos_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_natural() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_natural_mais_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_base_natural_menos_1() 
{ 
  
  return 0.0;

}

float form_logaritmo_periodo() 
{ 
  
  return 0.0;

}

float form_peso_aparente_hidroestatica_hidrodinamica() 
{ 
  
  return 0.0;

}

float form_plano_inclinado_com_atrito() 
{ 
  
  return 0.0;

}

float form_plano_inclinado_sem_atrito() 
{ 
  
  return 0.0;

}

float form_porcentagem() 
{ 
  
  return 0.0;

}

float form_porcentagem_por_1000() 
{ 
  
  return 0.0;

}

float form_porcentagem_por_10000() 
{ 
  
  return 0.0;

}

float form_porcentagem_por_100000() 
{ 
  
  return 0.0;

}

float form_potencia() 
{ 
  
  return 0.0;

}

float form_potencia_mais_1() 
{ 
  
  return 0.0;

}

float form_potencia_menos_1() 
{ 
  
  return 0.0;

}

float form_potencia_de_potencia() 
{ 
  
  return 0.0;

}

float form_potencia_de_potencia_mais_1() 
{ 
  
  return 0.0;

}

float form_potencia_de_potencia_menos_1() 
{ 
  
  return 0.0;

}

float form_potencial_elastico() 
{ 
  
  return 0.0;

}

float form_potencial_eletrico() 
{ 
  
  return 0.0;

}

float form_potencial_mecanico() 
{ 
  
  return 0.0;

}

float form_principio_fundamental_hidroestatica_hidrodinamica() 
{ 
  
  return 0.0;

}

float form_probabilidade() 
{ 
  
  return 0.0;

}

float form_quadrado_de_punnet() 
{ 
  
  return 0.0;

}

float form_quadrado_de_punnet_extendido() 
{ 
  
  return 0.0;

}

float form_quantidade_conjuntos() 
{ 
  
  return 0.0;

}

float form_raiz_cubica() 
{ 
  
  return 0.0;

}

float form_raiz_decima_potencia() 
{ 
  
  return 0.0;

}

float form_raiz_enesima() 
{ 
  
  return 0.0;

}

float form_raiz_nona_potencia() 
{ 
  
  return 0.0;

}

float form_raiz_oitava_potencia() 
{ 
  
  return 0.0;

}

float form_raiz_quadrada() 
{ 
  
  return 0.0;

}

float form_raiz_quarta_potencia() 
{ 
  
  return 0.0;

}

float form_raiz_quinta_potencia() 
{ 
  
  return 0.0;

}

float form_raiz_setima_potencia() 
{ 
  
  return 0.0;

}

float form_raiz_sexta_potencia() 
{ 
  
  return 0.0;

}

float form_raiz_de_tres_composta() 
{ 
  
  return 0.0;

}

float form_raiz_de_tres_simples() 
{ 
  
  return 0.0;

}

float form_relacao_euler() 
{ 
  
  return 0.0;

}

float form_rendimento() 
{ 
  
  return 0.0;

}

float form_resto_divisao() 
{ 
  
  return 0.0;

}

float form_secante() 
{ 
  
  return 0.0;

} 

float form_secante_hiperbolica() 
{ 
  
  return 0.0;

}

float form_seno() 
{ 
  
  return 0.0;

}

float form_seno_hiperbolico() 
{ 
  
  return 0.0;

}

float form_sinalizacao_octantes() 
{ 
  
  return 0.0;

}

float form_sinalizacao_quadrantes() 
{ 
  
  return 0.0;

}

float form_sistema_de_equacoes() 
{ 
  
  return 0.0;

}

float form_sistema_de_inequacoes() 
{ 

  return 0.0;


}

float form_sistemas_lineares() 
{ 
  
  return 0.0;

}

float form_soma() 
{ 
  
  return 0.0;

}

float form_subtracao() 
{ 
  
  return 0.0;

}

float form_tangente() 
{ 
  
  return 0.0;

}

float form_tangente_hiperbolica() 
{ 
  
  return 0.0;

}

float form_tempo() 
{ 
  
  return 0.0;

}

float form_teorema_boltzmann() 
{ 
  
  return 0.0;

}

float form_teorema_coulomb() 
{ 
  
  return 0.0;

}

float form_teorema_girard() 
{ 
  
  return 0.0;

}

float form_teorema_pitagoras_classico() 
{ 
  
  return 0.0;

}

float form_teorema_pitagoras_a_n() 
{ 
  
  return 0.0;

}

float form_teorema_pitagoras_b_c_h() 
{ 
  
  return 0.0;

}

float form_teorema_pitagoras_m_n() 
{ 
  
  return 0.0;

}

float form_teorema_plank() 
{ 
  
  return 0.0;

}

float form_teorema_stevin() 
{ 
  
  return 0.0;

}

float form_teorema_stirling() 
{ 
  
  return 0.0;

}

float form_teorema_tales_de_mileto() 
{ 
  
  return 0.0;

}

float form_titulacao() 
{ 
  
  return 0.0;

}

float form_torricelli_mcuv() 
{ 
  
  return 0.0;

}

float form_trabalho() 
{ 
  
  return 0.0;

}

float form_valor_maximo() 
{ 
  
  return 0.0;

}

float form_valor_minimo() 
{ 
  
  return 0.0;

}

float form_velocidade() 
{ 
  
  return 0.0;

}

float form_velocidade_media() 
{ 
  
  return 0.0;

}

float form_velocidade_angular_mcu() 
{ 
  
  return 0.0;

}

float form_velocidade_angular_mcuv() 
{ 
  
  return 0.0;

}

float form_velocidade_linear_mcu() 
{ 
  
  return 0.0;

}

float form_velocidade_linear_mcuv() 
{ 
  
  return 0.0;

}

float form_volume_cilindro() 
{ 
  
  return 0.0;

}

float form_volume_cone() 
{ 
  
  return 0.0;

}

float form_volume_cubo() 
{ 
  
  return 0.0;

}

float form_volume_dodecaedro() 
{ 
  
  return 0.0;

}

float form_volume_esfera() 
{ 
  
  return 0.0;

}

float form_volume_hexaedro() 
{ 
  
  return 0.0;

}

float form_volume_icosaedro() 
{ 
  
  return 0.0;

}

float form_volume_octaedro() 
{ 
  
  return 0.0;

}

float form_volume_paralelogramo() 
{ 
  
  return 0.0;

}

float form_volume_piramide() 
{ 
  
  return 0.0;

}

float form_volume_poligono_formato_lozango() 
{ 
  
  return 0.0;

}

float form_volume_poligono_formato_triangulo() 
{ 
  
  return 0.0;

}

float form_volume_poligono_formato_retangulo() 
{ 
  
  return 0.0;

}

float form_volume_poligono_formato_trapezio() 
{ 
  
  return 0.0;

}

float form_volume_prisma() 
{ 
  
  return 0.0;

}

float form_volume_tetraedro() 
{ 
  
  return 0.0;

}

#endif // _WARITMETICOS_HPP_
