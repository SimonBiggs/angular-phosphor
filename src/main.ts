
import {
  DockPanel
} from 'phosphor-dockpanel';

import {
  Widget
} from 'phosphor-widget';

import './index.css';


function createContent(title: string): Widget {
  let widget = new Widget();
  widget.addClass('content');
  widget.addClass(title.toLowerCase());

  widget.title.text = title;
  widget.title.closable = true;

  return widget;
}


function main(): void {

  let r2 = createContent('Red');
  let r3 = createContent('Red');

  let b1 =  new Widget();
    b1.addClass('ContextArea');
    b1.node.innerHTML = ('<h2>Notice the menu bar at the top of the document.</h2>' +
        '<h2>Right click this panel for a context menu.</h2>' +
        '<my-app>Loading...</my-app>');
    b1.title.text = 'Demo';
  let b2 = createContent('Blue');

  let g1 = createContent('Green');
  let g2 = createContent('Green');
  let g3 = createContent('Green');

  let y1 = createContent('Yellow');
  let y2 = createContent('Yellow');

  let panel = new DockPanel();
  panel.id = 'main';


  panel.insertLeft(b1);
  panel.insertBottom(y1, b1);
  panel.insertLeft(g1, y1);

  panel.insertBottom(b2);

  panel.insertTabBefore(g2, b2);
  panel.insertTabBefore(y2, g2);
  panel.insertTabBefore(g3, y2);
  panel.insertTabBefore(r2, b1);
  panel.insertTabBefore(r3, y1);

  panel.attach(document.body);

  window.onresize = () => { panel.update(); };
}


window.onload = main;


import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

bootstrap(AppComponent, [
    // These are dependencies of our App
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS
  ])
  .catch(err => console.error(err));
