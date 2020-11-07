import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './pipes/city.pipe';
import { CityValidtorDirective } from './template-driven-validators/city-validator.directive';
import { RoundTripDirective } from './template-driven-validators/round-trip.directive';
import { AsyncCityValidatorDirective } from './template-driven-validators/async-city-validator.directive';

@NgModule({
  declarations: [
    CityPipe,
    CityValidtorDirective,
    RoundTripDirective,
    AsyncCityValidatorDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CityPipe,
    FormsModule,
    CityValidtorDirective,
    RoundTripDirective,
    AsyncCityValidatorDirective,
  ],
})
export class SharedModule {}
