import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { publish, share, shareReplay } from 'rxjs/operators';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  basket = {
    3: true,
    5: true,
  };

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    const observable = this.flightService
      .find(this.from, this.to)
      .pipe(shareReplay(1));

    observable.subscribe((_) => console.log(1));
    setTimeout(() => {
      observable.subscribe((_) => console.log(2));
    }, 2000);
  }

  search(): void {
    //  .subscribe(flights => this.flights = flights);
  }
}
