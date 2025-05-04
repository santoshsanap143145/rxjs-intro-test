import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoDashboardComponent,
  },
  {
    path: 'posts',
    component: PostDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
