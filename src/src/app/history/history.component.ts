import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  title: string = 'History';

  constructor(public serviceHistory : HistoryService) {
  }

  ngOnInit(): void {
  }

  close (idx: number) {
    console.log("close");
    this.serviceHistory.deleteItem(idx);
  }
}
