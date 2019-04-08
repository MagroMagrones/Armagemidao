import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  code = '';
  pass1 = '';
  pass2 = '';
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  defineNewPassword(code, pass1, pass2) {
    if (code.length <= 0 || pass1.length <= 0 || pass2.length <= 0) {
      console.log('required');
      return;
    }
    if (pass1 !== pass2) {
      console.log('not equal');
      return;
    }
    this.authService.confirmPassword({
      verificationCode: code,
      newPassword: pass1,
      email: this.authService.email
    });
  }
}
