import { Component, OnInit } from '@angular/core'
import { ChildService } from 'src/app/services/child.service'
import { AuthService } from 'src/app/services/auth.service'
import { AppointmentService } from 'src/app/services/appointment.service'

@Component({
  selector: 'app-register-appointment',
  templateUrl: './register-appointment.component.html',
  styleUrls: ['./register-appointment.component.css']
})
export class RegisterAppointmentComponent implements OnInit {
  appointmentDate = null
  appointmentTime = null
  isReturn = false
  idChild = null
  rememberWeek = false
  rememberDay = false
  rememberHour = false

  children = []

  constructor(
    private childService: ChildService,
    private authService: AuthService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit() {
    this.loadChildren()
  }
  async loadChildren() {
    await this.childService
      .getchild({ key: 'id_usuario', value: this.authService.getId() })
      .then((res: any) => {
        this.children = res
      })
  }
  save() {
    console.log('[RegisterAppointmentComponent] save')
    if (!this.appointmentDate || !this.appointmentTime || !this.idChild) {
      console.log('appointment required')
      return
    }
    let data = {
      notifications: {
        rememberWeek: this.rememberWeek,
        rememberDay: this.rememberDay,
        rememberHour: this.rememberHour,
        date: this.appointmentDate,
        hour: this.appointmentTime
      },
      appointment: {
        data_consulta: this.appointmentDate,
        retorno: this.isReturn,
        id_crianca: this.idChild
      }
    }
    this.appointmentService.postAppointment(data)
  }
}
