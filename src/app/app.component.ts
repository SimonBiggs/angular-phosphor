import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.ts';
import { HeroService } from './hero.service';
import { ElectronApiService } from './electron-api.service';

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero;
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private electronApiService: ElectronApiService
  ) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.electronApiService.send_stuff(this.selectedHero);
  }

  ngOnInit() {
    this.getHeroes();

    let myapp = document.getElementById('my-app');
    myapp.parentNode.removeChild(myapp);
    let myappcontainer = document.getElementById('my-app-container');
    myappcontainer.appendChild(myapp);
  }

}
