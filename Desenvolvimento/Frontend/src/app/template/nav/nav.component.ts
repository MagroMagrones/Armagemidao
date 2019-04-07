import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: Observable<boolean>
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isAuth()
  }

  ngOnInit() {}

  signOut() {
    this.authService.signOut()
  }
}
