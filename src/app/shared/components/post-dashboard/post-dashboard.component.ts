import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { Observable, Subscription } from 'rxjs';
import { PostsService } from '../../services/post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss'],
})
export class PostDashboardComponent implements OnInit {
  postArr : Array<Ipost> = []
  postsSub!: Subscription;
  postsArr$!: Observable<Array<Ipost>>
  constructor(private _todoService: PostsService) {}

  ngOnInit(): void {
    this.getAllposts();
  }
  getAllposts() {
    // this.postsSub = this._todoService.fetchAllPosts().subscribe((res) => {
    //   this.postArr = res;
    //   console.log(this.postArr);
    // });
    this.postsArr$ = this._todoService.fetchAllPosts()
  }

  ngOnDestroy(): void {
    // this.postsSub.unsubscribe();
  }
}
