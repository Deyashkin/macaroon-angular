import {Component, ElementRef, signal, ViewChild, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header';
import {FooterComponent} from './components/footer/footer';
import {PresentComponent} from './components/present/present';
import {ProductService} from './services/product.service';
import {BenefitService} from './services/benefit.service';
import type {BenefitType} from './types/benefit.type';
import {CartService} from './services/cart.service';
import {ProductComponent} from './components/product/product';
import { BenefitComponent } from './components/benefit/benefit';
import {ButtonEffectDirective} from './directives/button-effect.directive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent, PresentComponent,
    ProductComponent, BenefitComponent, ButtonEffectDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
  providers: [ProductService, BenefitService]
})

export class App {
  @ViewChild(ProductComponent) productComponent!: ProductComponent;
  @ViewChild('ctaElement') ctaElement!: ElementRef;

  protected readonly title = signal('macaroon-angular');
  public benefits: BenefitType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  constructor(
              private benefitService: BenefitService,
              public cartService: CartService,
              ) {
    this.cartService.scrollToForm$.subscribe(() => {
      this.scrollToForm();
    });
  }

  private scrollToForm(): void {
    this.ctaElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    this.benefits = this.benefitService.getBenefits();
  }

  // get selectedProduct(): string {
  //   return this.cartService.selectedProduct;
  // }


  public scrollTo(target: 'products' | 'cta'): void {
    try {
      const element = target === 'products'
        ? this.productComponent?.productsElement?.nativeElement
        : this.ctaElement?.nativeElement;

      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    } catch (error) {
      console.error('Error during scrolling:', error);
    }
  }

  createOrder(): void {
    if (!this.cartService.selectedProduct) {
      alert('заполните поле "Ваш выбор"')
      return;
    }
    if (!this.formValues.name) {
      alert('Введите ваше имя')
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите телефон')
      return;
    }

    alert('Спасибо за заказ!');
    this.cartService.clearCart();
    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }

  showProductAddedAlert(productName: string): void {
    alert(`${productName} добавлен в корзину!`);
  }
}
