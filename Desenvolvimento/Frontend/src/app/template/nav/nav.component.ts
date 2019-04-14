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
  isDoctor: Observable<boolean>
  isAdm: Observable<boolean>

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.isLoggedIn = await this.authService.isAuth()
    this.isDoctor = await this.authService.isDoctor()
    this.isAdm = await this.authService.isAdm()
  }

  signOut() {
    this.authService.signOut()
  }
}
