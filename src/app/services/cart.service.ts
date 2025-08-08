import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  totalAmount: number = 0;
  selectedProduct: string = '';
  private scrollSubject = new Subject<void>();

  scrollToForm$ = this.scrollSubject.asObservable();

  addToCart(productTitle: string, price: number): void {
    this.count++;
    this.totalAmount += price;
    this.selectedProduct = productTitle;
    this.scrollSubject.next();
  }

  clearCart(): void {
    this.count = 0;
    this.totalAmount = 0;
    this.selectedProduct = '';
  }
}
