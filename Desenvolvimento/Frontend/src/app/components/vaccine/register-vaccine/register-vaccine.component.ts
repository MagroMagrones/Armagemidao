import { Component, OnInit } from '@angular/core'
import { VaccineService } from 'src/app/services/vaccine.service'

@Component({
  selector: 'app-register-vaccine',
  templateUrl: './register-vaccine.component.html',
  styleUrls: ['./register-vaccine.component.css']
})
export class RegisterVaccineComponent implements OnInit {
  inputAge = ''
  inputName = ''
  inputDose = ''
  inputDiseases = ''

  constructor(private vaccineService: VaccineService) {}

  ngOnInit() {}
  save(age, name, dose, diseases) {
    console.log('[register-vaccine.component.ts] - save')
    let data = {
      idade: age,
      nome: name,
      dose: dose,
      doencas: diseases
    }
    this.vaccineService.postvaccine(data)
  }
}
