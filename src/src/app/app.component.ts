import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isHistory: boolean = false;

  constructor( ) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  onBtnToggleClick() {
      this.isHistory = true;
  }

  onBtnCloseHistoryClick() {
    this.isHistory = false;
  }
}
