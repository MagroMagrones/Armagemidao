import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NavComponent } from './nav.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { UserComponent } from 'src/app/components/user/user.component'
import { ChildComponent } from 'src/app/components/child/child/child.component'
import { ChildProfileComponent } from 'src/app/components/child/child-profile/child-profile.component'
import { ChildCardComponent } from 'src/app/components/child/child-card/child-card.component'
import { ListChildrenComponent } from 'src/app/components/child/list-children/list-children.component'
import { VaccineComponent } from 'src/app/components/vaccine/vaccine/vaccine.component'
import { MedicineComponent } from 'src/app/components/medicine/medicine/medicine.component'
import { AppointmentComponent } from 'src/app/components/appointment/appointment.component'
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component'
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component'
import { NewPasswordComponent } from 'src/app/components/new-password/new-password.component'
import { HomeComponent } from 'src/app/components/home/home.component'
import { HeaderComponent } from '../header/header.component'
import { MainComponent } from '../main/main.component'
import { FormsModule } from '@angular/forms'
import { RegisterChildComponent } from 'src/app/components/child/register-child/register-child.component'
import { RegisterMedicineComponent } from 'src/app/components/medicine/register-medicine/register-medicine.component'
import { RegisterVaccineComponent } from 'src/app/components/vaccine/register-vaccine/register-vaccine.component'
import { RegisterAppointmentComponent } from 'src/app/components/appointment/register-appointment/register-appointment.component'
import { ListVaccinesComponent } from 'src/app/components/vaccine/list-vaccines/list-vaccines.component'
import { ListMedicinesComponent } from 'src/app/components/medicine/list-medicines/list-medicines.component'
import { ListAppointmentComponent } from 'src/app/components/appointment/list-appointment/list-appointment.component'

describe('NavComponent', () => {
  let component: NavComponent
  let fixture: ComponentFixture<NavComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, FormsModule],
      declarations: [
        NavComponent,
        UserComponent,
        ChildComponent,
        ChildProfileComponent,
        ChildCardComponent,
        ListChildrenComponent,
        VaccineComponent,
        MedicineComponent,
        AppointmentComponent,
        SignInComponent,
        SignUpComponent,
        NewPasswordComponent,
        HomeComponent,
        HeaderComponent,
        MainComponent,
        RegisterChildComponent,
        RegisterMedicineComponent,
        RegisterVaccineComponent,
        RegisterAppointmentComponent,
        ListVaccinesComponent,
        ListMedicinesComponent,
        ListAppointmentComponent
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
