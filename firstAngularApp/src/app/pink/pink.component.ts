import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input() compId: number = 0;
}
