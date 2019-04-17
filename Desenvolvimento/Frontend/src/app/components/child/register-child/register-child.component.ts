import { Component, OnInit, Input } from '@angular/core'
import { ChildService } from 'src/app/services/child.service'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-register-child',
  templateUrl: './register-child.component.html',
  styleUrls: ['./register-child.component.css']
})
export class RegisterChildComponent implements OnInit {
  inputName = null
  inputBirth = null
  inputGender = null
  inputBlood = null
  inputRg = null
  inputSkin = null
  inputEyes = null
  inputHair = null

  constructor(
    private childService: ChildService,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  save() {
    console.log('[RegisterChildComponent] save')
    if (!this.inputName || !this.inputGender || !this.inputBirth) return

    let data = {
      bound: { id_usuario: this.authService.getId() },
      child: {
        nome: this.inputName,
        data_nascimento: this.inputBirth,
        genero: this.inputGender,
        tipo_sanguineo: this.inputBlood,
        rg: this.inputRg,
        cor_pele: this.inputSkin,
        cor_olhos: this.inputEyes,
        cor_cabelo: this.inputHair
      }
    }
    this.childService.postchild(data)
  }
}
