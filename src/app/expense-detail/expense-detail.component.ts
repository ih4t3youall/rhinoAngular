import { Component, OnInit, Output, Input} from '@angular/core';
import { Expense } from '../expense.model';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {


 expensesElements:Expense [] = [];

  constructor(private expenseService:ExpenseService) { 
    this.expensesElements = this.expenseService.expenses
  }

  ngOnInit() {
  }
  cliecked(){
    console.log("binded expense lengh: "+this.expensesElements.length);
  }
  


}
