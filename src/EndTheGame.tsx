import { Pokemon } from "./types/Pokemon";

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type EndTheGameProps = {
    gameState: string; 
    setActiveGame: (active: boolean) => void; 
    setGuessedPokemon: (pokemonName: string) => void;
    chosenPokemon: Pokemon;
}

export function EndTheGame(props: EndTheGameProps) {

    function handleClickOneMoreTime() {
        props.setActiveGame(false);
        props.setGuessedPokemon(""); 
    }

    return(
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rowGap="20px"
        >

            {
                props.gameState === "guessedRight" ?

                <Typography variant="h5" fontWeight="500">
                    Congratulations! It's {props.chosenPokemon.metaData.name}
                </Typography>
                :
                <Typography variant="h5" fontWeight="500">
                    It's {props.chosenPokemon.metaData.name}
                </Typography>
            }
            

            <img 
                src={props.chosenPokemon.metaData.image} 
                alt={props.chosenPokemon.metaData.name}
                height="300px"
            />
    
            <Tooltip title="Start New Game">
                <IconButton onClick={handleClickOneMoreTime}>
                    <CatchingPokemonIcon fontSize="large"/>
                </IconButton>
            </Tooltip>
        </Box>
    ); 
}