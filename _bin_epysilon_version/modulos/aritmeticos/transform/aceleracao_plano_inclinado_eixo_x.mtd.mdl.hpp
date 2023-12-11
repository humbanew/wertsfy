#ifndef ACELERACAO_PLANO_INCLINADO_EIXO_X_MTD_MDL_HPP
#define ACELERACAO_PLANO_INCLINADO_EIXO_X_MTD_MDL_HPP

#include "../pi.cnst.mdl.hpp"
#include "seno.mtd.mdl.hpp"

float $Aceleracao_plano_inclinado_eixo_x(float massa, float gravidade, float angulo) 
{ 
  return massa * gravidade * $Seno(angulo);
}

#endif // ACELERACAO_PLANO_INCLINADO_EIXO_X_MTD_MDL_HPP
