import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMedicineComponent } from './register-medicine.component';

describe('RegisterMedicineComponent', () => {
  let component: RegisterMedicineComponent;
  let fixture: ComponentFixture<RegisterMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
