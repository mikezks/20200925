import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'New York',
        to: 'Mexiko City',
        date: new Date().toISOString(),
        delayed: false
      }
    ]);
  }
}
