import { DockPanel } from 'phosphor-dockpanel';
import { Widget } from 'phosphor-widget';

import './index.css';

function createContent(title: string): Widget {
  let widget = new Widget();
  widget.addClass('content');
  widget.addClass(title.toLowerCase());

  widget.title.text = title;
  widget.title.closable = true;

  return widget;
}

let r1 = createContent('Red');
let r2 = createContent('Red');
let r3 = createContent('Red');

let b1 = createContent('Blue');
b1.id = 'blue';
let b2 = createContent('Blue');

let g1 = createContent('Green');
let g2 = createContent('Green');
let g3 = createContent('Green');

let y1 = createContent('Yellow');
let y2 = createContent('Yellow');

let panel = new DockPanel();
panel.id = 'main';

panel.insertRight(b1);
panel.insertBottom(y1, b1);
panel.insertLeft(g1, y1);

panel.insertBottom(b2);

panel.insertTabAfter(r1, b1);
panel.insertTabBefore(g2, b2);
panel.insertTabBefore(y2, g2);
panel.insertTabBefore(g3, y2);
panel.insertTabBefore(r2, b1);
panel.insertTabBefore(r3, y1);

panel.attach(document.body);

window.onresize = () => { panel.update(); };
