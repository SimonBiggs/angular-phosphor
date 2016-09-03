import { Component, OnInit, Input } from '@angular/core';

import { phosphorAppend } from './phosphor-append';
import { Hero } from './hero.ts';
import { Coords } from './coords.ts';

@Component({
  selector: 'my-raw-coordinates',
  templateUrl: './raw-coordinates.component.html'
})
export class RawCoordinatesComponent implements OnInit {
  // @Input()
  // coords: Coords;
  // @Input()
  // selectedHero: Hero;
  @Input()
  parameteriseInput: string;

  // coords_text: string;
  // object: Object = {
  //   foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}
  // };

  // constructor() {
  //   this.updateCoords(JSON.stringify(this.coords));
  // }

  // ngAfterViewInit() {
  //
  // }

  // stringToCoords(json_text: string) {
  //   let tempcoords: Coords;
  //
  //   try {
  //     let data = JSON.parse(json_text);
  //     tempcoords = {
  //       x: data.x, y: data.y
  //     };
  //   }
  //   catch(err) {
  //     tempcoords = this.coords;
  //   }
  //   finally {
  //     return tempcoords;
  //   }
  // }

  // updateCoords(json_text: any) {
  //   console.log(json_text);
  //   this.coords = JSON.parse(json_text);
  //   this.coords_text = json_text;
  // }

  ngOnInit() {
    phosphorAppend('my-raw-coordinates');

    // this.updateCoords(JSON.stringify(this.coords));
  }


  // public get  coords(){ return JSON.parse(this._phone); }

  onSubmit() { }
}
