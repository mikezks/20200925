import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './pipes/city.pipe';


@NgModule({
  declarations: [
    CityPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CityPipe,
    FormsModule
  ]
})
export class SharedModule { }
