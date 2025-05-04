import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/post';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl: string = environment.base_url;
  postUrl: string = `${environment.base_url}/posts`;
  constructor(private _http: HttpClient) {}

  fetchAllPosts(): Observable<Array<Ipost>> {
    return this._http.get<Array<Ipost>>(this.postUrl).pipe(
      map((arr: Array<Ipost>) => {
        return arr
      }),
      tap((arr) => {
        console.log('all posts:', arr);
      })
    );
  }
}
