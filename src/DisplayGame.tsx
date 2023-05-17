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
    hintsCategoryArray: string[];
    setHintsCategoryArray: (categoryArray: string[]) => void; 
    setActiveGame: (active: boolean) => void; 
    propertyForFirstHint: string; 
    categoryForFirstHint: string; 
}

export function DisplayGame(props: DisplayGameProps) {

    const [gameState, setGameState] = useState("active");
    const [hintsArray, setHintsArray] = useState<Hint[]>([]); 
    
    function handleClickCheckGuess() {
        if(props.guessedPokemon === props.pokemonArray[props.randomNumberToChoosePokemon].name) {
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
                        hintsCategoryArray={props.hintsCategoryArray}
                        setHintsCategoryArray={props.setHintsCategoryArray}
                        hintsArray={hintsArray}
                        setHintsArray={setHintsArray}
                        setGameState={setGameState}
                    />

                    <h2>
                        {props.categoryForFirstHint}: {props.pokemonArray[props.randomNumberToChoosePokemon][props.propertyForFirstHint as keyof Pokemon]}
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
                    setHintsCategoryArray={props.setHintsCategoryArray}
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