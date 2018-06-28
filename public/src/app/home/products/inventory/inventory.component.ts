import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products_arr: any;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    console.log('>products.component.ts > ngOnInit >');
    this.getAll();
  }

  getAll() {
    console.log('>pets.component.ts > getAll() >');
    this._productService.readAll().subscribe(
      (server_response) => {
      console.log(
        'pets.component.ts > getAll() > server_response =>',
        server_response
      );
      this.products_arr = server_response['data'];
    });
  }
}
