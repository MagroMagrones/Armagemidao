import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SignUpComponent } from './sign-up.component'
import { MainComponent } from 'src/app/template/main/main.component'
import { HeaderComponent } from 'src/app/template/header/header.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

describe('SignUpComponent', () => {
  let component: SignUpComponent
  let fixture: ComponentFixture<SignUpComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [SignUpComponent, MainComponent, HeaderComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
