import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Card } from './../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() card: Card = {
    id: 0,
    text: 'L'
  };
  @Output() close = new EventEmitter<void>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  handleClick(event: any) {
    event.stopPropagation();
  }

}
