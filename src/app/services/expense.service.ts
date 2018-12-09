import { Expense } from '../expense.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class ExpenseService{

    expenses:Expense [] = [];
    id:number = 0;

    addExpense(expense:Expense){
        expense.id = this.id;
        this.id++;
        this.expenses.push(expense);
    }

    modifyExpense(){

    }
    removeExpense(id:number){

       

    }

}