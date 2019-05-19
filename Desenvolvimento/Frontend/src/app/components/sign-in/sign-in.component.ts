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
  error = ''
  showError = false
  requestInProgress = false

  ngOnInit() {}

  signIn(email, pass) {
    if (email.length <= 0 || pass.length <= 0)
      return

    if(this.requestInProgress)
      return

    this.requestInProgress = true
    this.showError = false
    const data = { email: email, password: pass }
    this.authService.signIn(data).then(undefined, (err: any) => {
      this.error = err 
      this.showError = true
      this.requestInProgress = false
    })
  }
  resetPassword(email: string, valid: boolean) {
    if (email.length <= 0 || !valid){
      this.error = 'Necessário informar um e-mail válido para redefinir sua senha'      
      this.showError = true
      return
    }

    this.showError = false
    this.authService.resetPassword({ email })
  }
}
