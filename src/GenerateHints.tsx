import { setIsHint } from "./setIsHint";
import { Pokemon } from "./types/Pokemon";

type GenerateHintsProps = {
    chosenPokemon: Pokemon;
    setChosenPokemon: (chosenPokemonCopy: Pokemon)=> void

}

export function GenerateHints(props: GenerateHintsProps) {
    function handleClickHint() {
        setIsHint(props.chosenPokemon, props.setChosenPokemon);
    }

    return(
        <div>
            <button onClick={handleClickHint}>Hint</button>
        </div>
    );
}