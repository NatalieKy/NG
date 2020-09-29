import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import {Comment} from "../../../../models/Comment";

@Component({
  selector: 'app-single-post-comments',
  templateUrl: './single-post-comments.component.html',
  styleUrls: ['./single-post-comments.component.css']
})
export class SinglePostCommentsComponent implements OnInit {

  singlePostComments: Comment[] = [];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentsService) {
    this.activatedRoute.params.subscribe(value => {
      commentService.getSinglePostComments(value.id).subscribe(comments => {this.singlePostComments = comments})
    })
  }

  ngOnInit(): void {
  }

}
