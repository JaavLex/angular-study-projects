import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css']
})
export class OrangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() compId: number = 0;
}
