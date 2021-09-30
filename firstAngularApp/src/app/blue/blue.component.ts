import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {
  elements: Array<any> = [
    {id: 1},
    {id: 2}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
