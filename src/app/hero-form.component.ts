import { Component } from '@angular/core';
import { FormHero }    from './form-hero';
@Component({
  selector: 'my-hero-form',
  styleUrls: ['hero-form.component.css'],
  templateUrl: './hero-form.component.html',

})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new FormHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  active = true;

  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new FormHero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
