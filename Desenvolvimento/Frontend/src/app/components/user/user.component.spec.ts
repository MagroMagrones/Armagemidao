import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UserComponent } from './user.component'
import { MainComponent } from 'src/app/template/main/main.component'
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from 'src/app/template/header/header.component'
import { HttpClientModule } from '@angular/common/http'

describe('UserComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [UserComponent, MainComponent, HeaderComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
