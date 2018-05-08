
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PanelService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPanels(): Observable<any> {
    return this.http.get('/api/panels').map(res => res.json());
  }

  countPanels(): Observable<any> {
    return this.http.get('/api/panels/count').map(res => res.json());
  }

  addPanel(panel): Observable<any> {
    return this.http.post('/api/panel', JSON.stringify(panel), this.options);
  }

  getPanel(panel): Observable<any> {
    return this.http.get(`/api/panel/${panel._id}`).map(res => res.json());
  }

  editPanel(panel): Observable<any> {
    return this.http.put(`/api/panel/${panel._id}`, JSON.stringify(panel), this.options);
  }

  deletePanel(panel): Observable<any> {
    return this.http.delete(`/api/panel/${panel._id}`, this.options);
  }

}