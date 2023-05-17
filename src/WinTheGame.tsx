import { Pokemon } from "./types/Pokemon";

type WinTheGameProps = {
    pokemonArray: Pokemon[];
    setActiveGame: (active: boolean) => void; 
    setGuessedPokemon: (pokemonName: string) => void;
    setHintsCategoryArray: (categoryArray: string[]) => void; 
    randomNumberToChoosePokemon: number; 
}

export function WinTheGame(props: WinTheGameProps) {

    function handleClickOneMoreTime() {
        props.setActiveGame(false);
        props.setGuessedPokemon(""); 
        props.setHintsCategoryArray(["type", "height", "weight", "color", "category" ]); 
    }

    return(
        <div>
            <h1>
                Congratulations! It's {props.pokemonArray[props.randomNumberToChoosePokemon].name}
            </h1>
            <img 
                src={props.pokemonArray[props.randomNumberToChoosePokemon].image} 
                alt={props.pokemonArray[props.randomNumberToChoosePokemon].name}
            />
            <br />
            <button onClick={handleClickOneMoreTime}>One more time</button>
        </div>
    ); 
}