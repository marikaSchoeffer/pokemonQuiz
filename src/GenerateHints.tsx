import { useState } from "react";

import { setIsHint } from "./setIsHint";
import { Pokemon } from "./types/Pokemon";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type GenerateHintsProps = {
    chosenPokemon: Pokemon;
    setChosenPokemon: (chosenPokemonCopy: Pokemon)=> void

}

export function GenerateHints(props: GenerateHintsProps) {

    const [isDialog, setIsDialog] = useState(false);

    function handleClickHint() {
        let dialogArray = []; 

        for(let i = 0; i < props.chosenPokemon.data.length; i++) {
            if(props.chosenPokemon.data[i].isHint === true) {
                dialogArray.push(i); 
            }
        }
        if(dialogArray.length === props.chosenPokemon.data.length) {
            setIsDialog(true);
        }
        else{
            setIsHint(props.chosenPokemon, props.setChosenPokemon);
        }
    }

    function handleClickCloseDialog() {
        setIsDialog(false); 
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

            <Dialog open={isDialog}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Typography>
                        Es können nicht mehr als {props.chosenPokemon.data.length} Hints angezeigt werden
                    </Typography>

                    <IconButton onClick={handleClickCloseDialog}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </Dialog>
        
        </Box>
    );
}