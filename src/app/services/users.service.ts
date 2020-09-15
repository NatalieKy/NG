import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getUsers() :Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUserById(id:number) :Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }


}
