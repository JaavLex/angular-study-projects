import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uniqCompId = 0;
  elements: Array<any> = [];

  onClickButton() {
    this.elements.push({id: this.uniqCompId})
    this.uniqCompId++;
  }

  onDeleteButton(identifier: any) {
    this.elements.forEach((e, i) => e.id == identifier && this.elements.splice(i, 1));
  }
}
