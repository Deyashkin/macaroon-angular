import {Component, signal, ViewChild, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import type {ProductType} from './types/product.type';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import {PresentComponent} from './components/present/present';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent, PresentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {

  protected readonly title = signal('macaroon-angular');
  public benefits = [
    {
      id: 1,
      number: 1,
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      id: 2,
      number: 2,
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      id: 3,
      number: 3,
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      id: 4,
      number: 4,
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ]

  public products: ProductType[] = [
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
  ]

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }


  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
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

    alert('Спасибо за заказ!')

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }
}
