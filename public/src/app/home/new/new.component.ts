import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

console.log('NEW.COMPONENT.TS>');

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct: any;
  msg: any;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = null;
    this.msg = '';
  }

  goHome() {
    console.log('> new.component.ts > goHome() ');
    this._router.navigate(['/']);
  }

  create(myform: NgForm) {
    console.log('> new.component.ts > create()');
    this.newProduct = myform.value;
    this._productService.create(this.newProduct)
    .subscribe(
      response => {
        console.log('> new.component.ts > create() > response =>', response);
        if (response['error']) {
          console.log('response.error =>', response['error']);
          this.msg = response['error'];
        } else {
          this.msg = '';
          this.goHome();
        }
      }
    );
  }

}
