import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co2-content',
  templateUrl: './co2-content.component.html',
  styleUrls: ['./co2-content.component.scss']
})
export class Co2ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadFile() {
    let link = document.createElement("a");
    link.download = "myFootprint Overview";
    link.href = "/assets/Clouders.pptx";
    link.click();
  }
}
