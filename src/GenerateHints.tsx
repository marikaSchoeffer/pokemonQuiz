import { setIsHint } from "./setIsHint";
import { Pokemon } from "./types/Pokemon";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type GenerateHintsProps = {
    chosenPokemon: Pokemon;
    setChosenPokemon: (chosenPokemonCopy: Pokemon)=> void

}

export function GenerateHints(props: GenerateHintsProps) {
    function handleClickHint() {
        setIsHint(props.chosenPokemon, props.setChosenPokemon);
    }

    return(
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rowGap="20px"
        >
            <Button 
                onClick={handleClickHint}
                variant="outlined"
                sx={{borderColor: "black"}}
            >
                <Typography
                    color="black"
                >
                    Hint
                </Typography>
            </Button>
        </Box>
    );
}