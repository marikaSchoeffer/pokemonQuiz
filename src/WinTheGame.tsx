import { Pokemon } from "./types/Pokemon";

type WinTheGameProps = {
    pokemonArray: Pokemon[];
    setActiveGame: (active: boolean) => void; 
    setGuessedPokemon: (pokemonName: string) => void;
    randomNumberToChoosePokemon: number; 
}

export function WinTheGame(props: WinTheGameProps) {

    function handleClickOneMoreTime() {
        props.setActiveGame(false);
        props.setGuessedPokemon(""); 
    }

    return(
        <div>
            <h1>
                Congratulations! It's {props.pokemonArray[props.randomNumberToChoosePokemon].data[0].name}
            </h1>
            <img 
                src={props.pokemonArray[props.randomNumberToChoosePokemon].data[1].image} 
                alt={props.pokemonArray[props.randomNumberToChoosePokemon].data[0].name}
            />
            <br />
            <button onClick={handleClickOneMoreTime}>One more time</button>
        </div>
    ); 
}