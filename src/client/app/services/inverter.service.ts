
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InverterService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getInverters(): Observable<any> {
    return this.http.get('/api/inverters').map(res => res.json());
  }

  countInverters(): Observable<any> {
    return this.http.get('/api/inverters/count').map(res => res.json());
  }

  addInverter(inverter): Observable<any> {
    return this.http.post('/api/inverter', JSON.stringify(inverter), this.options);
  }

  getInverter(inverter): Observable<any> {
    return this.http.get(`/api/inverter/${inverter._id}`).map(res => res.json());
  }

  editInverter(inverter): Observable<any> {
    return this.http.put(`/api/inverter/${inverter._id}`, JSON.stringify(inverter), this.options);
  }

  deleteInverter(inverter): Observable<any> {
    return this.http.delete(`/api/inverter/${inverter._id}`, this.options);
  }

}