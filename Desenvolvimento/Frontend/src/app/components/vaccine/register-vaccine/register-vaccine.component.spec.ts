import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVaccineComponent } from './register-vaccine.component';

describe('RegisterVaccineComponent', () => {
  let component: RegisterVaccineComponent;
  let fixture: ComponentFixture<RegisterVaccineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVaccineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
