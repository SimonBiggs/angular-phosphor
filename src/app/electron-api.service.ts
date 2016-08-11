import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class ElectronApiService {
  private apiurl = 'http://electronfactorapi.simonbiggs.net/parameterise';

  constructor(private http: Http) { }

  // Add new Hero
  send_stuff(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http
               .post(this.apiurl, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
