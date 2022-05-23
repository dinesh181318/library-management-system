import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books/books.service';




import { UsersService } from '../users/users.service';
import { Issuedbook } from './issuedbook.model';
import { IssuedbookserviceService } from './issuedbookservice.service';
import 'lodash';
import { Issuedbook2 } from './issuedbook2.model';





@Component({
  selector: 'app-issuedbook',
  templateUrl: './issuedbook.component.html',
  styleUrls: ['./issuedbook.component.css']
})
export class IssuedbookComponent implements OnInit {
  @ViewChild('inputform') inputForm: NgForm;
  public isUser= false;
public isBook = false;
public isCount =false;
public isCount1 =false;
  public list: any ;
  public  booklist: any;
  public userName="";
  public bookName= "";
  public quantity:number;

public issuedBookList: Issuedbook[] = [];

public issueBookMap:any;





  constructor(private booksService: BooksService, private usersService: UsersService,private issuedbookservice:IssuedbookserviceService) { }

  ngOnInit(): void {
    this.list = this.usersService.getUser();
    console.log(this.list)
    this.booklist = this.booksService.getBook();
    this.issuedBookList = this.issuedbookservice.getIssued();
    this.issueBookMap=this.issuedbookservice.getIssueBookMap()
    
    

  }



  changeUser(event: any) {
    this.userName = (event.target.value)
    console.log(this.userName)

  }
  selectBook(event: any) {
    this.bookName = (event.target.value)
    console.log(this.bookName)
  }

  /*add() { 
    const userName = this.userName;
  const bookName = this.bookName;
  if (userName=="") {
    this.isUser = true;
    
  } else {
    this.isUser=false;
    
  }
  if (bookName=="") {
    this.isBook= true;
    
  } else {
    this.isBook=false;
    
  }

  const count = +(document.getElementById('count')as HTMLInputElement).value;
 
  
 const issuedData=new Issuedbook(userName,bookName,count)
 
 

  for (let i = 0; i < this.booklist.length; i++) {
    if (count>0 && userName!="" && bookName!="") {
      if (this.bookName===this.booklist[i].bookName) {
        this.quantity = this.booklist[i].quantity;
        if (count>this.quantity) {
          this.isCount = true;
          
        } else {
          this.issuedbookservice.addList(issuedData)
          this.booksService.changeData(bookName,count);
          this.isCount =false;
          this.inputForm.reset();
          (document.getElementById('users')as HTMLSelectElement).value="user1";
          (document.getElementById('books')as HTMLSelectElement).value="book1";

                }   
    
              }

            }
          



        }
        
      }*/
      //by ngformethod
    /*  add() {                          
        const userName = this.userName;
      const bookName = this.bookName;
      if (userName=="") {
        this.isUser = true;
        
      } else {
        this.isUser=false;
        
      }
      if (bookName=="") {
        this.isBook= true;
        
      } else {
        this.isBook=false;
        
      }
      const countString = (document.getElementById('count')as HTMLInputElement).value;
      if (countString=="") {
        this.isCount1 = true;
        
      } else {
        this.isCount1=false;
        
      }
    
      const count = +(document.getElementById('count')as HTMLInputElement).value;
     const count1 =[bookName+"_"+count]
     let count2 =bookName+"_"+count;
      
     const issuedData=new Issuedbook2(userName,count1)
     const issuedData2 = count2;
     
     
    
      for (let i = 0; i < this.booklist.length; i++) {
        if (count>0 && userName!="" && bookName!="") {
          if (this.bookName===this.booklist[i].bookName) {
            this.quantity = this.booklist[i].quantity;
            if (this.quantity<=count) {
              this.isCount = true;
            }

               /* this.booksService.changeData(bookName,count);
                this.isCount =false;
                this.inputForm.reset();
                (document.getElementById('users')as HTMLSelectElement).value="user1";
                (document.getElementById('books')as HTMLSelectElement).value="book1";
                else{
                    if (this.userName!==this.issuedBookList[i].users) {
                      this.issuedbookservice.addList(issuedData)
                      this.booksService.changeData(bookName,count); 
                      this.isCount =false;
                      this.inputForm.reset();
                      (document.getElementById('users')as HTMLSelectElement).value="user1";
                      (document.getElementById('books')as HTMLSelectElement).value="book1";
                     

                      
                    } else {
                      if (this.userName===this.issuedBookList[i].users) {
                        this.issuedBookList[i].count1.push(count2);
                        
                        



                        
                      }
                      
                    }
                    
                  }
                }
        }
                    
      }
                  
    }*/
   
    

    add() { 
      const userName = this.userName;
    const bookName = this.bookName;
    if (userName=="") {
      this.isUser = true;
      
    } else {
      this.isUser=false;
      
    }
    if (bookName=="") {
      this.isBook= true;
      
    } else {
      this.isBook=false;
      
    }
    const countString = (document.getElementById('count')as HTMLInputElement).value;
    if (countString=="") {
      this.isCount1 = true;
      
    } else {
      this.isCount1=false;
      
    }
    const count = +(document.getElementById('count')as HTMLInputElement).value;
   
    
   const issuedData=new Issuedbook(userName,bookName,count)
   
   
  
    for (let i = 0; i < this.booklist.length; i++) {
      if (count>0 && userName!="" && bookName!="") {
        if (this.bookName===this.booklist[i].bookName) {
          this.quantity = this.booklist[i].quantity;
          if (count>this.quantity) {
            this.isCount = true;
            
          } else {
            this.issuedbookservice.addList(issuedData)
            this.booksService.changeData(bookName,count);

            this.isCount =false;
            this.issueBookMap=this.issuedbookservice.getIssueBookMap()
            this.inputForm.reset();
            (document.getElementById('users')as HTMLSelectElement).value="user1";
            (document.getElementById('books')as HTMLSelectElement).value="book1";
  
                  }   
      
                }
  
              }
            
  
  
  
          }
          
        }




getBookValue(val:any){
return val ? val :[]
 }






  }



                
            








