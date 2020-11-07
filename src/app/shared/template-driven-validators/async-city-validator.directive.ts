import { HttpClient } from '@angular/common/http';
import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: 'input[cityasync]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidatorDirective,
      multi: true,
    },
  ],
})
export class AsyncCityValidatorDirective implements Validator {
  constructor(private http: HttpClient) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return new Promise<ValidationErrors>((resolve) => {
      setTimeout(() => {
        if (control.value === 'Graz' || control.value === 'Hamburg') {
          resolve({});
        }
        resolve({ cityasync: true });
      }, 3000);
    });
  }
}
