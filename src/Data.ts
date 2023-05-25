import { Pokemon } from "./types/Pokemon";

let pokemonArray: Pokemon[] = [
    {   data: [
            {
                type: "Pflanze, Gift",
                isHint: false
            }, 
            {
                height: "0.7 m",
                isHint: false
            },
            {
                weight: "6.9 kg",
                isHint: false
            },
            {
                color: "Grün",
                isHint: false
            },
            {
                category: "Samen-Pokémon",
                isHint: false
            }
        ],
        metaData: {
            name: "Bisasam",
            image: "./image/Bisasam.png"
        }
    },

    {   data: [
            {
                type: "Pflanze, Gift",
                isHint: false
            }, 
            {
                height: "1.0 m",
                isHint: false
            },
            {
                weight: "13.0 kg",
                isHint: false
            },
            {
                color: "Grün",
                isHint: false
            },
            {
                category: "Samen-Pokémon",
                isHint: false
            }
        ],
        metaData: {
            name: "Bisaknosp",
            image: "./image/Bisaknosp.png"
        }
    },

    {   data: [
            {
                type: "Pflanze, Gift",
                isHint: false
            }, 
            {
                height: "2.0 m",
                isHint: false
            },
            {
                weight: "100.0 kg",
                isHint: false
            },
            {
                color: "Grün",
                isHint: false
            },
            {
                category: "Samen-Pokémon",
                isHint: false
            }
        ],
        metaData: {
            name: "Bisaflor",
            image: "./image/Bisaflor.png"
        }
    },

    {
        data: [
            {
                type: "Feuer",
                isHint: false
            }, 
            {
                height: "0.6 m",
                isHint: false
            },
            {
                weight: "8.5 kg",
                isHint: false
            },
            {
                color: "Rot",
                isHint: false
            },
            {
                category: "Echsen-Pokémon",
                isHint: false
            }
        ],
        metaData: {
            name: "Glumanda",
            image: "./image/Glumanda.png"
        },
    },
    
    {
        data: [
            {
                type: "Feuer",
                isHint: false
            }, 
            {
                height: "1.1 m",
                isHint: false
            },
            {
                weight: "19.0 kg",
                isHint: false
            },
            {
                color: "Rot",
                isHint: false
            },
            {
                category: "Flammen-Pokémon",
                isHint: false
            }
        ],
        metaData: {
            name: "Glutexo",
            image: "./image/Glutexo.png"
        },
    },
    /*{
        name: "Glurak",
        image: "./image/Glurak.png",
        type: "Feuer, Drache",
        height: "1.7 m",
        weight: "90.5 kg",
        color: "Rot",
        category: "Flammen-Pokémon"
    },

    {
        name: "Schiggy",
        image: "./image/Schiggy.png",
        type: "Wasser",
        height: "0.5 m",
        weight: "9.0 kg",
        color: "Blau",
        category: "Minikröten-Pokémon"
    },

    {
        name: "Schillok",
        image: "./image/Schillok.png",
        type: "Wasser",
        height: "1.0 m",
        weight: "22.5 kg",
        color: "Blau",
        category: "Kröten-Pokémon"
    },

    {
        name: "Turtok",
        image: "./image/Turtok.png",
        type: "Wasser",
        height: "1.6 m",
        weight: "85.5 kg",
        color: "Blau",
        category: "Panzertier-Pokémon"
    },

    {
        name: "Raupy",
        image: "./image/Raupy.png",
        type: "Käfer",
        height: "0.3 m",
        weight: "2.9 kg",
        color: "Grün",
        category: "Wurm-Pokémon"
    },

    {
        name: "Safcon",
        image: "./image/Safcon.png",
        type: "Käfer",
        height: "0.7 m",
        weight: "9.9 kg",
        color: "Grün",
        category: "Kokon-Pokémon"
    },

    {
        name: "Smettbo",
        image: "./image/Smettbo.png",
        type: "Käfer",
        height: "1.1 m",
        weight: "32.0 kg",
        color: "Weiß",
        category: "Falter-Pokémon"
    },

    {
        name: "Hornliu",
        image: "./image/Hornliu.png",
        type: "Käfer, Gift",
        height: "0.3 m",
        weight: "3.2 kg",
        color: "Braun",
        category: "Raupen-Pokémon"
    },

    {
        name: "Kokuna",
        image: "./image/Kokuna.png",
        type: "Käfer, Gift",
        height: "0.6 m",
        weight: "10.0 kg",
        color: "Gelb",
        category: "Kokon-Pokémon"
    },

    {
        name: "Bibor",
        image: "./image/Bibor.png",
        type: "Käfer, Gift",
        height: "1.0 m",
        weight: "29.5 kg",
        color: "Gelb",
        category: "Giftbienen-Pokémon"
    },

    {
        name: "Raichu",
        image: "./image/Raichu.png",
        type: "Elektro",
        height: "0.8 m",
        weight: "30 kg",
        color: "Gelb",
        category: "Maus-Pokémon"
    },

    {
        name: "Traumato",
        image: "./image/Traumato.png",
        type: "Psycho",
        height: "1.0 m",
        weight: "32.4 kg",
        color: "Gelb",
        category: "Hypnose-Pokémon"
    },

    {
        name: "Myrapla",
        image: "./image/Myrapla.png",
        type: "Pflanze, Gift",
        height: "0.5 m",
        weight: "5.4 kg",
        color: "Blau",
        category: "Unkraut-Pokémon"
    },

    {
        name: "Arkani",
        image: "./image/Arkani.png",
        type: "Feuer",
        height: "1.9 m",
        weight: "155.0 kg",
        color: "Braun",
        category: "Legendär-Pokémon"
    },

    {
        name: "Gengar",
        image: "./image/Gengar.png",
        type: "Geist, Gift",
        height: "1.5 m",
        weight: "40.5 kg",
        color: "Violett",
        category: "Schatten-Pokémon"
    },

    {
        name: "Starmie",
        image: "./image/Starmie.png",
        type: "Wasser, Psycho",
        height: "1.1 m",
        weight: "80.0 kg",
        color: "Violett",
        category: "Mysteriös-Pokémon"
    },

    {
        name: "Tauboss",
        image: "./image/Tauboss.png",
        type: "Normal, Flug",
        height: "1.5 m",
        weight: "39.5 kg",
        color: "Braun",
        category: "Vogel-Pokémon"
    },

    {
        name: "Onix",
        image: "./image/Onix.png",
        type: "Gestein, Boden",
        height: "8.8 m",
        weight: "210.0 kg",
        color: "Grau",
        category: "Felsnatter-Pokémon"
    },

    {
        name: "Magmar",
        image: "./image/Magmar.png",
        type: "Feuer",
        height: "1.3 m",
        weight: "44.5 kg",
        color: "Rot",
        category: "Brenner-Pokémon"
    },

    {
        name: "Evoli",
        image: "./image/Evoli.png",
        type: "Normal",
        height: "0.3 m",
        weight: "6.5 kg",
        color: "Braun",
        category: "Evolutions-Pokémon"
    },

    {
        name: "Simsala",
        image: "./image/Simsala.png",
        type: "Psycho",
        height: "1.5 m",
        weight: "48.0 kg",
        color: "Braun",
        category: "Psi-Pokémon"
    },

    {
        name: "Marill",
        image: "./image/Marill.png",
        type: "Wasser, Fee",
        height: "0.4 m",
        weight: "8.5 kg",
        color: "Blau",
        category: "Aquamaus-Pokémon"
    },

    {
        name: "Nachtara",
        image: "./image/Nachtara.png",
        type: "Unlicht",
        height: "1.0 m",
        weight: "27.0 kg",
        color: "Schwarz",
        category: "Mondschein-Pokémon"
    },

    {
        name: "Psiana",
        image: "./image/Psiana.png",
        type: "Psycho",
        height: "0.9 m",
        weight: "26.5 kg",
        color: "Violett",
        category: "Sonnen-Pokémon"
    }*/
]

export { pokemonArray }; 