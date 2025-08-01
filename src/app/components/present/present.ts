import { Component } from '@angular/core';

@Component({
  selector: 'present-component',
  standalone: true,
  imports: [],
  templateUrl: './present.html',
  styleUrl: './present.css'
})
export class PresentComponent {
  showPresent: boolean = true;
}
