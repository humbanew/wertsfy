#ifndef _WTEMPLATES_HPP_
#define _WTEMPLATES_HPP_

#include <cstdio>
#include <cstdlib>
#include <iostream>

// Código que ainda precisa definir localidade correta;
namespace CODIGO_SOLTO
{
  template <char* v> char* VAR = v;
  char* WTSFY_COR_BRANCA = VAR<v="\033[0;5;255;255;255m">;
  char* WTSFY_COR_ROXA1 = VAR<v="\033[0;5;49;23;122m">;
  char* WTSFY_COR_AZUL1 = VAR<v="\033[0;5;19;13;99m">;
  char* WTSFY_COR_AZUL2 = VAR<v="\033[0;5;7;1;80m">;
  char* WTSFY_COR_AZUL3 = VAR<v="\033[0;5;31;23;122m">;
  char* WTSFY_COR_AZUL4 = VAR<v="\033[0;5;7;0;92m">;
  char* WTSFY_COR_AZUL5 = VAR<v="\033[0;5;5;0;63m">;
  char* WTSFY_COR_AZUL6 = VAR<v="\033[0;5;3;0;37m">;
}

#endif // _WTEMPLATES_HPP_
