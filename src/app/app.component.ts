import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.ts';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero;
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  ngOnInit() {
    this.getHeroes();
  }

}
