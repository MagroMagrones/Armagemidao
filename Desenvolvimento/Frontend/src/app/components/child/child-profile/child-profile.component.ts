import { Component, OnInit } from '@angular/core'
import { ChildService } from 'src/app/services/child.service'
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.css']
})
export class ChildProfileComponent implements OnInit {
  inputName = ''
  inputBirth = null
  inputGender = null
  inputBlood = null
  inputRg = ''
  inputSkin = null
  inputEyes = null
  inputHair = null
  constructor(
    private childService: ChildService,
    private platformLocation: PlatformLocation
  ) {}

  ngOnInit() {
    this.getChild()
  }
  getChild() {
    console.log('[ChildProfileComponent] get')

    this.childService.getchild({
      key: 'id',
      value: ''
    })
  }

  update() {
    console.log('[ChildProfileComponent] update')
    let data
    this.childService.putchild(data)
  }
}
