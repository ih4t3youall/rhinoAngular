import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseItemComponent } from './expense-detail/expense-item/expense-item.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import {FormsModule} from '@angular/forms'
import { ExpenseService } from './services/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpenseDetailComponent,
    ExpenseItemComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
