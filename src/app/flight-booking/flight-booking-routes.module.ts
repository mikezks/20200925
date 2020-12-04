import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightEditComponent } from './components/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';
import { PassangerSearchComponent } from './passanger-search/passanger-search.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

const flightRoutes: Routes = [
  { path: 'passenger-search', component: PassangerSearchComponent },
  { path: 'flight-search', component: FlightSearchComponent },
  { path: 'flight-search/:id', component: FlightEditComponent },
  { path: 'type', component: TypeaheadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(flightRoutes)],
  exports: [RouterModule],
})
export class FlightBookingRoutesModule {}
