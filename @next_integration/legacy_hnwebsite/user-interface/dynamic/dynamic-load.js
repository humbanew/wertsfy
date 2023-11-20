/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* Verificador */
var watch = new Visitador();
let idsSections = [];
idsSections.push('calc_principal', 'section_matriz');
watch.verificador();

let sectionPrincipal = document.getElementById('calc_principal');
let sectionCalculator = document.getElementById('section_matriz');

/* Ação de Mudança */
main.addEventListener("click", ()=>{
  sectionPrincipal.style.display = 'none';
  sectionCalculator.style.display = 'inline-block';
  window.scrollTo(0, 0);
});

calc.addEventListener("click", ()=>{
  sectionCalculator.style.display = 'none';
  sectionPrincipal.style.display = 'inline-block';
  window.scrollTo(0, 0);
});
