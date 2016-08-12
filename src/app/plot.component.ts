import { Component, OnInit, Input } from '@angular/core';

import { phosphorAppend } from './phosphor-append';
declare var Plotly: any;

@Component({
  selector: 'my-plot',
  templateUrl: './plot.component.html'
})
export class PlotComponent implements OnInit {
  @Input()
  x: number[];
  @Input()
  y: number[];

  ngOnInit() {
    phosphorAppend('my-plot');

    let xmin = Math.min(...this.x);
    let xmax = Math.max(...this.x);
    let xptp = xmax - xmin;

    let ymin = Math.min(...this.y);
    let ymax = Math.max(...this.y);
    let yptp = ymax - ymin;

    let ratio = (
      (ymax + yptp * 0.05 - ymin - yptp * 0.05) /
      (xmax + xptp * 0.05 - xmin - xptp * 0.05));

    let trace1 = {
      x: this.x,
      y: this.y,
      type: 'scatter'
    };

    let data = [trace1];

    let layout = {
      autosize: false,
      width: 400,
      height: 400 * ratio * .91,
      xaxis: {range: [xmin - xptp * 0.05, xmax + xptp * 0.05]},
      yaxis: {range: [ymin - yptp * 0.05, ymax + yptp * 0.05]},
    };

    Plotly.newPlot('myDiv', data, layout);
  }

}
