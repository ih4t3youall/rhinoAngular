import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense: Expense;
  @Output() expenseAdded = new EventEmitter<Expense>();

  constructor(private expenseService:ExpenseService) {
    //    this.expense = new Expense("nose",3);
    this.expense = new Expense(0,"", 0);
  }

  ngOnInit() {
  }
  onExpenseAdded() {
    if (this.expense.name == "" || this.expense.qty <= 0) {
      console.log("nain")
    } else {
      console.log("Added to service");
      this.expenseService.addExpense(this.expense);
    }


  }

}
