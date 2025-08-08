import { Component } from '@angular/core';
import {PhoneFormatPipe} from '../../pipes/phone-format-pipe';
import { ContactService } from '../../services/contact.service';




@Component({
  selector: 'header-component',
  standalone: true,
  imports: [PhoneFormatPipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  protected readonly scrollTo = scrollTo;
  // public phoneNumber: string = '375293689868';
  constructor(public contactService: ContactService) {}
}
