import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService) {}
  email = '';
  pass1 = '';
  pass2 = '';
  ngOnInit() {}

  signUp(email, pass1, pass2) {
    let data;
    this.authService.signUp(data);
  }
}
