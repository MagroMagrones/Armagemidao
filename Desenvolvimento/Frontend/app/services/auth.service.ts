import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  logged = false; //mock

  signIn(data) {
    console.log('[auth.service.ts] - signIn');
    this.logged = true;
    return this.logged;
  }
  signUp(data) {
    console.log('[auth.service.ts] - signUp');
  }
  signOut() {
    console.log('[auth.service.ts] - signOut');
    this.logged = false;
    return this.logged;
  }
  resetPassword(email) {
    console.log('[auth.service.ts] - resetPassword');
  }
  isAuth() {
    return this.logged;
  }
}
