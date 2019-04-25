import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { AppointmentService } from 'src/app/services/appointment.service'

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {
  appointments: any = []
  constructor(
    private authService: AuthService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit() {
    this.loadAppointments()
  }
  async loadAppointments() {
    await this.appointmentService
      .getAppointment({ key: 'id_usuario', value: this.authService.getId() })
      .then((res: any) => {
        this.appointments = res
      })
  }
}
