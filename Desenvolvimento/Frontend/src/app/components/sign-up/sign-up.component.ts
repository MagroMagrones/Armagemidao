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
  ngOnInit() {}

  signUp(email, pass1, pass2, crm, speciality, doctor) {
    if (email.length <= 0 || pass1.length <= 0 || pass2.length <= 0) {
      console.log('required')
      return
    }
    if (pass1 !== pass2) {
      console.log('not equal')
      return
    }
    if (doctor && !crm) {
      console.log('crm required')
      return
    }

    let data = {
      user: { email: email, password: pass1 },
      doctor: { isDoctor: doctor, crm: crm, especialidade: speciality }
    }

    this.authService.signUp(data)
  }
}
