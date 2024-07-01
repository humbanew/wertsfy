let $3sz3: string[3][3],
  $4sz4: string[4][4],
  $5sz5: string[5][5],
  $6sz6: string[6][6];
export let Cubbus = {
  arenas: {
    "3x3": $3sz3,
    "4x4": $4sz4,
    "5x5": $5sz5,
    "6x6": $6sz6,
  },

  blockpoint: {
    padrao: [
      {
        pts: 2,
        cor: 0xeee4da,
      },
      {
        pts: 4,
        cor: 0xede0c8,
      },
      {
        pts: 8,
        cor: 0xf2b179,
      },
      {
        pts: 16,
        cor: 0xf59563,
      },
      {
        pts: 32,
        cor: 0xf67c60,
      },
      {
        pts: 64,
        cor: 0xf65e3b,
      },
      {
        pts: 128,
        cor: 0xedcf73,
      },
      {
        pts: 256,
        cor: 0xedcc62,
      },
      {
        pts: 512,
        cor: 0xedc850,
      },
      {
        pts: 1024,
        cor: 0xedc53f,
      },
      {
        pts: 2048,
        cor: 0xedc22d,
      },
    ],
    n3: [
      {
        "pts": 3,
        "cor": 0xeee4da,
      },
      {
        "pts": 6,
        "cor": 0xede0c8,
      },
      {
        "pts": 12,
        "cor": 0xf2b179,
      },
      {
        "pts": 24,
        "cor": 0xf59563,
      },
      {
        "pts": 48,
        "cor": 0xf67c60,
      },
      {
        "pts": 96,
        "cor": 0xf65e3b,
      },
      {
        "pts": 192,
        "cor": 0xedcf73,
      },
      {
        "pts": 384,
        "cor": 0xedcc62,
      },
      {
        "pts": 768,
        "cor": 0xedc850,
      },
      {
        "pts": 1536,
        "cor": 0xedc53f,
      },
      {
        "pts": 3072,
        "cor": 0xedc22d,
      },
    ],
    n4: [
      {
        "pts": 4,
        "cor": 0xeee4da,
      },
      {
        "pts": 8,
        "cor": 0xede0c8,
      },
      {
        "pts": 16,
        "cor": 0xf2b179,
      },
      {
        "pts": 32,
        "cor": 0xf59563,
      },
      {
        "pts": 64,
        "cor": 0xf67c60,
      },
      {
        "pts": 128,
        "cor": 0xf65e3b,
      },
      {
        "pts": 256,
        "cor": 0xedcf73,
      },
      {
        "pts": 512,
        "cor": 0xedcc62,
      },
      {
        "pts": 1024,
        "cor": 0xedc850,
      },
      {
        "pts": 2048,
        "cor": 0xedc53f,
      },
      {
        "pts": 4096,
        "cor": 0xedc22d,
      },
    ]
  },

  movimentos: {
    top: KeyboardEvent.prototype.key.indexOf("ArrowUp"),
    bottom: KeyboardEvent.prototype.key.indexOf("ArrowDown"),
    left: KeyboardEvent.prototype.key.indexOf("ArrowLeft"),
    right: KeyboardEvent.prototype.key.indexOf("ArrowRight"),
  },

  comportamentos: class CubbusComportamentos {
    protected pontuacao = 0;

    public criaJogo(
      tabuleiro:
        | (typeof Cubbus.arenas)["3x3"]
        | (typeof Cubbus.arenas)["4x4"]
        | (typeof Cubbus.arenas)["5x5"]
        | (typeof Cubbus.arenas)["6x6"]
    ) {
      let root = document.createElement("section");
      root.id = "tabuleiro";

      switch (tabuleiro) {
        case Cubbus.arenas["3x3"]:
          for (let i = 0; i < $3sz3.length; i++) {
            for (let j = 0; i < $3sz3[i].length; j++) {
              root.append((document.createElement("div").id = `cs${i}${j}`));
            }
          }
          break;
        case Cubbus.arenas["4x4"]:
          for (let i = 0; i < $4sz4.length; i++) {
            for (let j = 0; i < $4sz4[i].length; j++) {
              root.append((document.createElement("div").id = `cs${i}${j}`));
            }
          }
          break;
        case Cubbus.arenas["5x5"]:
          for (let i = 0; i < $5sz5.length; i++) {
            for (let j = 0; i < $5sz5[i].length; j++) {
              root.append((document.createElement("div").id = `cs${i}${j}`));
            }
          }
          break;
        case Cubbus.arenas["6x6"]:
          for (let i = 0; i < $6sz6.length; i++) {
            for (let j = 0; i < $6sz6[i].length; j++) {
              root.append((document.createElement("div").id = `cs${i}${j}`));
            }
          }
          break;
      }

      // Math.floor(Math.random() * (max - min) + min)


    }

    public get Pontuacao() {
      return this.pontuacao;
    }
  }
};
