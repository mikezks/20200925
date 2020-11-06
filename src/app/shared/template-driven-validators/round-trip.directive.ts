import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: 'form[roundtrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripDirective,
      multi: true,
    },
  ],
})
export class RoundTripDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors {
    const group = control as FormGroup;

    const from = group.controls?.from;
    const to = group.controls?.to;

    if (!from || !to) {
      return {};
    }

    if (from.value === to.value) {
      return { roundtrip: true };
    }
    return {};
  }
}
