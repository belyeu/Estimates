import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Contact} from "../models/contact";

@Injectable()
export class SearchService {
  constructor(private http: Http) { }
  

  search(term: string): Observable<Contact[]> {
    
    return this.http
      .get(`app/contacts/?name=${term}`)
      .map((r: Response) => r.json().data as Contact[])
      .catch((error:any) => {
            console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}
  