import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RegisterAppointmentComponent } from './register-appointment.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MainComponent } from 'src/app/template/main/main.component'
import { HeaderComponent } from 'src/app/template/header/header.component'
import { ListAppointmentComponent } from '../list-appointment/list-appointment.component'
import { HomeComponent } from '../../home/home.component'
import { UserComponent } from '../../user/user.component'
import { SignInComponent } from '../../sign-in/sign-in.component'
import { SignUpComponent } from '../../sign-up/sign-up.component'
import { NewPasswordComponent } from '../../new-password/new-password.component'
import { ChildComponent } from '../../child/child/child.component'
import { VaccineComponent } from '../../vaccine/vaccine/vaccine.component'
import { MedicineComponent } from '../../medicine/medicine/medicine.component'
import { ChildProfileComponent } from '../../child/child-profile/child-profile.component'
import { RegisterChildComponent } from '../../child/register-child/register-child.component'
import { RegisterVaccineComponent } from '../../vaccine/register-vaccine/register-vaccine.component'
import { RegisterMedicineComponent } from '../../medicine/register-medicine/register-medicine.component'
import { ListChildrenComponent } from '../../child/list-children/list-children.component'
import { ListVaccinesComponent } from '../../vaccine/list-vaccines/list-vaccines.component'
import { ListMedicinesComponent } from '../../medicine/list-medicines/list-medicines.component'
import { ChildCardComponent } from '../../child/child-card/child-card.component'
import { ChildService } from 'src/app/services/child.service'
import { AuthService } from 'src/app/services/auth.service'
import { AppointmentService } from 'src/app/services/appointment.service'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { AppointmentComponent } from '../appointment.component'

describe('RegisterAppointmentComponent', () => {
  let component: RegisterAppointmentComponent
  let fixture: ComponentFixture<RegisterAppointmentComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterAppointmentComponent,
        MainComponent,
        HeaderComponent,
        RegisterAppointmentComponent,
        ListAppointmentComponent,
        HomeComponent,
        UserComponent,
        SignInComponent,
        SignUpComponent,
        NewPasswordComponent,
        ChildComponent,
        VaccineComponent,
        MedicineComponent,
        ChildProfileComponent,
        RegisterChildComponent,
        RegisterVaccineComponent,
        RegisterMedicineComponent,
        ListChildrenComponent,
        ListVaccinesComponent,
        ListMedicinesComponent,
        ChildCardComponent,
        AppointmentComponent
      ],
      imports: [FormsModule, HttpClientModule, AppRoutingModule],
      providers: [ChildService, AuthService, AppointmentService]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAppointmentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
