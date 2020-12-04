import { Component, OnInit } from '@angular/core';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactions:any = [];

  constructor() { }

  ngOnInit(): void {
  //  getting data from local storage
  this.transactions = JSON.parse(localStorage.getItem('transactions'));    
  }

}
