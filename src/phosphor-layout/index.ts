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
r1.id = 'my-hero-detail-container';
let r2 = createContent('Red');
let r3 = createContent('Red');

let b1 = createContent('Blue');
b1.id = 'my-app-container';

let b2 = createContent('Blue');
b2.id = 'my-raw-coordinates-container';

let g1 = createContent('White');
g1.id = 'my-plot-container';

let g2 = createContent('Green');
let g3 = createContent('Green');

let y1 = createContent('Yellow');
y1.id = 'my-hero-form-container';

let y2 = createContent('Yellow');

let panel = new DockPanel();
panel.id = 'main';


panel.insertBottom(y1);
panel.insertLeft(g1, y1);
panel.insertBottom(b2);

panel.insertTabBefore(g2, b2);
panel.insertTabBefore(y2, g2);
panel.insertTabBefore(g3, y2);
panel.insertTabBefore(r3, y1);

panel.insertLeft(b1);
panel.insertBottom(r1, b1);
panel.insertTabBefore(r2, b1);

panel.attach(document.body);

window.onresize = () => { panel.update(); };
