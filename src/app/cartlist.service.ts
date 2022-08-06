import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class CartService{
    productcart: string[] = [];
    addtoCart = new Subject<string>();
}