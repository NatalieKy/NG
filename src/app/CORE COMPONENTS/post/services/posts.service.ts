import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }

  getPosts() :Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getSingleUserPosts(id:number) :Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  }

}
