import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { IssuedbookComponent } from './issuedbook/issuedbook.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'issuedbook',component:IssuedbookComponent},
  {path:'books',component:BooksComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
