import { Pokemon } from "./types/Pokemon";

type StartGameButtonProps = {
    pokemonArray: Pokemon[]; 
    activeGame: boolean; 
    setActiveGame: (active: boolean) => void; 
    setRandomNumberToChoosePokemon: (randomNumber: number) => void;
    setRandomNumberToChooseHint: (randomNumber: number) => void;
    setChosenPokemon: (chosenPokemon: Pokemon[]) => void; 
}

export function StartGameButton(props: StartGameButtonProps) {

    function handleClickStartButton() {
        props.setActiveGame(true); 
    
        let randomNumberPokemon = Math.floor(Math.random() * props.pokemonArray.length);
        //props.setRandomNumberToChoosePokemon(randomNumberPokemon); 

        let array: Pokemon[] = props.pokemonArray[randomNumberPokemon]; 
        props.setChosenPokemon(array)
        
    }

    return(
        <button onClick={handleClickStartButton}>Start Quiz</button>
    );
}