export type Alpacas = {
    id: Number;
    label: string;
    directory: string;
    selected: boolean;
    items: Array<AlpacaItem>;
}

export type AlpacaItem = {
    id: Number;
    label: string;
    filename: string;
    selected: boolean;
}
