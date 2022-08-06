import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../getProducts.service';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css']
})

export class FavoriteProductComponent implements OnInit {

  favorites: string[] = [];

  constructor(private productsService: ProductsService) {  }

  ngOnInit(): void {
    this.favorites = this.productsService.favoritelist;
    console.log(this.favorites);

  }

}
