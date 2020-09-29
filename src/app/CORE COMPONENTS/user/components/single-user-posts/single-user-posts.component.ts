import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../post/services/posts.service";
import {Post} from "../../../../models/Post";

@Component({
  selector: 'app-single-user-posts',
  templateUrl: './single-user-posts.component.html',
  styleUrls: ['./single-user-posts.component.css']
})
export class SingleUserPostsComponent implements OnInit {

  singlePosts: Post[] = []

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getSingleUserPosts(value.id).subscribe(posts => {this.singlePosts = posts})})
  }

  ngOnInit(): void {
  }

}
