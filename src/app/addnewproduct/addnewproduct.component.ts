import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { ProductsService } from '../getProducts.service';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent implements OnInit {

  addProductForm!: FormGroup;
  id:number = 21;
  newProduct!: {id: number, image: string, title: string, description: string
    , price: number, category: string, rating: {rate: number, count: number} };

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

onSubmit(){
  this.newProduct={ id: this.id, image: this.addProductForm.value.image
  , title: this.addProductForm.value.title, description: this.addProductForm.value.description
  , price: Number(this.addProductForm.value.price), category: ""
  , rating: { rate: 0, count: 0 } }
  this.productsService.products.push(this.newProduct)
  this.id++;
  console.log(this.productsService.products);

}

}
