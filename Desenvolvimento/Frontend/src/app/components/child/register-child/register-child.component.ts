import { Component, OnInit, Input } from '@angular/core'
import { ChildService } from 'src/app/services/child.service'

@Component({
  selector: 'app-register-child',
  templateUrl: './register-child.component.html',
  styleUrls: ['./register-child.component.css']
})
export class RegisterChildComponent implements OnInit {
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
  save() {
    console.log('[RegisterChildComponent] save')
    let data
    this.childService.postchild(data)
  }
}
