import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './home/cart/cart.component';
import { PromotionComponent } from './home/products/promotion/promotion.component';
import { InventoryComponent } from './home/products/inventory/inventory.component';
import { ProductsComponent } from './home/products/products.component';
import { NewComponent } from './home/new/new.component';
// import { StorageServiceModule } from 'angular-webstorage-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    PromotionComponent,
    InventoryComponent,
    ProductsComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // StorageServiceModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
