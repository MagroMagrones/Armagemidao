import { Component, OnInit } from '@angular/core'
import { ChildService } from 'src/app/services/child.service'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-list-children',
  templateUrl: './list-children.component.html',
  styleUrls: ['./list-children.component.css']
})
export class ListChildrenComponent implements OnInit {
  children = []
  constructor(
    private childService: ChildService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadChildren()
  }
  async loadChildren() {
    await this.childService
      .getchild({ key: 'id_usuario', value: this.authService.getId() })
      .then((res: any) => {
        this.children = res
      })
  }
}
