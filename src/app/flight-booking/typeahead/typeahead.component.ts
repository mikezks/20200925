import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Flight } from 'src/app/entities/flight';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
})
export class TypeaheadComponent implements OnInit {
  control = new FormControl();
  loading = false;
  flights$: Observable<Flight[]>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.flights$ = this.control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((_) => (this.loading = true)),
      switchMap((v) => {
        return this.load(v);
      }),
      tap((_) => (this.loading = false))
    );
  }

  load(from: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams().set('from', from);

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }
}
