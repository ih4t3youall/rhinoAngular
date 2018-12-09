import { Component, Output, EventEmitter } from '@angular/core';
import { Expense } from './expense.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rhinoAngular';
  menuSelected:string;
  expenses: Expense [ ] =[];


  onMenuChange(menuSelected: string){
   this.menuSelected = menuSelected;

  }

}
