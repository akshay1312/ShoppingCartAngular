import { Injectable } from '@angular/core';
import {Product} from "./admin/admin-products/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT: Product[] = [
    {
      id: 1,
      title: 'Bread',
      price: 3
    },
    {
      id: 2,
      title: 'Milk',
      price: 4
    }
  ];
  constructor() { }

  create(product: any) {
    console.log("Created Product")
    return "success";
  }
  getAll() {
    return this.PRODUCT;

  }
}

