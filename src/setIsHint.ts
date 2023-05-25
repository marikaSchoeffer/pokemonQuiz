import { Pokemon } from "./types/Pokemon";

export function setIsHint(chosenPokemon: Pokemon, setChosenPokemon: (chosenPokemonCopy: Pokemon)=> void) {
    let chosenPokemonCopy = structuredClone(chosenPokemon); 
    let arrayOfIndices = [];

    for(let i = 0; i < chosenPokemonCopy.data.length; i++) {
        if(chosenPokemonCopy.data[i].isHint === false) {
            arrayOfIndices.push(i); 
        }
    }

    if(arrayOfIndices.length === 0) {
        return; 
    }

    let randomIndex = Math.floor(Math.random() * arrayOfIndices.length); 
    let indexToSetIsHint = arrayOfIndices[randomIndex];

    chosenPokemonCopy.data[indexToSetIsHint].isHint = true; 
    setChosenPokemon(chosenPokemonCopy); 
}
