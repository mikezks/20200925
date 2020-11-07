import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FlightService } from '../../services/flight.service';
import {
  cityValidator,
  cityValidatorWithParams,
} from '../../../shared/reactive-validators/reactive-valitators';
@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  formValueChangeSubscription: Subscription;
  constructor(private fb: FormBuilder, private flightService: FlightService) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [1],
      from: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          cityValidator,
          cityValidatorWithParams(['Graz']),
        ],
      ],
      to: [],
      date: [],
    });
    this.flightService.load(1).subscribe((f) => this.editForm.patchValue(f));
    this.formValueChangeSubscription = this.editForm.controls.from.valueChanges.subscribe(
      (value: string) => {
        console.log('From value changed', value);
      }
    );
  }

  save(): void {
    console.log('From', this.editForm.controls?.from);
    console.log('To', this.editForm.controls?.to);
    console.log('Date', this.editForm.controls?.date);
    console.log('Id', this.editForm.controls?.id);
  }

  ngOnDestroy(): void {
    this.formValueChangeSubscription.unsubscribe();
  }
}
