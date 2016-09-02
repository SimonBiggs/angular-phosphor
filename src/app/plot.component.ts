import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { phosphorAppend } from './phosphor-append';
// declare var Plotly: any;
declare var Bokeh: any;

@Component({
  selector: 'my-plot',
  templateUrl: './plot.component.html'
})
export class PlotComponent implements OnInit, OnChanges {
  @Input()
  x: number[];
  @Input()
  y: number[];

  plt = Bokeh.Plotting;
  tools = 'pan,crosshair,wheel_zoom,box_zoom,reset,save';
  xrange = Bokeh.Range1d(-6, 6);
  yrange = Bokeh.Range1d(-6, 6);
  fig = this.plt.figure({
    title: 'Colorful Scatter', tools: this.tools,
    plot_width: 300, plot_height: 300,
    x_range: this.xrange, y_range: this.yrange
  });
  source = new Bokeh.ColumnDataSource();
  doc = new Bokeh.Document();
  // xaxis = new Bokeh.LinearAxis();
  // yaxis = new Bokeh.LinearAxis();
  // xgrid = new Bokeh.Grid({ ticker: this.xaxis.ticker, dimension: 0 });
  // ygrid = new Bokeh.Grid({ ticker: this.yaxis.ticker, dimension: 1 });
  // line = new Bokeh.Line({
  //   x: { field: 'x' },
  //   y: { field: 'y' },
  //   line_width: 3
  // });
  // plot = new Bokeh.Plot({
  //   title: 'BokehJS Plot',
  //   x_range: this.xrange,
  //   y_range: this.yrange,
  //   plot_width: 300,
  //   plot_height: 300
  // });


  ngOnChanges() {
    // this.fig.set({x_range: Bokeh.Range1d(-6, 6)});
    this.source.data = { x: this.x, y: this.y };
    // this.xrange = Bokeh.Range1d(-5, 5);
  }


  ngOnInit() {
    phosphorAppend('my-plot');

    // this.plot.add_layout(this.xaxis, 'below');
    // this.plot.add_layout(this.yaxis, 'left');
    // this.plot.add_layout(this.xgrid);
    // this.plot.add_layout(this.ygrid);
    // this.plot.add_glyph(this.line, this.source);

    this.fig.line({ field: 'x' }, { field: 'y' }, {
        source: this.source,
        line_width: 3
    });

    this.doc.add_root(this.fig);
    let div = document.getElementById('plot');
    Bokeh.embed.add_document_standalone(this.doc, div);
  }
}
