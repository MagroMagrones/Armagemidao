import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SignInComponent } from './sign-in.component'
import { MainComponent } from 'src/app/template/main/main.component'
import { HeaderComponent } from 'src/app/template/header/header.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

describe('SignInComponent', () => {
  let component: SignInComponent
  let fixture: ComponentFixture<SignInComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [SignInComponent, MainComponent, HeaderComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
