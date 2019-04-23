import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { LogoComponent } from './template/logo/logo.component';
import { NavComponent } from './template/nav/nav.component';
import { MainComponent } from './template/main/main.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { RegisterChildComponent } from './components/child/register-child/register-child.component';
import { ListChildrenComponent } from './components/child/list-children/list-children.component';
import { ChildCardComponent } from './components/child/child-card/child-card.component';
import { ChildProfileComponent } from './components/child/child-profile/child-profile.component';
import { ListVaccinesComponent } from './components/vaccine/list-vaccines/list-vaccines.component';
import { RegisterVaccineComponent } from './components/vaccine/register-vaccine/register-vaccine.component';
import { ListMedicinesComponent } from './components/medicine/list-medicines/list-medicines.component';
import { RegisterMedicineComponent } from './components/medicine/register-medicine/register-medicine.component';
import { MedicineComponent } from './components/medicine/medicine/medicine.component';
import { VaccineComponent } from './components/vaccine/vaccine/vaccine.component';
import { ChildComponent } from './components/child/child/child.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { RegisterAppointmentComponent } from './components/appointment/register-appointment/register-appointment.component';
import { ListAppointmentComponent } from './components/appointment/list-appointment/list-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavComponent,
    MainComponent,
    UserComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    NewPasswordComponent,
    RegisterChildComponent,
    ListChildrenComponent,
    ChildCardComponent,
    ChildProfileComponent,
    ListVaccinesComponent,
    RegisterVaccineComponent,
    ListMedicinesComponent,
    RegisterMedicineComponent,
    MedicineComponent,
    VaccineComponent,
    ChildComponent,
    AppointmentComponent,
    RegisterAppointmentComponent,
    ListAppointmentComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
