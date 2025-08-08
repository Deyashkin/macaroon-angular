import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true,
})

export class PhoneFormatPipe implements PipeTransform {
  transform(phone: string): string {
    if (!phone || phone.length !== 12) return phone;

    return `+${phone.substring(0, 3)} (${phone.substring(3, 5)}) ${phone.substring(5, 8)}-${phone.substring(8, 10)}-${phone.substring(10)}`;
  }
}
