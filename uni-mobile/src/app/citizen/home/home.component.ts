import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  segment = "trans";
  ios: boolean;
  forms = [
    {
      title: "Registering lease contracts",
      cost: "100,000 LBP",
      days: "4",
    },
    {
      title: "Advertising",
      cost: "200,000 LBP",
      days: "7",
    },
    {
      title: "Building permit form",
      cost: "300,000 LBP",

    },
    {
      title: "Drawing on auctions",
      cost: "100,000 LBP",
      days: "3",
    }
  ]
  constructor() { }

  ngOnInit() {

  }

}
