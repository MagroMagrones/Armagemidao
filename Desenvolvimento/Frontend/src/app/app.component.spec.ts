import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { LogoComponent } from './template/logo/logo.component'
import { NavComponent } from './template/nav/nav.component'
import { FooterComponent } from './template/footer/footer.component'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { UserComponent } from './components/user/user.component'
import { HomeComponent } from './components/home/home.component'
import { MainComponent } from './template/main/main.component'
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './template/header/header.component'
import { APP_BASE_HREF } from '@angular/common'
const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        AppComponent,
        LogoComponent,
        NavComponent,
        FooterComponent,
        SignInComponent,
        SignUpComponent,
        UserComponent,
        HomeComponent,
        MainComponent,
        HeaderComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents()
  })),
    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent)
      const app = fixture.debugElement.componentInstance
      expect(app).toBeTruthy()
    }))
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   const app = fixture.debugElement.componentInstance
  //   expect(app.title).toEqual('app')
  // }))
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   fixture.detectChanges()
  //   const compiled = fixture.debugElement.nativeElement
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to bbwatch!'
  //   )
  // }))
})
