import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../../models/Transaction";

@Component({
  selector: 'app-offset-entries',
  templateUrl: './offset-entries.component.html',
  styleUrls: ['./offset-entries.component.scss']
})
export class OffsetEntriesComponent implements OnInit {

  constructor() { }

  isLinear = true;

  barChartData = [
    ['Carbon Footprint', 8.92],
    ['Carbon Offset', -1],
    ['Net Carbon Footprint', 7.92],
  ];

  options = { legend : {position: 'bottom'}};

    ngOnInit() {}

  displayedColumns: string[] = ['category', 'creditCardExpenses', 'debitCardExpenses', 'amount', 'co2Emission'];
   transactions: Transaction[] = [
     {category: 'Fuel', creditCardExpenses: 150, debitCardExpenses: 350, amount: 500, co2Emission: 1.26},
     {category: 'LPG', creditCardExpenses: 20, debitCardExpenses: 130, amount: 150, co2Emission: 1.19},
     {category: 'Electricity', creditCardExpenses: 0, debitCardExpenses: 500, amount: 500, co2Emission: 3.24},
     {category: 'Flight', creditCardExpenses: 450, debitCardExpenses: 340, amount: 790, co2Emission: 3.24},
   ];

  /** Gets the total cost of all transactions. */
   getTotalEmission() {
     return this.transactions.map(t => t.co2Emission).reduce((acc, value) => acc + value, 0);
   }

}
