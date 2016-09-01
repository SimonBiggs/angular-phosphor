import { Component, OnInit, Input, AfterViewInit, ViewChild} from '@angular/core';

import { phosphorAppend } from './phosphor-append';
declare var Plotly: any;

@Component({
  selector: 'my-plot',
  templateUrl: './plot.component.html'
})
export class PlotComponent implements OnInit, AfterViewInit {
  @Input()
  x: number[];
  @Input()
  y: number[];

  rectW: number = 100;
  rectH: number = 100;
  rectColor: string = '#FF0000';
  context: CanvasRenderingContext2D;

  @ViewChild('myCanvas') myCanvas;

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.tick();
  }

  tick() {
    requestAnimationFrame(() => {
      this.tick();
    });

    let ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = this.rectColor;
    ctx.fillRect(0, 0, this.rectW, this.rectH);
  }


  ngOnInit() {
    phosphorAppend('my-plot');

    // let xmin = Math.min(...this.x);
    // let xmax = Math.max(...this.x);
    // let xptp = xmax - xmin;
    //
    // let ymin = Math.min(...this.y);
    // let ymax = Math.max(...this.y);
    // let yptp = ymax - ymin;
    //
    // let ratio = (
    //   (ymax + yptp * 0.05 - ymin - yptp * 0.05) /
    //   (xmax + xptp * 0.05 - xmin - xptp * 0.05));
    //
    // let trace1 = {
    //   x: this.x,
    //   y: this.y,
    //   type: 'scatter'
    // };
    //
    // let data = [trace1];
    //
    // let layout = {
    //   autosize: false,
    //   width: 400,
    //   height: 400 * ratio * .91,
    //   xaxis: {range: [xmin - xptp * 0.05, xmax + xptp * 0.05]},
    //   yaxis: {range: [ymin - yptp * 0.05, ymax + yptp * 0.05]},
    // };
    //
    // Plotly.newPlot('myDiv', data, layout);
  }

}
