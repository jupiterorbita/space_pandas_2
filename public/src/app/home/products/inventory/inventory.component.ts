import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  cart: any;
  productToAdd = { 'product_id': 0, 'qty': 0 };
  products_arr = [];
  values: string;
  found: any;

  constructor(private _productService: ProductService) {
    this._productService.cart.subscribe( (cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {
    console.log('>products.component.ts > ngOnInit >');
    this.values = '';
    this.getAll();
  }

// ======== onKey event =============
  onKey(event: any) {
    console.log('====== event =>', event);
    console.log('====== event.target =>', event.target);
    console.log('====== event.target.value =>', event.target.value);
    this.values += event.target.value;
    this._productService.readSome(this.values).subscribe(
      (server_response_arr) => {
        console.log('server_response =>', server_response_arr);
        this.found = server_response_arr['data'];
        console.log('=-=-=-=-=-==--=-= this.found.name =>', this.found[0].name);
      },
      // (err) => {
      //   console.log('onKey -> response -> err=>', err);
      // }
    );
    this.values = '';
  }

  getAll() {
    console.log('>pets.component.ts > getAll() >');
    this._productService.readAll().subscribe(
      (server_response) => {
      this.products_arr = server_response['data'];
    });
  }

  addToCart(product) {
    console.log('in add to cart');
    for (let idx = 0; idx < this.cart.length; idx++) {
      if (this.cart[idx]._id === product._id) {
        this.cart[idx].qty++;
        this.cart[idx].price += product.price;
        return;
      }
    }
    // this.productToAdd["product_id"] = product_id;
    // this.productToAdd["qty"] = 1;
    // this.productToAdd["name"] = product.name

    console.log('product in add', this.productToAdd);
    this.cart.push(product);
    this._productService.cart.next(this.cart);
  }


}
