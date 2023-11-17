#include <cstdio>
#include <cstdlib>
#include <regex>

#include "wconfig.hpp"
#include "wcorebase.hpp"
#include "waritmeticos.hpp"
#include "wespectral.hpp"

// prototipos de assinaturas de função
void debug();

int main(void) 
{ 
  debug();
  return 0;
}

void debug() 
{ 

  // Testando a função de criação de registro
  registro *r = cria_registro('B', 'C', "ARIT", 1, "1.0.0", "1.0.0", 'R');

}
