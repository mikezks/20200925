import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cityValidator(control: AbstractControl): ValidationErrors {
  if (control.value === 'Graz' || control.value === 'Hamburg') {
    return {};
  }
  return { city: true };
}

export function cityValidatorWithParams(cities: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (cities.indexOf(control.value) > -1) {
      return {};
    }
    return {
      cityValidatorWithParams: {
        validCities: cities,
        provide: control.value,
      },
    };
  };
}
