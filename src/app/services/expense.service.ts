import { Expense } from '../expense.model';

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