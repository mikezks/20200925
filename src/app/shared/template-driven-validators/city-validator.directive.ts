import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidtorDirective,
      multi: true,
    },
  ],
})
export class CityValidtorDirective implements Validator {
  @Input() city: string[] = [];
  constructor() {}
  validate(control: AbstractControl): ValidationErrors {
    console.log(this.city);
    if (this.city.indexOf(control.value) > -1) {
      return {};
    }
    return {
      city: {
        validCities: this.city,
        provide: control.value,
      },
    };
  }
}
