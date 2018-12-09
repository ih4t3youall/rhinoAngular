import { Component, OnInit, Output, Input} from '@angular/core';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {


 // expenses:Expense [] =[
 //   new Expense("nombre",1),
 //   new Expense("nombre2",2)
 // ];
@Input() expensesElements:Expense [] = [];
  constructor() { }

  ngOnInit() {
  }
  cliecked(){
    console.log("binded expense lengh: "+this.expensesElements.length);
  }
  


}
