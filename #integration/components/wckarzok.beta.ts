const structure = { 

  "minecraft": {

    "assets": {

      "blockstates": {

        "variants": {
          
          "@configuration": {

            "model": String,
            "uvlock": {

              Nulled: "~none",
              Disabled: "false"||false,
              Enabled: "true"||true

            },
            "x": 0|90|180|270,
            "y": 0|90|180|270,
            "conditions": {

              "apply": {

                "model": String

              },

              "when": {

                "east": {

                  Nulled: "~none",
                  Disabled: "false"||false,
                  Enabled: "true"||true

                },

                "west": {

                  Nulled: "~none",
                  Disabled: "false"||false,
                  Enabled: "true"||true

                },

                "north": {

                  Nulled: "~none",
                  Disabled: "false"||false,
                  Enabled: "true"||true

                },

                "south": {

                  Nulled: "~none",
                  Disabled: "false"||false,
                  Enabled: "true"||true

                }


              }
            
            }

          },

          "axis": {

            CoordX: "x",
            CoordY: "y",
            CoordZ: "z"

          },

          "face": {

            Nulled: "~none",
            Ceiling: "ceiling",
            Floor: "floor",
            Wall: "wall"

          },

          "facing": {

            Nulled: "~none",
            East: "east",
            West: "west",
            North: "north",
            South: "south"

          },

          "half": {

            Nulled: "~none",
            Lower: "lower",
            Upper: "upper"

          },

          "in_wall": {

            Nulled: "~none",
            Disabled: "false"||false,
            Enabled: "true"||true

          },

          "hinge": {

            Nulled: "~none",
            Left: "left",
            Right: "right"

          },

          "open": {

            Nulled: "~none",
            Disabled: "false"||false,
            Enabled: "true"||true

          },

          "powered": {

            Nulled: "~none",
            Disabled: "false"||false,
            Enabled: "true"||true
            
          },

          "shape": {

            Nulled: "~none",
            AscendingEast: "ascending_east",
            AscendingWest: "ascending_west",
            AscendingNorth: "ascending_north",
            AscendingSouth: "ascending_south",
            EastWest: "east_west",
            InnerLeft: "inner_left",
            InnerRight: "inner_right",
            NorthSouth: "north_south",
            OuterLeft: "outer_left",
            OuterRight: "outer_right",
            Straight: "straight"

          },

          "type": {

            Nulled: "~none",
            Bottom: "bottom",
            Double: "double",
            Type: "type"

          }


        },

        "multipart": {

          "@configuration": {

            "when": {
              
              "up": {
              
                Nulled: "~none",
                Disabled: "false"||false,
                Enabled: "true"||true
              
              }
              

            },

            "apply": {

              "model": String

            }


          }


        }


      }


    },

    "data": { }

  } 


}

type WCKarzok = Object; 
