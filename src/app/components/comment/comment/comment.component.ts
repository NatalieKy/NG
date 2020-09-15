import {Component, Input, OnInit} from '@angular/core';
import {Commentar} from "../../../models/Comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Commentar

  constructor() { }

  ngOnInit(): void {
  }

}
