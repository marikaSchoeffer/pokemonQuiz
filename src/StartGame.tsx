import { Pokemon } from "./types/Pokemon";
import { setIsHint } from "./setIsHint";

type StartGameProps = {
    pokemonArray: Pokemon[];
    setActiveGame: (active: boolean) => void; 
    setChosenPokemon: (chosenPokemon: Pokemon) => void; 
}

export function StartGame(props: StartGameProps) {

    function handleClickStartButton() {
        props.setActiveGame(true); 
    
        let randomNumberPokemon = Math.floor(Math.random() * props.pokemonArray.length);
        
        let pokemon = structuredClone(props.pokemonArray[randomNumberPokemon]); 
        
        setIsHint(pokemon, props.setChosenPokemon); 

    }

    return(
        <button onClick={handleClickStartButton}>Start Quiz</button>
    );
}