import { Component, OnInit } from '@angular/core'
import { MedicineService } from 'src/app/services/medicine.service'

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.css']
})
export class ListMedicinesComponent implements OnInit {
  constructor(private medicineService: MedicineService) {}
  medicines = []
  ngOnInit() {
    this.loadMedicines()
  }
  loadMedicines() {
    this.medicineService.getmedicines().then((res: any) => {
      this.medicines = res
    })
  }
  removeMedicine(medicineData) {
    this.medicineService.deleteMedicine(medicineData.id)
  }
}
