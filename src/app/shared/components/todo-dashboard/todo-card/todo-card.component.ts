import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todobj !: Itodo
  constructor() { }

  ngOnInit(): void {
  }

}
