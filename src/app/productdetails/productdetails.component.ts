import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../getProducts.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product!: {image: string, title: string, description: string, price: number};
  productID!:number

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params) => {
        this.productID = params['id'];
      }
    );
    this.product = this.productsService.products[this.productID-1];
  }

}
