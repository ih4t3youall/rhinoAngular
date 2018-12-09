import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense: Expense;
  @Output() expenseAdded = new EventEmitter<Expense>();

  constructor() {
    //    this.expense = new Expense("nose",3);
    this.expense = new Expense("", 0);
  }

  ngOnInit() {
  }
  onExpenseAdded() {
    if (this.expense.name == "" || this.expense.qty <= 0) {
      console.log("nain")
    } else {
      console.log("emit");
      this.expenseAdded.emit(this.expense);
    }


  }

}
