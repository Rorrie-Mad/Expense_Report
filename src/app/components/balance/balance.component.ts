import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  totalBalance: number = 0;

  transactions: any[] = JSON.parse(localStorage.getItem('transactions'));
  constructor() { }

  ngOnInit(): void {

    var type = JSON.parse(localStorage.getItem('transactions'))[1].type
    var amount = JSON.parse(localStorage.getItem('transactions'))[1].amount
    if (type == "expense") {
      this.totalBalance = this.totalBalance - amount
      console.log(this.totalBalance);
    }
    else {
      this.totalBalance = this.totalBalance + amount
      console.log(this.totalBalance);
    }



    // for (let i = 0; i < this.transactions.length; i++) {
    //   console.log(transactions[i]);
    // }

  }

}
