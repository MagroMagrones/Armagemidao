import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}
  users = []
  inputName = ''
  inputEmail = ''
  ngOnInit() {
    this.loadList()
  }
  loadList() {
    this.userService.getUsers().then((users: any) => {
      this.users = users
    })
  }
  save(inputName, inputEmail) {
    let payload = {}
    if (!inputName) {
      alert('campo nome é obrigatório')
      return
    }
    if (!inputEmail) {
      alert('campo email é obrigatório')
      return
    }
    payload['nome'] = inputName
    payload['email'] = inputEmail
    this.userService.postUser(payload).then(res => {
      console.log(res)
      this.loadList()
    })
  }
  clear() {}
  load(user) {}
  remove(user) {}
}
