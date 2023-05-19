import { Pokemon } from "./types/Pokemon";

type GenerateHintsProps = {
    pokemonArray: Pokemon[]; 
    randomNumberToChoosePokemon: number; 
    setGameState: (gameState: string) => void; 
    setHintsArray: (hints: Hint[]) => void; 
    hintsArray: Hint[]; 
}

export function GenerateHints(props: GenerateHintsProps) {
    
    function handleClickHint() {

        let maximumNumberOfHints: number = 4; 
        let newHintsCategoryArray: string[] = [];
        let newHintsArray: Hint[] = []; 
        let newHintsObject: Hint = {category: "", hint: ""}; 

        props.setGameState("active"); 

        for(let i = 0; i < props.hintsCategoryArray.length; i++) {
            newHintsCategoryArray.push(props.hintsCategoryArray[i]); 
        }

        let randomNumberForProperty: number = Math.floor(Math.random() * newHintsCategoryArray.length);
        let randomProperty: string = newHintsCategoryArray[randomNumberForProperty]; 
        let category: string = newHintsCategoryArray.splice(randomNumberForProperty, 1)[0]; 

        if(category === "type") {
            category = "Typ"; 
        }
        else if(category === "height") {
            category = "Größe"; 
        }
        else if(category === "weight") {
            category = "Gewicht"; 
        }
        else if(category === "color") {
            category = "Farbe"; 
        }
        else if(category === "category") {
            category = "Kategorie"; 
        }

        props.setHintsCategoryArray(newHintsCategoryArray);

        for(let i = 0; i < props.hintsArray.length; i++) {
            newHintsArray.push(props.hintsArray[i]); 
        }

        newHintsObject.category = category; 
        newHintsObject.hint = props.pokemonArray[props.randomNumberToChoosePokemon][randomProperty as keyof Pokemon];

        if(newHintsArray.length < maximumNumberOfHints) {
            newHintsArray.push(newHintsObject); 

            props.setHintsArray(newHintsArray); 
        }
    }

    return(
        <div>
            <button onClick={handleClickHint}>Hint</button>
        </div>
    );
}