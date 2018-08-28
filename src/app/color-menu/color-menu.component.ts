import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-menu',
  templateUrl: './color-menu.component.html',
  styleUrls: ['./color-menu.component.css']
})
export class ColorMenuComponent implements OnInit {
  colors = [
    'red',
    'pink',
    'blue',
    'cyan',
    'lime',
    'green',
    'yellow',
    'tangerine',
    'orange',
  ];
  constructor() {
  }

  ngOnInit() {

  }

}
