import { Component } from '@angular/core';



@Component({
  selector: 'header-component',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  protected readonly scrollTo = scrollTo;
  public phoneNumber: string = '+375 (29) 368-98-68';
}
