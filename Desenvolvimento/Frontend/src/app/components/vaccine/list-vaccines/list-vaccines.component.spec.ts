import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVaccinesComponent } from './list-vaccines.component';

describe('ListVaccinesComponent', () => {
  let component: ListVaccinesComponent;
  let fixture: ComponentFixture<ListVaccinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVaccinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
