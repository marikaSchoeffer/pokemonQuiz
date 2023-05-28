import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type DisplayHintsProps = {
    keyOfHint: string;
    valueOfHint: string;
}

export function DisplayHints(props: DisplayHintsProps) {
    function translateKeyValue(key: string, value: string) {
        if(key === "type") {
            key = "Typ";
        }
        else if(key === "height"){
            key = "Größe";
        }
        else if(key === "weight") {
            key = "Gewicht"; 
        }
        else if(key === "color") {
            key = "Farbe";
        }
        else if(key === "category") {
            key = "Kategorie"; 
        }
    
        return `${key}: ${value}`
    }
   
    return(
        <Box>
            <Typography>
                {
                    translateKeyValue(props.keyOfHint, props.valueOfHint)
                }
            </Typography>
        </Box>
    ); 
}