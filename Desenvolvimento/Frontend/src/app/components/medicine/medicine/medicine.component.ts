import { Component, OnInit, EventEmitter } from '@angular/core';
import Medicine from '../../../models/medicine.model'
import { MedicineService } from 'src/app/services/medicine.service'

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  constructor(private medicineService: MedicineService) { }

  medicines: Medicine[] = []
  medicine: Medicine = new Medicine()

  ngOnInit() {
  	this.loadList() 
  }

  loadList() {
  	this.medicineService.getmedicines().then((res: Medicine[]) => {
    	this.medicines = res
  	})
  }

  edit($event){
  	this.medicine = $event
    this.medicine.editado = true
  }
}
