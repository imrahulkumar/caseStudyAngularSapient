import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DynamicTableService {

  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(this.url);
  }
}
