import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { MedicineService } from 'src/app/services/medicine.service'
import Medicine from '../../../models/medicine.model'

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.css']
})
export class ListMedicinesComponent implements OnInit {
  constructor(private medicineService: MedicineService) {}
  
  @Input() medicines: Medicine[]
  @Output() loadList = new EventEmitter();
  @Output() editMedicine = new EventEmitter<any>();

  ngOnInit() { }

  load() {
    this.loadList.emit()
  }

  remove(medicineData: Medicine) {
    this.medicineService.deleteMedicine(medicineData.id_medicamento_registro).then(() => {
      let index: number = this.medicines.findIndex(u => u.id_medicamento_registro == medicineData.id_medicamento_registro)
      if(index > 0)
        this.medicines.splice(index, 1)
      else
        this.load()
    })
  }

  edit(medicineData: Medicine) {
    this.editMedicine.emit(medicineData)
  }
}
