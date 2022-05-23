import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IssuedbookserviceService } from '../issuedbook/issuedbookservice.service';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

public currentBookName:string='';
public currentBookCount:number;


  public issuedBook:number=0;

  public bookListService:Book[] = [
    new Book(1,'C-Basics','whom created c','whom published c',10,0),
    new Book(2,'Java','jamesgosling','oracle',15,0),
    new Book(3,'JavaScript','jamesgosling','oracle',15,0),
    new Book(4,'angular','angular creator','unknown',15,0)
  ];
 

  constructor() { }

  getBook(){
    return this.bookListService
  }

  addBook(form:NgForm){
    this.bookListService.push(
      {"isbn":form.value.isbn,
    "bookName":form.value.bookName,
    "authorName":form.value.authorName,
    "publisher":form.value.publisher,
    "quantity":form.value.quantity,
  "issuedBook":this.issuedBook});
  

  }

 

  changeData(bookName:string,bookCount:number){ 
    this.currentBookName =bookName;
    this.currentBookCount=bookCount;
    for(let i=0;i<this.bookListService.length;i++){
      if (this.currentBookName===this.bookListService[i].bookName) {
        if (this.bookListService[i].quantity>=this.currentBookCount) {
          this.bookListService[i].issuedBook=this.currentBookCount+this.bookListService[i].issuedBook;
          this.bookListService[i].quantity=this.bookListService[i].quantity-this.currentBookCount;
         
         
          
        } else {
          
        }
        
      }
    }


  }

  




}
