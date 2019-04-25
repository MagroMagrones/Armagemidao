import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit {
  @Input() appointment
  constructor() {}

  ngOnInit() {}
}
