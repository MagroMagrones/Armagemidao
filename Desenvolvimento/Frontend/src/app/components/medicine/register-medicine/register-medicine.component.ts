import { Component, OnInit } from '@angular/core'
import { MedicineService } from 'src/app/services/medicine.service'

@Component({
  selector: 'app-register-medicine',
  templateUrl: './register-medicine.component.html',
  styleUrls: ['./register-medicine.component.css']
})
export class RegisterMedicineComponent implements OnInit {
  inputCode = ''
  inputName = ''
  constructor(private medicineService: MedicineService) {}

  ngOnInit() {}
  save(name, code) {
    console.log('[register-medicine.component.ts] - save')
    let data = { nome: name, codigo: code }
    this.medicineService.postmedicine(data)
  }
}
