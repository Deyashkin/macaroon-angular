import { Component } from '@angular/core';
import {PhoneFormatPipe} from '../../pipes/phone-format-pipe';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [PhoneFormatPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
public instaLink: string = 'index.html';

  constructor(public contactService: ContactService) {}
}
