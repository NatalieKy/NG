import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./components/user/user.component";
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services/users.service";
import {UsersResolverService} from "./services/users-resolver.service";
import {RouterModule, Routes} from "@angular/router";
import {SingleUserPostsComponent} from "./components/single-user-posts/single-user-posts.component";
import {PostDetailsComponent} from "../post/components/post-details/post-details.component";

const routes : Routes = [
  {path: '', component: AllUsersComponent, resolve: {allUsers: UsersResolverService},
    children: [
      {path: 'details/:id', component: UserDetailsComponent},
    ]},
  {path: ':id/posts', component: SingleUserPostsComponent, children: [
      {path: 'details/:id', component: PostDetailsComponent}
    ]}
  ]
@NgModule({
  declarations: [UserComponent, AllUsersComponent, UserDetailsComponent, ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsersService, UsersResolverService]
})
export class UserModule { }
