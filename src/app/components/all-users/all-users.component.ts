import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  userList: User[] = [];

  constructor(private usersService: UsersService) {
    usersService.getUsers().subscribe(value => {this.userList = value})
  }

  ngOnInit(): void {
  }

}
