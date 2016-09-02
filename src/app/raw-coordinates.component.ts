import { Component, OnInit, Input } from '@angular/core';

import { phosphorAppend } from './phosphor-append';
import { Hero } from './hero.ts';
import { Coords } from './coords.ts';

@Component({
  selector: 'my-raw-coordinates',
  templateUrl: './raw-coordinates.component.html'
})
export class RawCoordinatesComponent implements OnInit {
  @Input()
  coords: Coords;
  @Input()
  selectedHero: Hero;

  ngOnInit() {
    phosphorAppend('my-raw-coordinates');
  }

  onSubmit() { }
}
