import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FlightEditComponent } from './components/flight-edit/flight-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PassangerSearchComponent } from './passanger-search/passanger-search.component';
import { FlightBookingRoutesModule } from './flight-booking-routes.module';
@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    PassangerSearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FlightBookingRoutesModule,
  ],
  exports: [FlightSearchComponent, FlightEditComponent],
})
export class FlightBookingModule {}
