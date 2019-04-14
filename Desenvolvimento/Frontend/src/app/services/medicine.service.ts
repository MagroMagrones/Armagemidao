import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(private http: HttpClient) {}
  url = environment.api_url + '/medicine'
  getmedicines() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ medicines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  getmedicine(data) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ medicines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  postmedicine(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(
        res => {
          console.log({ medicines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  putmedicine(data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url, data).subscribe(
        res => {
          console.log({ medicines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  deleteMedicine(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + '/' + id).subscribe(
        res => {
          console.log({ medicines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
}
