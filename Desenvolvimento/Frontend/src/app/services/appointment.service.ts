import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  url = environment.api_url + '/appointment'

  getAppointments() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ appointments: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  getAppointment(data) {
    console.log({ data })

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/find?${data.key}=${data.value}`).subscribe(
        res => {
          console.log({ Appointments: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  postAppointment(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(
        res => {
          console.log({ appointments: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  putAppointment(data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url, data).subscribe(
        res => {
          console.log({ Appointment: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  deleteAppointment(data) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url, data).subscribe(
        res => {
          console.log({ Appointment: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
}
