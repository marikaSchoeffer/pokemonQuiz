type DisplayHintsProps = {
    category: string;
    hint: string;
}

export function DisplayHints(props: DisplayHintsProps) {
    return(
        <div>
            <h2>{props.category}: {props.hint}</h2>
        </div>

    ); 
}