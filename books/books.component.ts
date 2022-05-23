import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issuedbook } from '../issuedbook/issuedbook.model';
import { IssuedbookserviceService } from '../issuedbook/issuedbookservice.service';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChild('f') bookForm: NgForm;
  public isEdit = false;
  public bookList:Book[] = [];
public issuedlist:any;



  constructor(private booksService:BooksService,private issuedbookserviceService:IssuedbookserviceService) { }

  ngOnInit(): void {
    this.bookList = this.booksService.getBook();
    this.issuedlist=this.issuedbookserviceService.getIssued();
    
  }
  onSubmit(newbook:NgForm){
    this.booksService.addBook(newbook)
    newbook.resetForm();

  }

  deleteRow(i:any){
    this.bookList.splice(i,1);
  }

  editRow(i:any){
    var rowToUpdate = this.bookList[i];
    this.bookForm.setValue({
      isbn : rowToUpdate.isbn,
      bookName: rowToUpdate.bookName,
      authorName: rowToUpdate.authorName,
      publisher: rowToUpdate.publisher,
      quantity: rowToUpdate.quantity


    })
    this.isEdit=true;
    (document.getElementById("isbn") as HTMLInputElement).disabled = true; 
    
    

  }

  update() {
    const isbn = this.bookForm.value.isbn;
   
 
    const bookName = this.bookForm.value.bookName;

    const authorName = this.bookForm.value.authorName;
    const publisher = this.bookForm.value.publisher;
  
    const quantity = this.bookForm.value.quantity;
    const quantity1 = (document.getElementById("quantity") as HTMLInputElement).value

   /* if (isbn=="") {
      this.isIsbn=true;
    } else {
      this.isIsbn=false;
    }
    if (bookName=="") {
      this.isBook=true;
    } else {
      this.isBook=false;
    }
    if (authorName=="") {
      this.isAuthor=true;
    } else {
      this.isAuthor=false;
    }
    if (publisher=="") {
      this.isPublisher=true;
    } else {
      this.isPublisher=false;
    }
    if (quantity=="") {
      this.isQuantity=true;
    } else {
      this.isQuantity=false;
    }*/
    if (isbn!="" &&bookName !=""  &&authorName!="" && publisher!="" && quantity1!="" ) {
      
    
    
    var foundBook:any = this.bookList.find(function(book:Book){
        return book.isbn==isbn;
    });
    foundBook.bookName = bookName;
    foundBook.authorName = authorName;
    foundBook.publisher = publisher;
    foundBook.quantity = quantity;
   
    
    this.bookForm.resetForm();

    (document.getElementById("isbn") as HTMLInputElement).disabled = false;
    
   this.isEdit= false;
  }
  
  }

}


