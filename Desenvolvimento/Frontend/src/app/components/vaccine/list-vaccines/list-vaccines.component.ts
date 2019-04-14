import { Component, OnInit } from '@angular/core'
import { VaccineService } from 'src/app/services/vaccine.service'

@Component({
  selector: 'app-list-vaccines',
  templateUrl: './list-vaccines.component.html',
  styleUrls: ['./list-vaccines.component.css']
})
export class ListVaccinesComponent implements OnInit {
  constructor(private vaccineService: VaccineService) {}
  vaccines = []
  ngOnInit() {
    this.loadVaccines()
  }
  loadVaccines() {
    this.vaccineService.getvaccines().then((res: any) => {
      this.vaccines = res
    })
  }
  remove(vaccine) {}
}
