import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import swal from 'sweetalert2'
import { BehaviorSubject, Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken())

  url = environment.api_url
  logged: Observable<boolean>

  isAuth(): Observable<boolean> {
    console.log('[auth.service.ts] - isAuth')
    return this.isLoginSubject.asObservable()
  }

  signIn(data) {
    console.log('[auth.service.ts] - signIn')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-in`, data).subscribe(
        (res: any) => {
          localStorage.setItem('jwt', res.success.token)
          this.isLoginSubject.next(true)
          this.router.navigate(['/user'])
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
          swal('enviamos um email para confirmar o seu cadastro')
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
    localStorage.removeItem('jwt')
    this.isLoginSubject.next(false)
    this.router.navigate(['/sign-in'])
  }
  resetPassword(data) {
    console.log('[auth.service.ts] - resetPassword')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/change-pass`, data).subscribe(
        res => {
          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  hasToken(): boolean {
    console.log('[auth.service.ts] - hasToken')
    return !!localStorage.getItem('jwt')
  }
}
