import { Component, OnInit, Input } from '@angular/core';

import { phosphorAppend } from './phosphor-append';

@Component({
  selector: 'my-raw-coordinates',
  templateUrl: './raw-coordinates.component.html'
})
export class RawCoordinatesComponent implements OnInit {
  @Input()
  x: number[];
  @Input()
  y: number[];

  ngOnInit() {
    phosphorAppend('my-raw-coordinates');
  }

  onSubmit() { }
}
