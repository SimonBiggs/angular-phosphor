import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero.ts';
import { phosphorAppend } from './phosphor-append';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  ngOnInit() {
    phosphorAppend('my-hero-detail');
  }
}
