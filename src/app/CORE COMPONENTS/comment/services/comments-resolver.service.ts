import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CommentsService} from "./comments.service";
import {Comment} from "../../../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolverService implements Resolve<Comment[]>{

  constructor(private commentService: CommentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.commentService.getComments()
  }
}
