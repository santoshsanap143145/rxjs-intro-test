import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Itodo } from '../models/todo';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  baseUrl: string = environment.base_url;
  todoUrl: string = `${environment.base_url}/todos`;
  constructor(private _http: HttpClient) {}

  fetchAlltodos(): Observable<Array<Itodo>> {
    return this._http.get<Array<Itodo>>(this.todoUrl).pipe(
      tap((arr) => {
        console.log('all todos:', arr);
      })
    );
  }

  completedTodos(): Observable<Array<Itodo>> {
    return this.fetchAlltodos().pipe(
      map((arr: Array<Itodo>) => {
        let completedTodos: Array<Itodo> = arr.filter((todo) => todo.completed);
        return completedTodos;
      })
    );
  }
  
  NonCompletedTodos(): Observable<Array<Itodo>> {
    return this.fetchAlltodos().pipe(
      map((arr: Array<Itodo>) => {
        let NotCompletedTodos: Array<Itodo> = arr.filter((todo) => !todo.completed);
        return NotCompletedTodos;
      })
    );
  }
}
