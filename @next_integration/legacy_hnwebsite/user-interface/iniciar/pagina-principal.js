/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

let montador = new Montador();

/* Section Matriz */
montador.interligaBody(montador.montaElemento("section", "section_matriz", "section_matriz", ""));

/* Imagem de Ínicio */
montador.interligaElementos(montador.montaElemento("section", "section_img", "section_img", ""), "section_matriz");
let textoLema = "Seja bem-vindo a Humbanew. Busque a diferença para um planeta melhor.";
montador.interligaElementos(montador.montaElemento("p", "img_texto", "img_txt", textoLema), "section_img");

/* Modelos */
montador.interligaElementos(montador.montaElemento("section", "section_primaria", "section_primaria", ""), "section_matriz");
montador.interligaElementos(montador.montaElemento("p", "titulo_opcoes", "titulo_op", "Modelos"), "section_primaria");
montador.interligaElementos(montador.montaElemento("div", "div_opcoes", "div_op", ""), "section_primaria");

let nomeModelos = [];
nomeModelos.push("Spectre", "Shadows", "Icarus", "Flaws", "Eudoxus", "Avarua", "Grand Eudoxus", "Fared", "Forsky", "Dirtygrow", "Infinity", "Predator", "Scraball", "Nano");

montador.interligaElementos(montador.montaElemento("div", "card_azul__descricao", "card_1"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[0]), "card_1");

montador.interligaElementos(montador.montaElemento("div", "card_azul__descricao", "card_2"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[1]), "card_2");

montador.interligaElementos(montador.montaElemento("div", "card_verde__descricao", "card_3"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[2]), "card_3");

montador.interligaElementos(montador.montaElemento("div", "card_verde__descricao", "card_4"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[3]), "card_4");

montador.interligaElementos(montador.montaElemento("div", "card_amarelo__descricao", "card_5"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[4]), "card_5");

montador.interligaElementos(montador.montaElemento("div", "card_amarelo__descricao", "card_6"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[5]), "card_6");

montador.interligaElementos(montador.montaElemento("div", "card_azul__descricao", "card_7"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[6]), "card_7");

montador.interligaElementos(montador.montaElemento("div", "card_azul__descricao", "card_8"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[7]), "card_8");

montador.interligaElementos(montador.montaElemento("div", "card_verde__descricao", "card_9"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[8]), "card_9");

montador.interligaElementos(montador.montaElemento("div", "card_verde__descricao", "card_10"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[9]), "card_10");

montador.interligaElementos(montador.montaElemento("div", "card_amarelo__descricao", "card_11"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[10]), "card_11");

montador.interligaElementos(montador.montaElemento("div", "card_amarelo__descricao", "card_12"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[11]), "card_12");

montador.interligaElementos(montador.montaElemento("div", "card_azul__descricao", "card_13"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[12]), "card_13");

montador.interligaElementos(montador.montaElemento("div", "card_azul__descricao", "card_14"), "div_op");
montador.interligaElementos(montador.montaElemento("p", "card_titulo", "", nomeModelos[13]), "card_14");

/* Institucional */
montador.interligaElementos(montador.montaElemento("section", "institucional", "institucional", ""), "section_matriz");
montador.interligaElementos(montador.montaElemento("p", "titulo_institucional", "titulo_institucional", "Institucional"), "institucional");
let textoInstitucional = "A Humbanew veio com o objetivo de trazer ao público novas experiências sobre o conceito de automóveis, uma marca desenvolvida no Brasil, demonstrando que o mercado local pode ser aprimorado passo a passo até um ideial desejado por nós e por todos.";
montador.interligaElementos(montador.montaElemento("p", "texto_institucional", "texto_institucional", textoInstitucional), "institucional");

/* Subdivisões */
montador.interligaElementos(montador.montaElemento("section", "subdivisoes", "subdivisoes", ""), "section_matriz");
montador.interligaElementos(montador.montaElemento("p", "titulo_subdivisoes", "titulo_subdivisoes", "Subdivisões"), "subdivisoes");
let textoSubdivisao = "As subdivisões são métodos de auxílio e agilidades nos procedimentos da Humbanew, tornando nossas atividades mais organizadas e eficientes em qualquer momento.";
montador.interligaElementos(montador.montaElemento("p", "texto_subdivisoes", "texto_subdivisoes", textoSubdivisao), "subdivisoes");

/* Fale Conosco */
montador.interligaElementos(montador.montaElemento("section", "fale_conosco", "fale_conosco", ""), "section_matriz");
montador.interligaElementos(montador.montaElemento("p", "titulo_fale_conosco", "titulo_fale_conosco", "Fale Conosco"), "fale_conosco");
let textoFaleConosco = "Nós gostamos de feedbacks. Sobre nossos produtos e posicionamentos fazendo alterações em nosso mecanismo de interação com o público. Caso tenha uma dúvida geral, vá a página da Humbanew Helps, caso seja algo mais específico vá a página da Humbanew Community, se apenas deseja falar conosco e manter contato vá a página Fale Conosco. Todos presentes no nosso menu do botão do cabeçalho.";
montador.interligaElementos(montador.montaElemento("p", "texto_fale_conosco", "texto_fale_conosco", textoFaleConosco), "fale_conosco");
