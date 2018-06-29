import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  cart: any;
  products_arr = [];

  constructor(private _productService: ProductService) {
    this._productService.cart.subscribe( (cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {
    console.log('>products.component.ts > ngOnInit >');
    this.getAll();
  }



  getAll() {
    console.log('>pets.component.ts > getAll() >');
    this._productService.readAll().subscribe(
      (server_response) => {

      this.products_arr = server_response['data'];
    });
  }

  addToCart(product) {
    console.log("in add to cart");
    for (let idx = 0; idx < this.cart.length; idx++) {
      if (this.cart[idx]._id === product._id) {
        this.cart[idx].qty++;
        console.log("in for loop before: ", this._productService.total)
        this._productService.total += product.price;
        console.log("in for loop after: ", this._productService.total)
        this.cart[idx].price += product.price;
        this._productService.cart.next(this.cart);
        
        return;
      }
    }
    var productToAdd = {};
    productToAdd["_id"] = product._id;
    productToAdd["qty"] = 1;
    productToAdd["name"] = product.name;
    productToAdd["price"] = product.price;

    console.log("total before add: ", this._productService.total)

    this._productService.total += product.price;

    console.log("total after add: ", this._productService.total)

    this.cart.push(productToAdd);
    this._productService.cart.next(this.cart);
  }


}
