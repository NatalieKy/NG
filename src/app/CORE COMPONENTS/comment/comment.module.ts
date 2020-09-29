import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CommentComponent} from "./components/comment/comment.component";
import {AllCommentComponent} from "./components/all-comments/all-comment.component";
import {SinglePostCommentsComponent} from "./components/single-post-comments/single-post-comments.component";
import {CommentsService} from "./services/comments.service";
import {CommentsResolverService} from "./services/comments-resolver.service";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: '', component: AllCommentComponent, resolve: {allComments: CommentsResolverService}},
  ]

@NgModule({
  declarations: [CommentComponent, AllCommentComponent, SinglePostCommentsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers : [CommentsService, CommentsResolverService]
})
export class CommentModule { }
