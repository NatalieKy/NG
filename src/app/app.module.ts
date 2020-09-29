import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path : 'users', loadChildren : () => import('./CORE COMPONENTS/user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren : () => import('./CORE COMPONENTS/post/post.module').then(m => m.PostModule)},
  {path: 'comments', loadChildren : () => import('./CORE COMPONENTS/comment/comment.module').then(m => m.CommentModule)}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
