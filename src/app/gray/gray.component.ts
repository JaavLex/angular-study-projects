import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gray',
  templateUrl: './gray.component.html',
  styleUrls: ['./gray.component.css']
})
export class GrayComponent implements OnInit {
  elements: Array<any> = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
