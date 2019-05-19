import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'
import UserRequest from '../../models/user-request.model'
import User from '../../models/user.model'
import Doctor from '../../models/doctor.model'

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
  @ViewChild('signUpForm') form: NgForm

  ngOnInit() {}

  signUp(email, pass1, pass2, crm, speciality, doctor) {
    if (this.form.invalid)
      return

    if(this.requestInProgress)
      return

    this.requestInProgress = true
    this.showError = false

    let request: UserRequest = Object.assign(
      new UserRequest(),
      {
        user: { email: email, password: pass1 },
        doctor: { isDoctor: doctor, crm: crm, especialidade: speciality }
      })

    this.authService.signUp(request).then(undefined, (err: any) => {
      this.error = err 
      this.showError = true
      this.requestInProgress = false
    })
  }
}
