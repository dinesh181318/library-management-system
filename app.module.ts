import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IssuedbookComponent } from './issuedbook/issuedbook.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users/users.service';
import { BooksService } from './books/books.service';
import { IssuedbookserviceService } from './issuedbook/issuedbookservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IssuedbookComponent,
    BooksComponent,
    UsersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService,BooksService,IssuedbookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
