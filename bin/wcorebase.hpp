#ifndef _WCOREBASE_HPP_
#define _WCOREBASE_HPP_

#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <regex.h>

// Constantes
  // #ffffff
  #define WTSFY_BRANCO "\033[0;5;255;255;255m"
  // #31177a
  #define WTSFY_ROXO_0 "\033[0;5;49;23;122m"
  // #130d63
  #define WTSFY_AZUL_1 "\033[0;5;19;13;99m"
  // #070150
  #define WTSFY_AZUL_2 "\033[0;5;7;1;80m"
  // #1f177a
  #define WTSFY_AZUL_3 "\033[0;5;31;23;122m"
  // #07005c
  #define WTSFY_AZUL_4 "\033[0;5;7;0;92m"
  // #05003f
  #define WTSFY_AZUL_5 "\033[0;5;5;0;63m"
  // #030025
  #define WTSFY_AZUL_6 "\033[0;5;3;0;37m"

typedef struct Registro 
{ 
  // Props
  const char wpropriedade='W';
  char wcategoria;
  char wtipagem;
  char* wnamespace;
  int wserial;
  const char wrefid0='#';
  char* wversaoimplentacao;
  const char wrefid1='#';
  char* wversaoultimaatualizacao;
  char wstatus;

  // Exceptions (Excessões)
  int wpropsSizeException(registro wn) { 
    
    if ( (strlen(wn.wnamespace) > 5) ) { 
      printf("\n[WERR0601]: Wertsfy component register namespace size is invalid!\n"); 
      return 1; 
    }
  
    if( (wn.wserial > 999) ) { 
      printf("\n[WERR0602]: Wertsfy component register serial is invalid!\n"); 
      return 1; 
    }

    if( (strlen(wn.wversaoimplentacao) > 4) ) { 
      printf("\n[WERR0603]: Wertsfy component register implementation version size is invalid!\n"); 
      return 1; 
    }

    if( (strlen(wn.wversaoultimaatualizacao) > 4) ) { 
      printf("\n[WERR0604]: Wertsfy component register last update version size is invalid!\n"); 
      return 1; 
    }

  }

  // Linked List (Lista Encadeada)
  struct Registro *proximo;
  struct Registro *anterior;

} registro*;


typedef struct ListaRegistros { 
  struct Registro *inicio;
  struct Registro *fim;
  int tamanho;
};

#endif // _WCOREBASE_HPP_
