import { Component, OnDestroy, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { TodosService } from '../../services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit, OnDestroy {
  todoArr: Array<Itodo> = []
  todoSub!: Subscription
  constructor(private _todoService: TodosService) { }

  ngOnInit(): void {
    this.getAlltodos()
  }
  getAlltodos(){
    this.todoSub = this._todoService.fetchAlltodos()
      .subscribe(res => {
        this.todoArr = res
        console.log(this.todoArr);
        
      })
  }

  onClick(isComplete: string){
    if(isComplete === 'all'){
      this.todoSub = this._todoService.fetchAlltodos()
      .subscribe(res => {
        this.todoArr = res
        console.log(this.todoArr);
        
      })
    }else if(isComplete === 'complete'){
      this.todoSub = this._todoService.completedTodos()
      .subscribe(res => {
        this.todoArr = res
      })
    }else if(isComplete === 'incomplete'){
      this.todoSub = this._todoService.NonCompletedTodos()
      .subscribe(res => {
        this.todoArr = res
      })
    }
  }

  ngOnDestroy(): void {
    this.todoSub.unsubscribe()
  }

}
