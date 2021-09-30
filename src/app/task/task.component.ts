import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() compId: number = 0;

  @Output() deleteId = new EventEmitter();

  onButtonClick() {
    this.deleteId.emit(this.compId);
  }
}
