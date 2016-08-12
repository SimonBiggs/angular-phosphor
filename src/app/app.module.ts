import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component';
import { RawCoordinatesComponent } from './raw-coordinates.component';
import { PlotComponent } from './plot.component';

import { HeroService }  from './hero.service';
import { ElectronApiService } from './electron-api.service';

@NgModule({
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroFormComponent,
    RawCoordinatesComponent,
    PlotComponent
  ],
  providers: [
    ElectronApiService,
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
