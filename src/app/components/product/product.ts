import {Component, type ElementRef, EventEmitter, Output, ViewChild
} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import type { ProductType } from '../../types/product.type';
import {ButtonEffectDirective} from '../../directives/button-effect.directive';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'product-component',
  standalone: true,
  imports: [FormsModule, ButtonEffectDirective, CurrencyPipe],
  templateUrl: './product.html',

  styleUrl: './product.css'
})


export class ProductComponent {
  @ViewChild('productsElement') productsElement!: ElementRef;
  @Output() productAdded = new EventEmitter<string>();
  // @ViewChild('productsElement') productsElement!: ElementRef;
  public products: ProductType[] = [];

  constructor(
    private productService: ProductService,
    public cartService: CartService,) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }


  public addToCart(product: ProductType): void {
    this.cartService.addToCart(product.title.toUpperCase(), product.price);
    this.productAdded.emit(product.title);
  }
}
