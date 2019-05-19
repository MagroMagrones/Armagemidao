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
  constructor(private http: HttpClient, private router: Router) {
    this.isLoginSubject.next(this.hasToken())
    this.isdoctorSubject.next(this.hasDoctorPermission())
    this.isAdmSubject.next(this.hasAdmPermission())
  }
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken())
  isdoctorSubject = new BehaviorSubject<boolean>(this.hasDoctorPermission())
  isAdmSubject = new BehaviorSubject<boolean>(this.hasAdmPermission())
  email = ''
  id = null
  url = environment.api_url

  isAuth(): Observable<boolean> {
    return this.isLoginSubject.asObservable()
  }
  isDoctor(): Observable<boolean> {
    return this.isdoctorSubject.asObservable()
  }
  isAdm(): Observable<boolean> {
    return this.isAdmSubject.asObservable()
  }
  getId() {
    return localStorage.getItem('userId')
      ? localStorage.getItem('userId')
      : null
  }
  signIn(data) {
    console.log('[auth.service.ts] - signIn')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-in`, data).subscribe(
        (res: any) => {
          if(res.success){
            this.email = data.email
            this.id = res.success.userId
            localStorage.setItem('userId', res.success.userId)
            localStorage.setItem('jwt', res.success.token)
            if (res.success.doctor) {
              localStorage.setItem('doctor', res.success.doctor)
              this.isdoctorSubject.next(true)
            }
            if (res.success.admin) {
              localStorage.setItem('admin', res.success.admin)
              this.isAdmSubject.next(true)
            }
            this.isLoginSubject.next(true)
            this.router.navigate(['/user'])
          } 
          else if (res.err)
            reject(res.err.message)
        },
        err => {
          console.log(err)
          reject(err.message)
        }
      )
    })
  }
  signUp(data) {
    console.log('[auth.service.ts] - signUp')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-up`, data).subscribe(
        (res: any) => {
          if(res.success){
            this.email = data.email
            swal('enviamos um email para confirmar o seu cadastro')
            this.router.navigate(['/sign-in'])
            resolve(res)
          } 
          else if (res.err)
            reject(res.err.message)
        },
        err => {
          console.log(err)
          reject(err.message)
        }
      )
    })
  }
  signOut() {
    console.log('[auth.service.ts] - signOut')
    const data = { email: this.email }
    localStorage.removeItem('userId')
    localStorage.removeItem('jwt')
    localStorage.removeItem('doctor')
    localStorage.removeItem('admin')

    this.isdoctorSubject.next(false)
    this.isAdmSubject.next(false)
    this.isLoginSubject.next(false)

    this.router.navigate(['/sign-in'])
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/sign-out`, data).subscribe(
        (res: any) => {},
        err => {
          console.log(err)
          reject(err.message)
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
          swal('Enviamos um email com um codigo para resetar a sua senha')
          this.router.navigate(['/new-pass'])
          resolve(res)
        },
        err => {
          console.log(err)
          reject(err.message)
        }
      )
    })
  }
  confirmPassword(data) {
    console.log('[auth.service.ts] - resetPassword')
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/confirm-pass`, data).subscribe(
        res => {
          swal('Senha redefinida com sucesso').then(() => {
            this.router.navigate(['/sign-in'])
          })
          resolve(res)
        },
        err => {
          console.log(err)
          reject(err.message)
        }
      )
    })
  }
  hasToken(): boolean {
    return !!localStorage.getItem('jwt')
  }
  hasDoctorPermission(): boolean {
    return !!localStorage.getItem('doctor')
  }
  hasAdmPermission(): boolean {
    return !!localStorage.getItem('admin')
  }
}
