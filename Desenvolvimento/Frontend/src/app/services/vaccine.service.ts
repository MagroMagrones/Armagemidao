import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  constructor(private http: HttpClient) {}
  url = environment.api_url + '/vaccine'
  getvaccines() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ vaccines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  getvaccine(data) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ vaccines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  postvaccine(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(
        res => {
          console.log({ vaccines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  putvaccine(data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url, data).subscribe(
        res => {
          console.log({ vaccines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  deletevaccine(data) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url, data).subscribe(
        res => {
          console.log({ vaccines: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
}
