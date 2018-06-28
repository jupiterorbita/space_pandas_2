import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

console.log('PRODUCT.SERVICE.TS>');

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }


  create(newProduct) {
    console.log('> Product.service.ts > create(newProduct) > SERVER >');
    return this._http.post('/create', newProduct);
  }

  readAll() {
    console.log('> product.service.ts > readAll() > SERVER >');
    return this._http.get('/readall');
  }

}
