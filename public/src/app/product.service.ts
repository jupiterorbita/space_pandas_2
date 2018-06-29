import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ReturnStatement } from '@angular/compiler';

console.log('PRODUCT.SERVICE.TS>');

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  total = 0;
  cart = new BehaviorSubject([]);


  create(newProduct) {
    return this._http.post('/create', newProduct);
  }

  readAll() {
    return this._http.get('/readall');
  }

  readSome(product_name) {
    console.log('>>>>>>>>>>>', product_name);
    return this._http.post('/readSome/', {product_name: product_name} );
  }

}
