import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersService} from "./services/users.service";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import {RouterModule} from "@angular/router";
import { AllUsersComponent } from './components/all-users/all-users.component';
import {PostsService} from "./services/posts.service";
import { PostComponent } from './components/post/post/post.component';
import { AllPostsComponent } from './components/all-posts/all-posts/all-posts.component';
import {CommentsService} from "./services/comments.service";
import { AllCommentComponent } from './components/all-comment/all-comment/all-comment.component';
import { CommentComponent } from './components/comment/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    PostComponent,
    AllPostsComponent,
    AllCommentComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent},
      {path: 'posts', component: AllPostsComponent},
      {path: 'comments', component: AllCommentComponent}
    ])
  ],
  providers: [UsersService, PostsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
