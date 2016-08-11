import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

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
    HeroDetailComponent
  ],
  providers: [
    ElectronApiService,
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA,  useClass: InMemoryDataService }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
