import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // getting data from local storage
    let myItem = JSON.parse(localStorage.getItem('transactions'));
    console.log(myItem);

  }

}
