import { Pokemon } from "./types/Pokemon";
import { setIsHint } from "./setIsHint";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type StartGameProps = {
    pokemonArray: Pokemon[];
    setActiveGame: (active: boolean) => void; 
    setChosenPokemon: (chosenPokemon: Pokemon) => void; 
}

export function StartGame(props: StartGameProps) {

    function handleClickStartButton() {
        props.setActiveGame(true); 
    
        let randomNumberPokemon = Math.floor(Math.random() * props.pokemonArray.length);
        
        let pokemon = structuredClone(props.pokemonArray[randomNumberPokemon]); 
        
        setIsHint(pokemon, props.setChosenPokemon); 

    }

    return(
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rowGap="50px"
        >

            <Button 
                onClick={handleClickStartButton}
                variant="outlined"
                sx={{ borderColor:"black"}}
            >
                <Typography
                    color="black"
                    fontWeight="500"
                >
                    Start Quiz
                </Typography>
            </Button>

            <img
                src={"./image/startBild.png"}
                alt="Pikachu"
                width="350px"
            />

        </Box>
    );
}