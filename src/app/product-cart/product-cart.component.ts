import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../cartlist.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  cart: string[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.productcart;
  }

}
