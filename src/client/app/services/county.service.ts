
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CountyService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getCountys(): Observable<any> {
    return this.http.get('/api/countys').map(res => res.json());
  }

  countCountys(): Observable<any> {
    return this.http.get('/api/countys/count').map(res => res.json());
  }

  addCounty(county): Observable<any> {
    return this.http.post('/api/county', JSON.stringify(county), this.options);
  }

  getCounty(county): Observable<any> {
    return this.http.get(`/api/county/${county._id}`).map(res => res.json());
  }

  editCounty(county): Observable<any> {
    return this.http.put(`/api/county/${county._id}`, JSON.stringify(county), this.options);
  }

  deleteCounty(county): Observable<any> {
    return this.http.delete(`/api/county/${county._id}`, this.options);
  }

}