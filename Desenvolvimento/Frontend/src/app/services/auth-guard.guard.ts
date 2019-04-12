import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(protected router: Router) {}
  canActivate() {
    const auth = localStorage.getItem('jwt')
    if (!auth) {
      this.router.navigate(['/sign-in'])
      return false
    }
    return true
  }
}
