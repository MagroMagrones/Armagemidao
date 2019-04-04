import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = environment.api_url + '/data'
  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ users: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  getUser(data) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ users: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  postUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(
        res => {
          console.log({ users: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  putUser(data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url, data).subscribe(
        res => {
          console.log({ users: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  deleteUser(data) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url, data).subscribe(
        res => {
          console.log({ users: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
}
