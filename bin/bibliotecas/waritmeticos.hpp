#ifndef _WARITMETICOS_HPP_
#define _WARITMETICOS_HPP_

#include <cstdio>
#include <cstdlib>

#include "wcorebase.hpp"
#include "waritmeticos.io.hpp"

using namespace WERTSFY::COREBASE;
using namespace WERTSFY::BIBLIOTECAS;

static lista_registros *lr_glossario_aritmeticos = cria_lista_registros("WA");

namespace WERTSFY 
{ 
  
  namespace BIBLIOTECAS 
  { 
    
    struct Aritmeticos 
    { 

      class Props
      {
        
        protected: bool biblioteca_ativada = false;

        public:
          bool getIsBibliotecaAtivada() 
          { 
            return this->biblioteca_ativada;
          }

          bool setIsBibliotecaAtivada(bool bib_ativ)
          {
            this->biblioteca_ativada = bib_ativ;
          }

          // this->registros();

      };
    
      typedef struct Const_avogadro
      {

        float valor=$Avogadro;
        registro *reg=cria_registro('B', 'C', "ARIT", 1, "1.0.0", "1.0.0", 'R');

      } avogadro;

      typedef struct Const_cbrt_of01_02
      {

        float valor=$Cbrt_of01_02;
        registro *reg=cria_registro('B', 'C', "ARIT", 2, "1.0.0", "1.0.0", 'R');

      } cbrt_of01_02;

      typedef struct Const_cbrt_of01_04
      {

        float valor=$Cbrt_of01_04;
        registro *reg=cria_registro('B', 'C', "ARIT", 3, "1.0.0", "1.0.0", 'R');

      } cbrt_of01_04;

      typedef struct Const_cbrt_of01_06
      {

        float valor=$Cbrt_of01_06;
        registro *reg=cria_registro('B', 'C', "ARIT", 4, "1.0.0", "1.0.0", 'R');

      } cbrt_of01_06;

      typedef struct Const_cbrt_of01_08
      {

        float valor=$Cbrt_of01_08;
        registro *reg=cria_registro('B', 'C', "ARIT", 5, "1.0.0", "1.0.0", 'R');

      } cbrt_of01_08;

      typedef struct Const_cbrt_of01
      {

        float valor=$Cbrt_of01;
        registro *reg=cria_registro('B', 'C', "ARIT", 6, "1.0.0", "1.0.0", 'R');

      } cbrt_of01;

      typedef struct Const_cbrt_of02
      {

        float valor=$Cbrt_of02;
        registro *reg=cria_registro('B', 'C', "ARIT", 7, "1.0.0", "1.0.0", 'R');

      } cbrt_of02;

      typedef struct Const_cbrt_of03
      {

        float valor=$Cbrt_of03;
        registro *reg=cria_registro('B', 'C', "ARIT", 8, "1.0.0", "1.0.0", 'R');

      } cbrt_of03;

      typedef struct Const_cbrt_of04
      {

        float valor=1.99999999999999;
        registro *reg=cria_registro('B', 'C', "ARIT", 9, "1.0.0", "1.0.0", 'R');

      } cbrt_of04;

      typedef struct Const_cbrt_of05
      {

        float valor=2.23606797749979;
        registro *reg=cria_registro('B', 'C', "ARIT", 10, "1.0.0", "1.0.0", 'R');

      } cbrt_of05;

      typedef struct Const_cbrt_of06
      {

        float valor=2.58198889747161;
        registro *reg=cria_registro('B', 'C', "ARIT", 11, "1.0.0", "1.0.0", 'R');

      } cbrt_of06;

      typedef struct Const_cbrt_of07
      {

        float valor=2.91293118277239;
        registro *reg=cria_registro('B', 'C', "ARIT", 12, "1.0.0", "1.0.0", 'R');

      } cbrt_of07;

      typedef struct Const_cbrt_of08
      {

        float valor=3.26249509498958;
        registro *reg=cria_registro('B', 'C', "ARIT", 13, "1.0.0", "1.0.0", 'R');

      } cbrt_of08;

      typedef struct Const_cbrt_of09
      {

        float valor=3.62449963442055;
        registro *reg=cria_registro('B', 'C', "ARIT", 14, "1.0.0", "1.0.0", 'R');

      } cbrt_of09;

      typedef struct Const_cbrt_of10
      {

        float valor=3.99999999999999;
        registro *reg=cria_registro('B', 'C', "ARIT", 15, "1.0.0", "1.0.0", 'R');

      } cbrt_of10;

      typedef struct Const_coulomb { 

        float valor=1.60217657e-19;
        registro *reg=cria_registro('B', 'C', "ARIT", 16, "1.0.0", "1.0.0", 'R');

      } coulomb;
      
      typedef struct Const_euler { 

        float valor=2.7182818284590452353602874713527;
        registro *reg=cria_registro('B', 'C', "ARIT", 17, "1.0.0", "1.0.0", 'R');

      } euler;
      
      typedef struct Const_euler2 { 

        float valor=7.38905609893065;
        registro *reg=cria_registro('B', 'C', "ARIT", 18, "1.0.0", "1.0.0", 'R');

      } euler2;
      
      typedef struct Const_logarithm2 { 

        float valor=0.6931471805599453;
        registro *reg=cria_registro('B', 'C', "ARIT", 19, "1.0.0", "1.0.0", 'R');

      } logarithm2;
      
      typedef struct Const_logarithm2e { 

        float valor=1.4426950408889634;
        registro *reg=cria_registro('B', 'C', "ARIT", 20, "1.0.0", "1.0.0", 'R');

      } logarithm2e;
      
      typedef struct Const_logarithm10 { 

        float valor=2.302585092994046;
        registro *reg=cria_registro('B', 'C', "ARIT", 21, "1.0.0", "1.0.0", 'R');

      } logarithm10;
      
      typedef struct Const_logarithm10e { 

        float valor=0.43429448190325183;
        registro *reg=cria_registro('B', 'C', "ARIT", 22, "1.0.0", "1.0.0", 'R');

      } logarithm10e;
      
      typedef struct Const_maxvalue { 

        float valor=999999999999999;
        registro *reg=cria_registro('B', 'C', "ARIT", 23, "1.0.0", "1.0.0", 'R');

      } maxvalue;
      
      typedef struct Const_minvalue { 

        float valor=-999999999999999;
        registro *reg=cria_registro('B', 'C', "ARIT", 24, "1.0.0", "1.0.0", 'R');

      } minvalue;
      
      typedef struct Const_newton { 

        float valor=0.6931471805599453;
        registro *reg=cria_registro('B', 'C', "ARIT", 25, "1.0.0", "1.0.0", 'R');

      } newton;
      
      typedef struct Const_pi { 

        float valor=3.1415926535897932384626433832795;
        registro *reg=cria_registro('B', 'C', "ARIT", 26, "1.0.0", "1.0.0", 'R');

      } pi;
      
      typedef struct Const_plank { 

        float valor=6.62606957e-34;
        registro *reg=cria_registro('B', 'C', "ARIT", 27, "1.0.0", "1.0.0", 'R');

      } plank;
      
      typedef struct Const_sqrt_of01_02 { 

        float valor=0.7937005259840998;
        registro *reg=cria_registro('B', 'C', "ARIT", 28, "1.0.0", "1.0.0", 'R');

      } sqrt_of01_02;
      
      typedef struct Const_sqrt_of01_04 { 

        float valor=0.6299605249474366;
        registro *reg=cria_registro('B', 'C', "ARIT", 29, "1.0.0", "1.0.0", 'R');

      } sqrt_of01_04;
      
      typedef struct Const_sqrt_of01_06 { 

        float valor=0.5503212081491045;
        registro *reg=cria_registro('B', 'C', "ARIT", 30, "1.0.0", "1.0.0", 'R');

      } sqrt_of01_06;
      
      typedef struct Const_sqrt_of01_08 {

        float valor=0.500000000000000;
        registro *reg=cria_registro('B', 'C', "ARIT", 31, "1.0.0", "1.0.0", 'R');

      } sqrt_of01_08;
      
      typedef struct Const_sqrt_of01 { 

        float valor=1.00000000000000;
        registro *reg=cria_registro('B', 'C', "ARIT", 32, "1.0.0", "1.0.0", 'R');

      } sqrt_of01;
      
      typedef struct Const_sqrt_of02 { 

        float valor=1.414213562373095;
        registro *reg=cria_registro('B', 'C', "ARIT", 33, "1.0.0", "1.0.0", 'R');

      } sqrt_of02;
      
      typedef struct Const_sqrt_of03 {

        float valor=1.732050807568877;
        registro *reg=cria_registro('B', 'C', "ARIT", 34, "1.0.0", "1.0.0", 'R');

      } sqrt_of03;
      
      typedef struct Const_sqrt_of04 { 

        float valor=2.00000000000000;
        registro *reg=cria_registro('B', 'C', "ARIT", 35, "1.0.0", "1.0.0", 'R');

      } sqrt_of04;
      
      typedef struct Const_sqrt_of05 { 

        float valor=2.23606797749979;
        registro *reg=cria_registro('B', 'C', "ARIT", 36, "1.0.0", "1.0.0", 'R');

      } sqrt_of05;
      
      typedef struct Const_sqrt_of06 { 

        float valor=2.449489742783178;
        registro *reg=cria_registro('B', 'C', "ARIT", 37, "1.0.0", "1.0.0", 'R');

      } sqrt_of06;
      
      typedef struct Const_sqrt_of07 { 

        float valor=2.64575131106459;
        registro *reg=cria_registro('B', 'C', "ARIT", 38, "1.0.0", "1.0.0", 'R');

      } sqrt_of07;
      
      typedef struct Const_sqrt_of08 { 

        float valor=2.82842712474619;
        registro *reg=cria_registro('B', 'C', "ARIT", 39, "1.0.0", "1.0.0", 'R');

      } sqrt_of08;
      
      typedef struct Const_sqrt_of09 { 

        float valor=3.00000000000000;
        registro *reg=cria_registro('B', 'C', "ARIT", 40, "1.0.0", "1.0.0", 'R');

      } sqrt_of09;
      
      typedef struct Const_sqrt_of10 { 

        float valor=3.16227766016838;
        registro *reg=cria_registro('B', 'C', "ARIT", 41, "1.0.0", "1.0.0", 'R');

      } sqrt_of10;
      
      typedef struct Const_tesla { 

        float valor=1.60217657e-19;
        registro *reg=cria_registro('B', 'C', "ARIT", 42, "1.0.0", "1.0.0", 'R');

      } tesla;


    };


  }


}

struct Form_absoluto {};

struct Form_aceleracao_angular_mcuv {};

struct Form_aceleracao_centripeta_mcu {};

struct Form_aceleracao_plano_inclinadox {};

struct Form_aceleracao_plano_inclinadoy {};

struct Form_aceleracao {};

struct Form_alcance_lancamento_vertical {};

struct Form_alcance_maximo_lancamento_vertical {};

struct Form_altura_maxima_lancamento_vertical {};

struct Form_antilogaritmo_base_2 {};

struct Form_antilogaritmo_base_2_mais_1 {};

struct Form_antilogaritmo_base_2_menos_1 {};

struct Form_antilogaritmo_base_10 {};

struct Form_antilogaritmo_base_10_mais_1 {};

struct Form_antilogaritmo_base_10_menos_1 {};

struct Form_antilogaritmo_base_qualquer {};

struct Form_antilogaritmo_base_qualquer_mais_1 {};

struct Form_antilogaritmo_base_qualquer_menos_1 {};

struct Form_antilogaritmo_base_natural {};

struct Form_antilogaritmo_base_natural_mais_1 {};

struct Form_antilogaritmo_base_natural_menos_1 {};

struct Form_apotema_triangulo {};

struct Form_arco_cosecante {};

struct Form_arco_cosecante_hiperbolica {};

struct Form_arco_cosseno {};

struct Form_arco_cosseno_hiperbolico {};

struct Form_arco_cotangente {};

struct Form_arco_cotangente_hiperbolica {};

struct Form_arco_secante {};

struct Form_arco_secante_hiperbolica {};

struct Form_arco_seno {};

struct Form_arco_seno_hiperbolico {};

struct Form_arco_tangente {};

struct Form_arco_tangente_hiperbolica {};

struct Form_area_circulo {};

struct Form_area_circunferencia {};

struct Form_area_elipse {};

struct Form_area_esfera {};

struct Form_area_lateral_cilindro {};

struct Form_area_lateral_prisma {};

struct Form_area_lozango {};

struct Form_area_piramide {};

struct Form_area_poligono {};

struct Form_area_quadrado {};

struct Form_area_retangulo {};

struct Form_area_trapezio {};

struct Form_area_triangulo {};

struct Form_arranjo {};

struct Form_arrendonda_para_baixo {};

struct Form_arrendonda_para_cima {};

struct Form_arrendonda_para_decimal_32bits {};

struct Form_atrito {};

struct Form_calor_latente {};

struct Form_calor_sensivel {};

struct Form_celsius_fahrenheit {};

struct Form_celsius_kelvin {};

struct Form_cologaritmo_base_2 {};

struct Form_cologaritmo_base_2_mais_1 {};

struct Form_cologaritmo_base_2_menos_1 {};

struct Form_cologaritmo_base_10 {};

struct Form_cologaritmo_base_10_mais_1 {};

struct Form_cologaritmo_base_10_menos_1 {};

struct Form_cologaritmo_base_qualquer {};

struct Form_cologaritmo_base_qualquer_mais_1 {};

struct Form_cologaritmo_base_qualquer_menos_1 {};

struct Form_cologaritmo_base_natural {};

struct Form_cologaritmo_base_natural_mais_1 {};

struct Form_cologaritmo_base_natural_menos_1 {};

struct Form_combinacao {};

struct Form_concentracao {};

struct Form_consumo_de_energia {};

struct Form_contra_forca_eletromotriz {};

struct Form_cosecante {};

struct Form_cosecante_hiperbolica {};

struct Form_cosseno {};

struct Form_cosseno_hiperbolico {};

struct Form_cotangente {};

struct Form_cotangente_hiperbolica {};

struct Form_densidade {};

struct Form_densidade_populacional {};

struct Form_determinante_2x2 {};

struct Form_determinante_3x3 {};

struct Form_determinante_4x4 {};

struct Form_diagrama_venn_2_conjuntos {};

struct Form_diagrama_venn_3_conjuntos {};

struct Form_diagrama_venn_4_conjuntos {};

struct Form_diagrama_venn_5_conjuntos {};

struct Form_dilatacao_linear {};

struct Form_dilatacao_superficial {};

struct Form_dilatacao_volumetrica {};

struct Form_divisao {};

struct Form_efeito_fotoeletrico {};

struct Form_efeito_joule {};

struct Form_empuxo_hidrostatica_hidrodinamica {};

struct Form_energia_cinetica {};

struct Form_energia_potencial_elastica {};

struct Form_energia_potencial_gravitacional {};

struct Form_equacao_horaria_aceleracao {};

struct Form_equacao_horaria_aceleracao_mhs {};

struct Form_equacao_horaria_espaco {};

struct Form_equacao_horaria_espaco_mcuv {};

struct Form_equacao_horaria_forca {};

struct Form_equacao_horaria_posicao_mhs {};

struct Form_equacao_horaria_tempo {};

struct Form_equacao_horaria_tempo_espaco {};

struct Form_equacao_horaria_tempo_mcuv {};

struct Form_equacao_horaria_velocidade {};

struct Form_equacao_horaria_velocidade_mhs {};

struct Form_equacao_lagrange {};

struct Form_equacao_torricelli {};

struct Form_escala_geografica {};

struct Form_espaco {};

struct Form_exponencial {};

struct Form_exponencial_mais_1 {};

struct Form_exponencial_menos_1 {};

struct Form_fahrenheit_celsius {};

struct Form_fahrenheit_kelvin {};

struct Form_forca_eletromotriz {};

struct Form_forca_gravitacional {};

struct Form_frequencia {};

struct Form_indice_desenvolvimento_humano {};

struct Form_indice_gini {};

struct Form_indice_massa_corporal {};

struct Form_juros_compostos {};

struct Form_juros_simples {};

struct Form_kelvin_celsius {};

struct Form_kelvin_fahrenheit {};

struct Form_lancamento_horizontal {};

struct Form_lei_de_coulomb {};

struct Form_lei_de_lenz {};

struct Form_lei_de_ohm {};

struct Form_lei_geral_dos_gases {};

struct Form_lei_de_newton {};

struct Form_logaritmo_base_2 {};

struct Form_logaritmo_base_2_mais_1 {};

struct Form_logaritmo_base_2_menos_1 {};

struct Form_logaritmo_base_10 {};

struct Form_logaritmo_base_10_mais_1 {};

struct Form_logaritmo_base_10_menos_1 {};

struct Form_logaritmo_base_qualquer {};

struct Form_logaritmo_base_qualquer_mais_1 {};

struct Form_logaritmo_base_qualquer_menos_1 {};

struct Form_logaritmo_base_natural {};

struct Form_logaritmo_base_natural_mais_1 {};

struct Form_logaritmo_base_natural_menos_1 {};

struct Form_logaritmo_periodo {};

struct Form_peso_aparente_hidroestatica_hidrodinamica {};

struct Form_plano_inclinado_com_atrito {};

struct Form_plano_inclinado_sem_atrito {};

struct Form_porcentagem {};

struct Form_porcentagem_por_1000 {};

struct Form_porcentagem_por_10000 {};

struct Form_porcentagem_por_100000 {};

struct Form_potencia {};

struct Form_potencia_mais_1 {};

struct Form_potencia_menos_1 {};

struct Form_potencia_de_potencia {};

struct Form_potencia_de_potencia_mais_1 {};

struct Form_potencia_de_potencia_menos_1 {};

struct Form_potencial_elastico {};

struct Form_potencial_eletrico {};

struct Form_potencial_mecanico {};

struct Form_principio_fundamental_hidroestatica_hidrodinamica {};

struct Form_probabilidade {};

struct Form_quadrado_de_punnet {};

struct Form_quadrado_de_punnet_extendido {};

struct Form_quantidade_conjuntos {};

struct Form_raiz_cubica {};

struct Form_raiz_decima_potencia {};

struct Form_raiz_enesima {};

struct Form_raiz_nona_potencia {};

struct Form_raiz_oitava_potencia {};

struct Form_raiz_quadrada {};

struct Form_raiz_quarta_potencia {};

struct Form_raiz_quinta_potencia {};

struct Form_raiz_setima_potencia {};

struct Form_raiz_sexta_potencia {};

struct Form_raiz_de_tres_composta {};

struct Form_raiz_de_tres_simples {};

struct Form_relacao_euler {};

struct Form_rendimento {};

struct Form_resto_divisao {};

struct Form_secante {};

struct Form_secante_hiperbolica {};

struct Form_seno {};

struct Form_seno_hiperbolico {};

struct Form_sinalizacao_octantes {};

struct Form_sinalizacao_quadrantes {};

struct Form_sistema_de_equacoes {};

struct Form_sistema_de_inequacoes {};

struct Form_sistemas_lineares {};

struct Form_soma {};

struct Form_subtracao {};

struct Form_tangente {};

struct Form_tangente_hiperbolica {};

struct Form_tempo {};

struct Form_teorema_boltzmann {};

struct Form_teorema_coulomb {};

struct Form_teorema_girard {};

struct Form_teorema_pitagoras_classico {};

struct Form_teorema_pitagoras_a_n {};

struct Form_teorema_pitagoras_b_c_h {};

struct Form_teorema_pitagoras_m_n {};

struct Form_teorema_plank {};

struct Form_teorema_stevin {};

struct Form_teorema_stirling {};

struct Form_teorema_tales_de_mileto {};

struct Form_titulacao {};

struct Form_torricelli_mcuv {};

struct Form_trabalho {};

struct Form_valor_maximo {};

struct Form_valor_minimo {};

struct Form_velocidade {};

struct Form_velocidade_media {};

struct Form_velocidade_angular_mcu {};

struct Form_velocidade_angular_mcuv {};

struct Form_velocidade_linear_mcu {};

struct Form_velocidade_linear_mcuv {};

struct Form_volume_cilindro {};

struct Form_volume_cone {};

struct Form_volume_cubo {};

struct Form_volume_dodecaedro {};

struct Form_volume_esfera {};

struct Form_volume_hexaedro {};

struct Form_volume_icosaedro {};

struct Form_volume_octaedro {};

struct Form_volume_paralelogramo {};

struct Form_volume_piramide {};

struct Form_volume_poligono_formato_lozango {};

struct Form_volume_poligono_formato_triangulo {};

struct Form_volume_poligono_formato_retangulo {};

struct Form_volume_poligono_formato_trapezio {};

struct Form_volume_prisma {};

struct Form_volume_tetraedro {};

#endif // _WARITMETICOS_HPP_
