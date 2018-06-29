import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  subscription: Subscription;
  cart: any;
  total = 0;
   show_total: any;

  constructor(
    private _productService: ProductService
  ) { 
      this._productService.cart.subscribe((cart) => {
      this.cart = cart;
      this.total = _productService.total;
    }, (err) => {}, () => {});
  }


  ngOnInit() {
    this.show_total = this._productService.total;
  }

}