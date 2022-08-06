import { Component, OnInit, OnDestroy } from '@angular/core';


import { ProductsService } from '../getProducts.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []
})

export class ProductListComponent implements OnInit {
  products: {id: number, title: string, price: number, description: string, category: string,
     image: string, rating: {rate: number, count: number}}[]=[];



  constructor(private productsService: ProductsService) {  }

  ngOnInit() {
    this.products = this.productsService.products;
  }

  onFavoriteAdded(title: string){
    this.productsService.favoritelist.push(title);
    console.log(this.productsService.favoritelist);

  }

}
