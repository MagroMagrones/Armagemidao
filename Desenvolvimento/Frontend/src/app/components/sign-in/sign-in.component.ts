import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private authService: AuthService) {}
  email = ''
  pass = ''

  ngOnInit() {}

  signIn(email, pass) {
    if (email.length <= 0 || pass.length <= 0) {
      console.log('required')
      return
    }
    let data = { email: email, password: pass }
    this.authService.signIn(data)
  }
  resetPassword(email) {
    this.authService.resetPassword(email)
  }
}
