import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-box',
  templateUrl: './status-box.component.html',
  styleUrls: ['./status-box.component.scss']
})
export class StatusBoxComponent implements OnInit {

  ngOnInit() {}

  columnNamesForPieChart = ['Category', 'Percentage'];

  options = {
    colors: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#f6c7b6'], is3D: true,
    legend : {position:'bottom'}
  };

  pieChartData = [
    ['Electricity', 25.91],
    ['Fuel', 12.95],
    ['Flight', 19.95],
    ['LPG', 41.19],
  ];

  areaChartData = [
    ["2017", 6.2, 3.8, 6],
    ["2018", 8.7, 5.1, 8],
    ["2019", 9.1, 6, 9.2],
    ["2020", , , 10.1],
    ["2021", , , 11.2 ]
  ];

  columnNamesForAreaChart = ['Year', 'Carbon Footprint', "Available Carbon Credits", "Projected Carbon Footprint"];
}
