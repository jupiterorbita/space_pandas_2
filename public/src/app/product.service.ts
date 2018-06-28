import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

console.log('PRODUCT.SERVICE.TS>');

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  cart = new BehaviorSubject([]);


  create(newProduct) {
    return this._http.post('/create', newProduct);
  }

  readAll() {
    return this._http.get('/readall');
  }

}
