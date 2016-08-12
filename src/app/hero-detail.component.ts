import { Component, Input } from '@angular/core';
import { Hero } from './hero.ts';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
