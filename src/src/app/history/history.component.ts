import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { HistoryService } from '../history.service';
import { RefDirective } from './../ref.directive';
import { CardComponent } from './../card/card.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  title: string = 'History';
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;
  
  constructor(
    public serviceHistory : HistoryService,    
    private resolver: ComponentFactoryResolver,) {
  }

  ngOnInit(): void {
  }

  clickOnCard (idx: number) {
    console.log("card");

    const cardFactory = this.resolver.resolveComponentFactory(CardComponent);
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(cardFactory);
    
    component.instance.card = this.serviceHistory.getItem(idx).card; 
    component.instance.close.subscribe(()=>{
      this.refDir.containerRef.clear();
    })
  }

  close (idx: number) {
    console.log("close");
    this.serviceHistory.deleteItem(idx);
  }
}
