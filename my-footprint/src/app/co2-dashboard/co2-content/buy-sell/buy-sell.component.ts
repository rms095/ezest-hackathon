import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})
export class BuySellComponent implements OnInit {
  
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  orderPlaced() {
    this.snackBar.open("Transaction Successful.", "", {
      duration: 2000,
    });
  }

}
