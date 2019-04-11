import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-children',
  templateUrl: './list-children.component.html',
  styleUrls: ['./list-children.component.css']
})
export class ListChildrenComponent implements OnInit {
  children = [
    {
      id: 1,
      name: 'teste',
      age: '11 meses',
      gender: 'masculino',
      blood: 'A+',
      rg: '00.000.000-0',
      skin: 'negra',
      eyes: 'azul',
      hair: 'castanho escuro'
    },
    {
      id: 2,
      name: 'pequeno',
      age: '07 meses',
      gender: 'masculino',
      blood: 'A-',
      rg: '00.000.000-0',
      skin: 'branca',
      eyes: 'castanho claro',
      hair: 'loiro'
    },
    {
      id: 3,
      name: 'criança',
      age: '15 meses',
      gender: 'feminino',
      blood: 'B+',
      rg: '00.000.000-0',
      skin: 'branca',
      eyes: 'azuis',
      hair: 'castanho escuro'
    },
    {
      id: 4,
      name: 'criança 2',
      age: '11 meses',
      gender: 'feminino',
      blood: 'A+',
      rg: '00.000.000-0',
      skin: 'negra',
      eyes: 'azuis',
      hair: 'castanho escuro'
    }
  ]
  constructor() {}

  ngOnInit() {}
}
