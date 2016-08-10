import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';

@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) { }

  ngOnInit () {
    let angularnode = document.getElementById('angular');
    angularnode.parentNode.removeChild(angularnode);
    let b1 = document.getElementById('blue');
    b1.appendChild(angularnode);
  }
}
