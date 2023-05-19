import { Pokemon } from "./types/Pokemon";

type StartGameButtonProps = {
    pokemonArray: Pokemon[]; 
    activeGame: boolean; 
    setActiveGame: (active: boolean) => void; 
    setRandomNumberToChoosePokemon: (randomNumber: number) => void;
    setRandomNumberToChooseHint: (randomNumber: number) => void;
}

export function StartGameButton(props: StartGameButtonProps) {

    function handleClickStartButton() {
        props.setActiveGame(true); 
    
        let randomNumberPokemon = Math.floor(Math.random() * props.pokemonArray.length);
        props.setRandomNumberToChoosePokemon(randomNumberPokemon); 

        // 2 beacause we don't want the name or the image to be a hint 
        let randomNumberHint = Math.floor(Math.random() * (props.pokemonArray[randomNumberPokemon].data.length - 2) + 2); 
        props.setRandomNumberToChooseHint(randomNumberHint); 
    }

    return(
        <button onClick={handleClickStartButton}>Start Quiz</button>
    );
}