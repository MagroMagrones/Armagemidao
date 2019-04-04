import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

import { AppComponent } from './app.component'
import { HeaderComponent } from './template/header/header.component'
import { FooterComponent } from './template/footer/footer.component'
import { LogoComponent } from './template/logo/logo.component'
import { NavComponent } from './template/nav/nav.component'
import { MainComponent } from './template/main/main.component'
import { UserComponent } from './components/user/user.component'
import { HomeComponent } from './components/home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component'

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
    SignUpComponent
  ],
  imports: [AppRoutingModule, FormsModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
