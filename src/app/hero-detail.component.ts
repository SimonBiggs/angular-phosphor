import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero.ts';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  ngOnInit () {
    let myherodetail = document.getElementById('my-hero-detail');
    myherodetail.parentNode.removeChild(myherodetail);
    let g1 = document.getElementById('green');
    g1.appendChild(myherodetail);
  }


}
