import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Card, CardHistory } from './../card';
import { CardComponent } from './../card/card.component';
import { GeneratorService } from './../generator.service';
import { HistoryService } from './../history.service';
import { RefDirective } from './../ref.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GeneratorService]
})
export class HomeComponent implements OnInit {

  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;
  currentCard: Card; 

  constructor(
    private service : GeneratorService,
    private resolver: ComponentFactoryResolver,
    private serviceHistory: HistoryService
  ) { }

  ngOnInit(): void {
  }

  onCardsClick() {
    console.log('on card click');

    this.currentCard = this.service.getCard();

    const cardFactory = this.resolver.resolveComponentFactory(CardComponent);
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(cardFactory);
    
    component.instance.card = this.currentCard;
    component.instance.close.subscribe(()=>{
      this.refDir.containerRef.clear();
    })

    let cardSave: CardHistory = {card: this.currentCard, date: Date.now()};
    this.serviceHistory.addItem(cardSave);

    console.log(this.serviceHistory);
  }
}
