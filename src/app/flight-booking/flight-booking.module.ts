import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FlightEditComponent } from './components/flight-edit/flight-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [FlightSearchComponent, FlightEditComponent],
})
export class FlightBookingModule {}
