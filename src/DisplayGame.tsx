import { useState } from "react";

import { GenerateHints } from "./GenerateHints";
import { DisplayHints } from "./DisplayHints";
import { WinTheGame } from "./WinTheGame";
import { Pokemon } from "./types/Pokemon";

type DisplayGameProps = {
    pokemonArray: Pokemon[]; 
    randomNumberToChoosePokemon: number;  
    guessedPokemon: string; 
    setGuessedPokemon: (guessedPokemon: string) => void; 
    setActiveGame: (active: boolean) => void; 
}

function getHint(pokemonArray: Pokemon[], randomNumberPokemon: number) {
    // 2 beacause we don't want the name or the image to be a hint 
    let randomNumberHint = Math.floor(Math.random() * (pokemonArray[randomNumberPokemon].data.length - 2) + 2); 

    let objectOfHint = pokemonArray[randomNumberPokemon].data[randomNumberHint]; 

    if( pokemonArray[randomNumberPokemon].data[randomNumberHint].isHint === false) {
        let entries = Object.entries(objectOfHint); 
        let keyOfHint = entries[0][0];
        let valueOfHint = entries[0][1]; 
        pokemonArray[randomNumberPokemon].data[randomNumberHint].isHint = true;
    }
    else{
        getHint(pokemonArray, randomNumberPokemon);
    }
    return "work in progress";
}

export function DisplayGame(props: DisplayGameProps) {

    const [gameState, setGameState] = useState("active");
    const [hintsArray, setHintsArray] = useState<Hint[]>([]); 
    
    function handleClickCheckGuess() {
        if(props.guessedPokemon === props.pokemonArray[props.randomNumberToChoosePokemon].data[0].name) {
            setGameState("guessedRight");
        }
        else{
            setGameState("guessedWrong");
        }
        
    }
    return(
        <div>
            { gameState === "active" || gameState === "guessedWrong" ? (
                <>
                    <GenerateHints
                        pokemonArray={props.pokemonArray}
                        randomNumberToChoosePokemon={props.randomNumberToChoosePokemon}
                        setGameState={setGameState}
                    />

                    <h2>
                        {
                            getHint(props.pokemonArray, props.randomNumberToChoosePokemon)
                        }
                    </h2>

                    {
                        hintsArray.map((x, i) => (
                            <DisplayHints
                                key={i}
                                category={x.category}
                                hint={x.hint}
                            />
                        ))
                    }

                    <input 
                        value={props.guessedPokemon}
                        onChange={x => props.setGuessedPokemon(x.target.value)}
                    />

                    <button onClick={handleClickCheckGuess}>Check</button>
                </>)
                : null
            }

            {
                gameState === "guessedRight" ?
                    <WinTheGame 
                    pokemonArray={props.pokemonArray}
                    randomNumberToChoosePokemon={props.randomNumberToChoosePokemon}
                    setActiveGame={props.setActiveGame}
                    setGuessedPokemon={props.setGuessedPokemon}
                />
                :
                null
            }

            {
                gameState === "guessedWrong" ?
                    <h1>Try Again!</h1>
                :
                null
            }
        </div>
    )

}