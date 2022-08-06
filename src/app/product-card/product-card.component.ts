import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartService } from '../cartlist.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  @Input() product!: {id: number, image: string, title: string, description: string, price: number,
    rating: {rate: number, count: number}};
  @Output() favoriteAdded = new EventEmitter<string>();

  show: boolean = false;

  constructor(private cartService:CartService) {  }

  ngOnInit(): void {
  }

  onAddProduct() {
    this.cartService.addtoCart.next(this.product.title);
  }

  onAddFavorite() {
    this.favoriteAdded.emit(this.product.title);
  }

}
