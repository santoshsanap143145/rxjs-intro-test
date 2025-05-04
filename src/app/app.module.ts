import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { TodoCardComponent } from './shared/components/todo-dashboard/todo-card/todo-card.component';
import { PostCardComponent } from './shared/components/post-dashboard/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoDashboardComponent,
    HomeComponent,
    PostDashboardComponent,
    TodoCardComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
