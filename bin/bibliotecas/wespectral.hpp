#ifndef _WESPECTRAL_HPP_
#define _WESPECTRAL_HPP_

#include <cstdio>
#include <cstdlib>
#include <iostream>

namespace WERTSFY
{

  namespace BIBLIOTECAS
  {

    struct Espectral
    {
      
      class Props
      {
        
        protected: void registros() { };
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

      };

      typedef struct OFC_COLORS { 
        // branco
        const char* model$a="\033[0;5;255;255;255m";
        // roxo
        const char* model$b="\033[0;5;49;23;122m"; 
        // azul1
        const char* model$c="\033[0;5;19;13;99m";
        // azul2
        const char* model$d="\033[0;5;7;1;80m";
        // azul3
        const char* model$e="\033[0;5;31;23;122m";
        // azul4
        const char* model$f="\033[0;5;7;0;92m";
        // azul5
        const char* model$g="\033[0;5;5;0;63m";
        // azul6
        const char* model$h="\033[0;5;3;0;37m";
      } ofc_colors;


    };


  }


}

#endif // _WESPECTRAL_HPP_
