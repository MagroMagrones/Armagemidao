import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-medicine',
  templateUrl: './register-medicine.component.html',
  styleUrls: ['./register-medicine.component.css']
})
export class RegisterMedicineComponent implements OnInit {
  inputCode = '';
  inputName = '';
  constructor() {}

  ngOnInit() {}
  save(name, code) {
    console.log('[register-medicine.component.ts] - save');
  }
}
