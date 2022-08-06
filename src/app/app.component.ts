import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { CartService } from './cartlist.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService]
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'lab3';

  private addedSub!: Subscription;

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.addedSub = this.cartService.addtoCart.subscribe( title=>{
      this.cartService.productcart.push(title);
    });
  }

  ngOnDestroy(): void {
    this.addedSub.unsubscribe();
  }

}
