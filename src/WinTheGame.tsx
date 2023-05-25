import { Pokemon } from "./types/Pokemon";

type WinTheGameProps = {
    setActiveGame: (active: boolean) => void; 
    setGuessedPokemon: (pokemonName: string) => void;
    chosenPokemon: Pokemon;
}

export function WinTheGame(props: WinTheGameProps) {

    function handleClickOneMoreTime() {
        props.setActiveGame(false);
        props.setGuessedPokemon(""); 
    }

    return(
        <div>
            <h1>
                Congratulations! It's {props.chosenPokemon.metaData.name}
            </h1>
            <img 
                src={props.chosenPokemon.metaData.image} 
                alt={props.chosenPokemon.metaData.name}
            />
            <br />
            <button onClick={handleClickOneMoreTime}>One more time</button>
        </div>
    ); 
}