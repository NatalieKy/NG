import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Post} from "../../../../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {

  poster : { [p: string]: any }

  constructor(private router: Router) {
   this.poster = this.router.getCurrentNavigation().extras.state
    console.log(this.poster);
    //  console.log(this.router.getCurrentNavigation().extras.state)
  }

  ngOnInit(): void {
  }

}
