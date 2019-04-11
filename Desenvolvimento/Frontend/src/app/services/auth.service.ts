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
  isdoctorSubject = new BehaviorSubject<boolean>(this.hasDoctorPermission())
  isAdmSubject = new BehaviorSubject<boolean>(this.hasAdmPermission())
  email = ''
  url = environment.api_url
  doctor = null
  adm = null
  isAuth(): Observable<boolean> {
    console.log('[auth.service.ts] - isAuth')
    return this.isLoginSubject.asObservable()
  }
  isDoctor(): Observable<boolean> {
    return this.isdoctorSubject.asObservable()
  }
  isAdm(): Observable<boolean> {
    return this.isAdmSubject.asObservable()
  }

  signIn(data) {
    console.log('[auth.service.ts] - signIn')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-in`, data).subscribe(
        (res: any) => {
          this.email = data.email
          localStorage.setItem('jwt', res.success.token)
          if (res.success.profile === 'doctor') this.doctor = true
          if (res.success.profile === 'adm') this.adm = true
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
          this.email = data.email
          swal('enviamos um email para confirmar o seu cadastro')
          this.router.navigate(['/sign-in'])
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
    const data = { email: this.email }
    localStorage.removeItem('jwt')
    this.doctor = false
    this.adm = false
    this.isLoginSubject.next(false)
    this.router.navigate(['/sign-in'])
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-out`, data).subscribe(
        (res: any) => {},
        err => {
          console.log(err)
        }
      )
    })
  }
  resetPassword(data) {
    console.log('[auth.service.ts] - resetPassword')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/change-pass`, data).subscribe(
        res => {
          this.email = data.email
          swal('enviamos um email com um codigo para resetar a sua senha')
          this.router.navigate(['/new-pass'])
          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  confirmPassword(data) {
    console.log('[auth.service.ts] - resetPassword')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/confirm-pass`, data).subscribe(
        res => {
          swal('senha redefinida com sucesso').then(() => {
            this.router.navigate(['/sign-in'])
          })
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
  hasDoctorPermission(): boolean {
    console.log('[auth.service.ts] - hasToken')
    return !!this.doctor
  }
  hasAdmPermission(): boolean {
    console.log('[auth.service.ts] - hasToken')
    return !!this.adm
  }
}
