 import { Injectable } from '@angular/core';
 import type {ProductType} from '../types/product.type';

@Injectable()
export class ProductService {

  constructor() {
  }

  getProducts(): ProductType[] {
    return [
      {
        id: 1,
        image: '1.png',
        title: 'Макарун с малиной',
        quantity: 1,
        price: 1.70,
      },
      {
        id: 2,
        image: '2.png',
        title: 'Макарун с манго',
        quantity: 3,
        price: 1.0,
      },
      {
        id: 3,
        image: '3.png',
        title: 'Пирог с ванилью',
        quantity: 5,
        price: 1.50,
      },
      {
        id: 4,
        image: '4.png',
        title: 'Пирог с фисташками',
        quantity: 10,
        price: 2.70,
      }
    ];
  }

}
