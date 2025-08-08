import { Component } from '@angular/core';
import {CartService} from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'present-component',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './present.html',
  styleUrl: './present.css'
})
export class PresentComponent {
  showPresent: boolean = true;

  constructor(public cartService: CartService) {
  }
}
