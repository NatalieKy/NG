import { Component, OnInit } from '@angular/core';
import {Post} from "../../../../models/Post";
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  postsList: Post[] = []

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(value => this.postsList = value.allPosts)
  }

  ngOnInit(): void {
  }

}
