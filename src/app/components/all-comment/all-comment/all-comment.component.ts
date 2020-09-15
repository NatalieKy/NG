import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../../services/comments.service";
import {Commentar} from "../../../models/Comment";

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent implements OnInit {

  commentList: Commentar[] = [];

  constructor(private commentService: CommentsService) {
    this.commentService.getComments().subscribe(value => {this.commentList = value})
  }

  ngOnInit(): void {
  }

}
