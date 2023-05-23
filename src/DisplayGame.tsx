import { useState } from "react";

import { GenerateHints } from "./GenerateHints";
import { DisplayHints } from "./DisplayHints";
import { WinTheGame } from "./WinTheGame";
import { Pokemon } from "./types/Pokemon";

type DisplayGameProps = {
    chosenPokemon: Pokemon;
    setChosenPokemon: (pokemon: Pokemon) => void;  
    guessedPokemon: string; 
    setGuessedPokemon: (guessedPokemon: string) => void; 
    setActiveGame: (active: boolean) => void; 
}

export function DisplayGame(props: DisplayGameProps) {

    const [gameState, setGameState] = useState("active");
    const [hintsArray, setHintsArray] = useState<Hint[]>([]); 
    
    function handleClickCheckGuess() {
        if(props.guessedPokemon === props.chosenPokemon.data[0].name) {
            setGameState("guessedRight");
        }
        else{
            setGameState("guessedWrong");
        }
        
    }

    function isHintTrue(isHint: boolean) {
        if(isHint === true) {
            return true; 
        }
        return false; 
    }

    return(
        <div>
            { gameState === "active" || gameState === "guessedWrong" ? (
                <>
                    <GenerateHints
                        chosenPokemon={props.chosenPokemon}
                        setChosenPokemon={props.setChosenPokemon}
                    />


                    {
                        props.chosenPokemon.data
                            .filter((x) => isHintTrue(x.isHint))
                            .map((x, i) => {
                                let entries = Object.entries(x);
                                let keyOfHint = entries[0][0];
                                let valueOfHint = entries[0][1].toString();

                                return (
                                    <DisplayHints
                                        key={i}
                                        keyOfHint={keyOfHint}
                                        valueOfHint={valueOfHint}
                                    />
                                ) 
                            })
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
                /*gameState === "guessedRight" ?
                    <WinTheGame 
                    pokemonArray={props.pokemonArray}
                    randomNumberToChoosePokemon={props.randomNumberToChoosePokemon}
                    setActiveGame={props.setActiveGame}
                    setGuessedPokemon={props.setGuessedPokemon}
                />
                :
                null/*/
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