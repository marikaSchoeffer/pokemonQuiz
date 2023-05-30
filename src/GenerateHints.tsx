import { useState } from "react";

import { setIsHint } from "./setIsHint";
import { Pokemon } from "./types/Pokemon";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

type GenerateHintsProps = {
    chosenPokemon: Pokemon;
    setChosenPokemon: (chosenPokemonCopy: Pokemon)=> void;
    setGameState: (value: string) => void; 
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

    function handleClickQuitGame() {
        setIsDialog(false);
        props.setGameState("quitGame");  
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
                    textAlign="center"
                >
                    <Typography>
                        Es können nicht mehr als {props.chosenPokemon.data.length} Hints angezeigt werden
                    </Typography>

                    <Box 
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Tooltip title="Lösung anzeigen">
                            <IconButton onClick={handleClickQuitGame}>
                                <QuestionMarkIcon />
                            </IconButton>
                        </Tooltip>

                        <IconButton onClick={handleClickCloseDialog}>
                            <CloseIcon/>
                        </IconButton>

                    </Box>
                </Box>
            </Dialog>
        
        </Box>
    );
}