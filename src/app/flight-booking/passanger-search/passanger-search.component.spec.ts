import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerSearchComponent } from './passanger-search.component';

describe('PassangerSearchComponent', () => {
  let component: PassangerSearchComponent;
  let fixture: ComponentFixture<PassangerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
