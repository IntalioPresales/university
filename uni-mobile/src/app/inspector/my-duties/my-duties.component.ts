import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-duties',
  templateUrl: './my-duties.component.html',
  styleUrls: ['./my-duties.component.scss']
})
export class MyDutiesComponent implements OnInit {
  defaultHref = '/inspector/home';
  constructor() { }

  ngOnInit() {
  }

}
