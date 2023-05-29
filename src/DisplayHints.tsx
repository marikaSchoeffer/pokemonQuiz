import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type DisplayHintsProps = {
    keyOfHint: string;
    valueOfHint: string;
}

export function DisplayHints(props: DisplayHintsProps) {

    function getSilhouette(value: string) {
        return <img
                    src={value}
                    alt="A Pokemon"
                    style={{filter: "brightness(0%)"}}
                />
    }

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
                { props.keyOfHint === "image" ?
                    getSilhouette(props.valueOfHint)
                    :
                    <Typography>
                        {
                            translateKeyValue(props.keyOfHint, props.valueOfHint)
                        }
                    </Typography>
                }
        </Box>
    ); 
}