import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/User";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  singleUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUsersById(params.id).subscribe(value => this.singleUserDetails = value)})
  }

  ngOnInit(): void {
  }


}
