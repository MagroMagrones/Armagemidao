import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, protected router: Router) {}
  canActivate() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/sign-in'])
      return false
    } else {
      return true
    }
  }
}
