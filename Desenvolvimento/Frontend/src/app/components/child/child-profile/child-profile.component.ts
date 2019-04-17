import { Component, OnInit } from '@angular/core'
import { ChildService } from 'src/app/services/child.service'
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.css']
})
export class ChildProfileComponent implements OnInit {
  id = null
  inputName = ''
  inputBirth = null
  inputGender = null
  inputBlood = null
  inputRg = ''
  inputSkin = null
  inputEyes = null
  inputHair = null

  oldBlood = null
  oldRg = null
  oldSkin = null
  oldEyes = null
  oldHair = null
  constructor(
    private childService: ChildService,
    private platformLocation: PlatformLocation
  ) {}

  ngOnInit() {
    this.getChild()
  }
  getChild() {
    console.log('[ChildProfileComponent] get')
    let childId = (this.platformLocation as any).location.href.split('/')[5]

    this.childService
      .getchild({
        key: 'id',
        value: childId
      })
      .then((res: any) => {
        this.id = res[0].id

        this.inputName = res[0].nome
        this.inputBirth = res[0].data_nascimento.split('T')[0]
        this.inputGender = res[0].genero

        this.inputBlood = res[0].tipo_sanguineo
        this.oldBlood = res[0].tipo_sanguineo
        this.inputRg = res[0].rg
        this.oldRg = res[0].rg
        this.inputSkin = res[0].cor_pele
        this.oldSkin = res[0].cor_pele
        this.inputEyes = res[0].cor_olhos
        this.oldEyes = res[0].cor_olhos
        this.inputHair = res[0].cor_cabelo
        this.oldHair = res[0].cor_cabelo
      })
  }

  update() {
    console.log('[ChildProfileComponent] update')
    let payload = { data: {}, id: this.id }

    if (this.oldBlood !== this.inputBlood) {
      payload.data['tipo_sanguineo'] = this.inputBlood
    }
    if (this.oldRg !== this.inputRg) {
      payload.data['rg'] = this.inputRg
    }
    if (this.oldSkin !== this.inputSkin) {
      payload.data['cor_pele'] = this.inputSkin
    }
    if (this.oldEyes !== this.inputEyes) {
      payload.data['cor_olhos'] = this.inputEyes
    }
    if (this.oldHair !== this.inputHair) {
      payload.data['cor_cabelo'] = this.inputHair
    }

    this.childService.putchild(payload)
  }
}
