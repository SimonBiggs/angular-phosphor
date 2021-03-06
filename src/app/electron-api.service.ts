import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class ElectronApiService {
  private parameteriseURL = 'http://electronapi.simonbiggs.net/parameterise';
  // private modelURL = 'http://electronapi.simonbiggs.net/model';
  private wakeUpURL = 'http://electronapi.simonbiggs.net/';

  // private wakeUpURL = 'http://localhost:5000/';
  // private parameteriseURL = 'http://localhost:5000/parameterise';

  constructor(private http: Http) { }

  // Add new Hero
  // send_stuff(hero: Hero): Promise<Hero> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/x-www-form-urlencoded'});

  //   return this.http
  //              .post(this.apiurl, JSON.stringify(hero), {headers: headers})
  //              .toPromise()
  //              .then(res => res.json().data)
  //              .catch(this.handleError);
  // }

  // Initial get from server to wake it up
  wakeUpServer() {
    this.http
      .get(this.wakeUpURL);
  }

  parameteriseInsert(parameteriseInput: string): Promise<any> {
    return this.http
            .post(this.parameteriseURL, parameteriseInput)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
