import { Component, OnInit } from '@angular/core';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  // transactions 
  transactions: Array<{ date: string, description: string, amount: number, type: string }> = [
    { date: "10/01/2020 19:03", description: "Data allowance", amount: 500.00, type: "income" },
    { date: "01/01/2020 19:03", description: "Rent", amount: 1000.00, type: "expense" },
    { date: "03/01/2020 19:03", description: "Hair", amount: 300.00, type: "income" },
    { date: "09/01/2020 19:03", description: "Transport", amount: 500.00, type: "expense" },
    { date: "13/01/2020 19:03", description: "Food", amount: 600.00, type: "expense" }
  ];


  constructor() { }

  ngOnInit(): void {
    // saving transaction data to local storage
    localStorage.setItem("transactions", JSON.stringify(this.transactions));

  }


  // ------ adding a new transaction --------//

  

}
