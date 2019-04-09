import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-children',
  templateUrl: './list-children.component.html',
  styleUrls: ['./list-children.component.css']
})
export class ListChildrenComponent implements OnInit {
  children = ['', '', '', ''];
  constructor() {}

  ngOnInit() {}
}
