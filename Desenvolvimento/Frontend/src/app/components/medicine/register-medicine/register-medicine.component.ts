import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core'
import { MedicineService } from 'src/app/services/medicine.service'
import { NgForm } from '@angular/forms'
import Medicine from '../../../models/medicine.model'

@Component({
  selector: 'app-register-medicine',
  templateUrl: './register-medicine.component.html',
  styleUrls: ['./register-medicine.component.css']
})
export class RegisterMedicineComponent implements OnInit {
  @ViewChild('medicineForm') form: NgForm
  @Output() loadList = new EventEmitter();
  @Input() medicine: Medicine;

  constructor(private medicineService: MedicineService) {}

  ngOnInit() {}

  save() {
    if (this.form.invalid)
      return

    let request = 
    { 
       nome: this.medicine.nome_comercial, 
       tipo: this.medicine.tipo, 
       id_medicamento_registro: this.medicine.id_medicamento_registro 
    }

    if(this.medicine.editado) {
      this.medicineService.putmedicine(request).then(res => {
        this.clear()
        this.load()
      })
    } else {
      this.medicineService.postmedicine(request).then(res => {
        this.clear() 
        this.load()
      })
    }
  }

  load() {
    this.loadList.emit()
  }

  clear() {
    console.log(this.medicine)
    this.form.resetForm()
    this.medicine = new Medicine()
  }
}
