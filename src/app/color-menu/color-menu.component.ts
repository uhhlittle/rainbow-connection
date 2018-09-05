import { Component, OnInit } from '@angular/core';
import { timeout } from '../../../node_modules/@types/q';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-color-menu',
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
    this.getGif('red');
  }

  getGif(parameter: string): void {
    const gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${parameter}&api_key=YOUR_API_KEY&limit=5`);
    gif.done(function (data) { console.log("success got data", data); });
  }

  getColorTV(color: string, continuous: boolean) {
    // cancel intervals
    if (!color) {
      return this.getRainbowTV();
    }
    if (!continuous) {
      return this.getGif(color);
    }
    // set up an interval that sets this.gif with color parameter every 10 seconds.
  }

  getRainbowTV(): void {
   // start interval that cycles through colors array every 10 seconds.
  }
}
