import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  url = environment.api_url
  logged = false //mock

  signIn(data) {
    console.log('[auth.service.ts] - signIn')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-in`, data).subscribe(
        (res: any) => {
          window.localStorage.setItem('jwt', res.success.token)

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  signUp(data) {
    console.log('[auth.service.ts] - signUp')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-up`, data).subscribe(
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
  signOut() {
    console.log('[auth.service.ts] - signOut')
    this.logged = false
    return this.logged
  }
  resetPassword(data) {
    console.log('[auth.service.ts] - resetPassword')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/change-pass`, data).subscribe(
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
  isAuth() {
    return this.logged
  }
}
