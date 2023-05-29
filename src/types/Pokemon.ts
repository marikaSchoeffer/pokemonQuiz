export type Pokemon = {
    data: [
        {
            type: string;
            isHint: boolean;
        },
        {
            height: string;
            isHint: boolean;
        },
        {
            weight: string;
            isHint: boolean;
        },
        {
            color: string;
            isHint: boolean;
        },
        {
            category: string;
            isHint: boolean;
        },
        {
            image: string;
            isHint: boolean
        }
    ],
    metaData: {
        name: string,
        image: string
    }
}