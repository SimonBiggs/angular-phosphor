import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { phosphorAppend } from './phosphor-append';
declare var Bokeh: any;

@Component({
  selector: 'my-plot',
  templateUrl: './plot.component.html'
})
export class PlotComponent implements OnInit, OnChanges {
  @Input()
  parameteriseInput: string;

  parsedJSON: any;

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


  ngOnChanges() {
    let re = new RegExp('^\{\s*\".*\}$|^\[\n?\{\s*\".*\}\n?\]$');
    // if (this.parameteriseInput.match(re))
    this.parsedJSON = {
      'x': [0],
      'y': [0]
    };

    if (this.parameteriseInput.match(re)) {
      let json_test = JSON.parse(this.parameteriseInput);
      if ('x' in json_test && 'y' in json_test) {
        this.parsedJSON = json_test;
        if (this.parsedJSON.x.length === this.parsedJSON.y.length) {
          this.source.data = this.parsedJSON;
        }
      }
    }
  }


  ngOnInit() {
    phosphorAppend('my-plot');

    // this.fig.line({ field: 'x' }, { field: 'y' }, {
    //     source: this.source,
    //     line_width: 3
    // });

    // this.doc.add_root(this.fig);
    // let div = document.getElementById('plot');
    // Bokeh.embed.add_document_standalone(this.doc, div);
  }
}
