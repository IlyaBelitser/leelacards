import { Injectable } from "@angular/core";
import { Card } from "./card";
import { CARDS } from "./cards";

@Injectable({
    providedIn: 'root',
})
export class GeneratorService {
    private cardAmount: number = 108;

    constructor() {

    }

    private randomize (max : number) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getCard() : Card {
        return CARDS[this.randomize(this.cardAmount)];
    }
}