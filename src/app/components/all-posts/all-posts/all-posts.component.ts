import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/Post";
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  postsList: Post[] = []

  constructor(private postService: PostsService) {
    postService.getPosts().subscribe(value => this.postsList = value)
  }

  ngOnInit(): void {
  }

}
