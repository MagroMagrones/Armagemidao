import { Component, OnInit } from '@angular/core'
import { ChildService } from 'src/app/services/child.service'

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
  constructor(private childService: ChildService) {}

  ngOnInit() {}
  getChild(id) {
    console.log('[ChildProfileComponent] get')
    this.childService.getchild(id)
  }

  update() {
    console.log('[ChildProfileComponent] update')
    let data
    this.childService.putchild(data)
  }
}
