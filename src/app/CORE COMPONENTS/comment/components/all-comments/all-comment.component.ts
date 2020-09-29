import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {Comment} from "../../../../models/Comment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent implements OnInit {

  commentList: Comment[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(value => {this.commentList = value.allComments})
  }

  ngOnInit(): void {
  }

}
