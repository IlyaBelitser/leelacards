import { Injectable } from "@angular/core";
import { CardHistory } from "./card";

@Injectable({
    providedIn: 'root',
})
export class HistoryService {
   private buf: Array<CardHistory> = [];
   
   constructor() {
       
   }

   getData(): Array<CardHistory> {
       return this.buf;
   }

   getCount(): number {
       return this.buf.length;
   }

   getItem(num: number) : CardHistory {
       return this.buf[num];
   }

   addItem(card: CardHistory) {
    //    this.buf.push(card);
       this.buf.unshift(card);
   }

   clear() {
       this.buf = [];
   }

   deleteItem (num: number) {
       this.buf.splice(num, 1);
   }
}