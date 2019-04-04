import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() icon
  @Input() title
  @Input() subtitle

  constructor() {}

  ngOnInit() {}
}
