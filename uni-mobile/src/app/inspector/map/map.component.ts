import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  defaultHref='/inspector/my-duties'
  constructor() { }

  ngOnInit() {
  }

}
