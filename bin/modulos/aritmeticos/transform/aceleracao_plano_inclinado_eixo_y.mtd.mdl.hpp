#ifndef ACELERACAO_PLANO_INCLINADO_EIXO_Y_MTD_MDL_HPP
#define ACELERACAO_PLANO_INCLINADO_EIXO_Y_MTD_MDL_HPP

#include "../pi.cnst.mdl.hpp"
#include "cosseno.mtd.mdl.hpp"

float $Aceleracao_plano_inclinado_eixo_y(float massa, float gravidade, float angulo) 
{ 
  return massa * gravidade * $Cosseno(angulo);
}

#endif // ACELERACAO_PLANO_INCLINADO_EIXO_Y_MTD_MDL_HPP
