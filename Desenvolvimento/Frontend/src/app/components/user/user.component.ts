import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { UserService } from 'src/app/services/user.service'
import { NotSubscriptionService } from 'src/app/services/not-subscription.service'
import UserRequest from '../../models/user-request.model'
import User from '../../models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private notService: NotSubscriptionService
  ) {}
  users: User[] = []
  user: User = new User()
  @ViewChild('newUserForm') form: NgForm

  ngOnInit() {
    this.loadList()
    this.notService.subscribe()
  }

  loadList() {
    this.userService.getUsers().then((users: any) => {
      this.users = users
    })
  }

  save() {
    if (this.form.invalid)
      return

    if(this.user.id > 0) {
      let request = { id: this.user.id, data: { nome: this.user.nome, email: this.user.email } }
      this.userService.putUser(request).then(res => {
        this.clear()
        this.loadList()
      })
    } else {
      let request = new UserRequest()
      request.user = this.user
      this.userService.postUser(request).then(res => {
        this.clear()
        this.loadList()
      })
    }
  }

  clear() {
    this.form.resetForm()
    this.user = new User()
  }

  edit = (user: User) => this.user = user

  remove(user: User) {
    if(!user || !user.id)
      return

    this.userService.deleteUser(user).then((users: any) => {
      let index: number = this.users.findIndex(u => u.id == user.id)
      if(index > 0)
        this.users.splice(index, 1)
    })
  }
}
