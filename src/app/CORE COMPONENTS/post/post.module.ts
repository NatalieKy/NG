import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./components/post/post.component";
import {AllPostsComponent} from "./components/all-posts/all-posts.component";
import {SingleUserPostsComponent} from "../user/components/single-user-posts/single-user-posts.component";
import {PostsService} from "./services/posts.service";
import {PostResolverService} from "./services/post-resolver.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {SinglePostCommentsComponent} from "../comment/components/single-post-comments/single-post-comments.component";
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes : Routes = [
  {path: '', component: AllPostsComponent, resolve: {allPosts: PostResolverService}},
  {path: ':id/comments', component: SinglePostCommentsComponent},
]

@NgModule({
  declarations: [PostComponent, AllPostsComponent, SingleUserPostsComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers : [PostsService, PostResolverService]
})
export class PostModule { }
