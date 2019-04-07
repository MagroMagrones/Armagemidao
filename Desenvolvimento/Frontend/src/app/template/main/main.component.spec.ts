import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MainComponent } from './main.component'
import { HeaderComponent } from '../header/header.component'

describe('MainComponent', () => {
  let component: MainComponent
  let fixture: ComponentFixture<MainComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, HeaderComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
