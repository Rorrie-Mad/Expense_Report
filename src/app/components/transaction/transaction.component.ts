import { Component, OnInit } from '@angular/core';
import { transition } from '@angular/animations';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactions: any = [];


  constructor() { }

  ngOnInit(): void {
    //  getting data from local storage
    this.transactions = JSON.parse(localStorage.getItem('transactions'));

  }


  todayDate: Date = new Date();


  remove() {





    let transactions: any[] = JSON.parse(localStorage.getItem('transactions'));


    for (let i = 0; i < transactions.length; i++) {
      this.transactions.splice(i, 1);
      localStorage.removeItem(transactions[i]) 
    }




  }

}
