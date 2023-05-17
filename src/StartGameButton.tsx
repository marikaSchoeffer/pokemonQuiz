import { Pokemon } from "./types/Pokemon";

type StartGameButtonProps = {
    pokemonArray: Pokemon[]; 
    activeGame: boolean; 
    setActiveGame: (active: boolean) => void; 
    setRandomNumberToChoosePokemon: (randomNumber: number) => void;
    hintsCategoryArray: string[];
    setHintsCategoryArray: (categoryArray: string[]) => void; 
    setPropertyForFirstHint: (randomProperty: string) => void;
    setCategoryForFirstHint: (category: string) => void; 
}

export function StartGameButton(props: StartGameButtonProps) {

    function handleClickStartButton() {
        if(props.activeGame === false) {
            props.setActiveGame(true); 
        
            let randomNumber = Math.floor(Math.random() * props.pokemonArray.length);
            props.setRandomNumberToChoosePokemon(randomNumber); 

            let newHintsCategoryArray = [];

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
            props.setPropertyForFirstHint(randomProperty); 
            props.setCategoryForFirstHint (category); 
        }
    }

    return(
        <button onClick={handleClickStartButton}>Start Quiz</button>
    );
}