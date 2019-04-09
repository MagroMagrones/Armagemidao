import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-vaccine',
  templateUrl: './register-vaccine.component.html',
  styleUrls: ['./register-vaccine.component.css']
})
export class RegisterVaccineComponent implements OnInit {
  age = '';
  name = '';
  dose = '';
  diseases = '';

  ages = [
    'Ao nascer',
    '1 mês',
    '2 meses',
    '4 meses',
    '6 meses',
    '9 meses',
    '12 meses',
    '15 meses',
    '4 - 6 anos',
    '10 anos'
  ];
  constructor() {}

  ngOnInit() {}
  save(age, name, dose, diseases) {
    console.log('[register-vaccine.component.ts] - save');
  }
}
