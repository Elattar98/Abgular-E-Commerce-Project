import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ShortenPipe } from './shorten.pipe';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AddnewproductComponent } from './addnewproduct/addnewproduct.component';


const labRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  { path: 'productcart', component: ProductCartComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'addproduct', component: AddnewproductComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ProductCartComponent,
    ShortenPipe,
    ProductdetailsComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UserdetailsComponent,
    AddnewproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(labRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
