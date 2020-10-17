import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): Observable<string> {
    let long: string;
    let short: string;

    switch (value) {
      case 'Graz':
        long = 'Flughafen Graz Thalerhof';
        short = 'GRZ';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      default:
        short = long = value;
    }

    if (fmt === 'short') {
      return of(short);
    }

    return of(long);
  }
}
