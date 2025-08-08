import {Component, Input} from '@angular/core';
import type { BenefitType } from '../../types/benefit.type';
import {TruncatePipe} from '../../pipes/truncate-pipe';


@Component({
  selector: 'benefit-component',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './benefit.html',
  styleUrl: './benefit.css'
})
export class BenefitComponent {
  @Input() benefits: BenefitType[] = [];

}
