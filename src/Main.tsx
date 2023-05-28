import { useState } from "react";

import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

import { StartGame } from "./StartGame";
import { DisplayGame } from "./DisplayGame";
import { Pokemon } from "./types/Pokemon";

import { pokemonArray } from "./Data";

export function Main()  {

    const [activeGame, setActiveGame] = useState(false); 
    const [guessedPokemon, setGuessedPokemon] = useState(""); 
    const [chosenPokemon, setChosenPokemon] = useState<Pokemon>(pokemonArray[0]);

    return(
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            rowGap="20px"
        >
            <Box
                display="flex"
                justifyContent="center"
                textAlign="center"
            >
                <Typography variant="h2">
                    Who's that Pokémon?
                </Typography>
            </Box>

            { activeGame === false ? 
                <StartGame
                    pokemonArray={pokemonArray}
                    setActiveGame={setActiveGame}
                    setChosenPokemon={setChosenPokemon}
                />
                : 
                <DisplayGame 
                    chosenPokemon={chosenPokemon}
                    setChosenPokemon={setChosenPokemon}
                    guessedPokemon={guessedPokemon}
                    setGuessedPokemon={setGuessedPokemon}
                    activeGame={activeGame}
                    setActiveGame={setActiveGame}
                /> 
            }
            
        </Box>
    ); 
}