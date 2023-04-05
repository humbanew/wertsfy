export interface TExpressoes {

  determinantes: [
    "#d2x2",
    {
      a00: number,
      a01: number,
      a10: number,
      a11: number
    }
  ] | [
    "#d3x3",
    {
      a00: number,
      a01: number,
      a02: number,
      a10: number,
      a11: number,
      a12: number,
      a20: number,
      a21: number,
      a22: number
    }
  ]

  funcoesCartesianas:
  "#grade1"
  | "#grade2"
  | "#grade3"
  | "#grade4"
  | "#grade5"
  | "#grade6"
  | "#grade7"
  | "#grade8"

  operacoesComuns:
  "#plus"
  | "#minus"
  | "#divisor"
  | "#multip"

  operacoesVetores: [
    "#distanciaVetorEntreDoisPontos",
    [
      "#r2",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number
      }
    ] | [
      "#r3",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        z1: number,
        z2: number
      }
    ]
  ] | [
    "#modulo",
    [
      "#r2",
      {
        x: number,
        y: number
      }
    ] | [
      "#r3",
      {
        x: number,
        y: number,
        z: number
      }
    ]
  ] | [
    "#versor",
    [
      "#r2",
      {
        x: number,
        y: number
      }
    ] | [
      "#r3",
      {
        x: number,
        y: number,
        z: number
      }
    ]
  ] | [
    "#projecaoVetorSobreOutroVetor",
    [
      "#r2",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number
      }
    ] | [
      "#r3",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        z1: number,
        z2: number
      }
    ]
  ] | [
    "#soma",
    [
      "#r2",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number
      }
    ] | [
      "#r3",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        z1: number,
        z2: number
      }
    ]
  ] | [
    "#subtracao",
    [
      "#r2",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number
      }
    ] | [
      "#r3",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        z1: number,
        z2: number
      }
    ]
  ] | [
    "#produtoEscalar",
    [
      "#r2",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number
      }
    ] | [
      "#r3",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        z1: number,
        z2: number
      }
    ]
  ] | [
    "#divisao",
    [
      "#r2",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number
      }
    ] | [
      "#r3",
      {
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        z1: number,
        z2: number
      }
    ]
  ] | [
    "#pontoMedio",
    [
      "#r2",
      {
        x: number,
        y: number
      }
    ] | [
      "#r3",
      {
        x: number,
        y: number,
        z: number
      }
    ]
  ] | [
    "#cossenosDiretores",
    [
      "#r2",
      {
        x: number,
        y: number
      }
    ] | [
      "#r3",
      {
        x: number,
        y: number
      }
    ]
  ]

  operacoesDiversos: [
    "#escalaGeografica",
    {
      tamanhoReal: number,
      tamanhoFicticio: number
    }
  ] | [
    "#idh",
    {
      saude: number,
      educacao: number,
      renda: number,
      populacao: number,
      rpc: number
    }
  ] | [
    "#gini",
    {
      pnb: number,
      populacao: number
    }
  ] | [
    "#imc",
    {
      peso: number,
      altura: number
    }
  ] | [
    "#densidadePopulacional",
    {
      espaco: number,
      populacao: number
    }
  ]

  operacoesNumericos: [
    "#numerosPares",
    {
      numero: number
    }
  ] | [
    "#numerosImpares",
    {
      numero: number
    }
  ] | [
    "#numerosPrimos",
    {
      numerosPesquisados: number
    }
  ] | [
    "#conjuntos",
    {
      elementos: number
    }
  ]

  operacoesDiagramaVenn: [
    "#venn2Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number
    }
  ] | [
    "#venn3Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number[],
      numerosGrupoTresNucleos: number
    }
  ] | [
    "#venn4Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number[],
      numerosGrupoTresNucleos: number[],
      numerosGrupoQuatroNucleos: number
    }
  ]

  operacoesGeometricos: [
    "#areaTrianguloQualquer",
    {
      lado: number
    }
  ] | [
    "#apotemaTrianguloQualquer",
    {
      lado: number
    }
  ] | [
    "#areaQuadradoQualquer",
    {
      lado: number
    }
  ] | [
    "#areaRetanguloQualquer",
    {
      comprimento: number,
      largura: number
    }
  ] | [
    "#areaCirculoQualquer",
    {
      raio: number
    }
  ] | [
    "#areaElipseQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#areaPiramideQualquer",
    {
      base: number,
      altura: number
    }
  ] | [
    "#areaConeQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#areaCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#areaTrapezioQualquer",
    {
      baseMaior: number,
      baseMenor: number,
      altura: number
    }
  ] | [
    "#areaLozangoQualquer",
    {
      diagonalMaior: number,
      diagonalMenor: number
    }
  ] | [
    "#areaEsferaQualquer",
    {
      raio: number
    }
  ] | [
    "#areaSuperficieQualquer",
    {
      comprimento: number,
      largura: number
    }
  ] | [
    "#volumeSuperficieQualquer",
    {
      area: number,
      comprimento: number,
      largura: number
    }
  ] | [
    "#areaPoligonoQualquer",
    {
      comprimento: number,
      largura: number,
      nLados: number
    }
  ] | [
    "#volumePoligonoFormatoLozangoQualquer",
    {
      diagonalMaior: number,
      diagonalMenor: number,
      altura: number
    }
  ] | [
    "#volumePoligonoFormatoTrapezioQualquer",
    {
      baseMaior: number,
      baseMenor: number,
      altura: number
    }
  ] | [
    "#areaParalelogramoQualquer",
    {
      lado: number,
      altura: number
    }
  ] | [
    "#areaLateralPrismaQualquer",
    {
      comprimento: number,
      largura: number,
      nLados: number
    }
  ] | [
    "#volumePrismaQualquer",
    {
      area: number,
      comprimento: number,
      largura: number
    }
  ] | [
    "#volumeCuboQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeParalelogramoQualquer",
    {
      comprimento: number,
      largura: number,
      altura: number
    }
  ] | [
    "#volumePiramideQualquer",
    {
      base: number,
      altura: number
    }
  ] | [
    "#volumeTetraedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeHexaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeOctaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeDodecaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeIcosaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeConeQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#volumeCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#volumeEsferaQualquer",
    {
      raio: number
    }
  ] | [
    "#volumeRombQualquer",
    {
      aresta: number
    }
  ] | [
    "#areaCircunferenciaQualquer",
    {
      raio: number
    }
  ] | [
    "#areaLateralCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ]

  operacoesCartesianos: [
    "#primeiroGrau",
    {
      exp: any
    }
  ] | [
    "#segundoGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ] | [
    "#terceiroGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ] | [
    "#quartoGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ]

  porcentagem: [
    "#10E2",
    {
      value: number
    }
  ] | [
    "#10E3",
    {
      value: number
    }
  ] | [
    "#10E4",
    {
      value: number
    }
  ] | [
    "#10E5",
    {
      value: number
    }
  ] | [
    "#AnyNumber",
    {
      value: number,
      valueTotal: number
    }
  ]

  triangulosPitagoricos: [
    "#classic(a and b)",
    {
      a: number,
      b: number
    }
  ] | [
    "#t1(m and n)",
    {
      m: number,
      n: number
    }
  ] | [
    "#t2(a and n)",
    {
      a: number,
      n: number
    }
  ] | [
    "#t3(b, c and h)",
    {
      b: number,
      c: number,
      h: number
    }
  ]

  variaveisDePascal:
  "#forca1Null"
  | "#forca2Null"
  | "#area1Null"
  | "#area2Null"

  variaveisDeTemperatura:
  "#celsiusFahrenheit"
  | "#celsiusKelvin"
  | "#fahrenheitCelsius"
  | "#fahrenheitKelvin"
  | "#kelvinCelsius"
  | "#kelvinFahrenheit"

  variaveisDeTitulacao:
  "#massaBaseNull"
  | "#massaAcidoNull"
  | "#volumeBaseNull"
  | "#volumeAcidoNull"

}
