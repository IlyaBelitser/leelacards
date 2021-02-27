export interface Card {
    id: number;
    text: string;
}

export interface CardHistory {
    card: Card;
    date: number;
}