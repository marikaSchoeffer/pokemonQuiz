import { Pokemon } from "./types/Pokemon";

export function setIsHint(chosenPokemon: Pokemon, setChosenPokemon: (chosenPokemonCopy: Pokemon)=> void) {
    // 2 beacause we don't want the name or the image to be a hint 
    let randomNumberHint = Math.floor(Math.random() * (chosenPokemon.data.length - 2) + 2); 
        
    let chosenPokemonCopy = structuredClone(chosenPokemon); 
    
    if(chosenPokemonCopy.data[randomNumberHint].isHint === false) {
        chosenPokemonCopy.data[randomNumberHint].isHint = true;
        setChosenPokemon(chosenPokemonCopy); 
    }
    else{
        setIsHint(chosenPokemon, setChosenPokemon);
    }
}
