import { useState } from "react";

import { Typography } from "@mui/material";

import { StartGame } from "./StartGame";
import { DisplayGame } from "./DisplayGame";
import { Pokemon } from "./types/Pokemon";

import { pokemonArray } from "./Data";

export function Main()  {

    const [activeGame, setActiveGame] = useState(false); 
    const [guessedPokemon, setGuessedPokemon] = useState(""); 
    const [chosenPokemon, setChosenPokemon] = useState<Pokemon>(pokemonArray[0]);

    return(
    <div>
        <Typography>Who's that Pokémon?</Typography>

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
    </div>); 
}