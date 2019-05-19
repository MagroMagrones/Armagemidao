import { Component, OnInit, Input } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService) {}
  email = ''
  pass1 = ''
  pass2 = ''
  inputCrm = ''
  inputSpecialty = ''
  inputDoctor = false
  passPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?.*[^\w]).{6,}$'
  error = ''
  showError = false
  requestInProgress = false

  ngOnInit() {}

  signUp(email, pass1, pass2, crm, speciality, doctor) {
    if (email.length <= 0 || pass1.length <= 0 || pass2.length <= 0)
      return
    
    if (pass1 !== pass2)
      return

    if (doctor && !crm)
      return

    if(this.requestInProgress)
      return

    this.requestInProgress = true
    this.showError = false

    let data = {
      user: { email: email, password: pass1 },
      doctor: { isDoctor: doctor, crm: crm, especialidade: speciality }
    }

    this.authService.signUp(data).then((data: any) => {
      this.error = data 
      this.showError = true
      this.requestInProgress = false
    })
  }
}
