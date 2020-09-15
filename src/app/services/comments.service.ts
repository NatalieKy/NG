import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commentar} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}

  getComments() :Observable<Commentar[]> {
    return this.http.get<Commentar[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
