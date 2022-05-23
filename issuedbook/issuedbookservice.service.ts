import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { BooksService } from '../books/books.service';
import { UsersService } from '../users/users.service';
import { Issuedbook } from './issuedbook.model';
import { Issuedbook2 } from './issuedbook2.model';


@Injectable({
  providedIn: 'root'
})
export class IssuedbookserviceService {

 
  public issuedServiceList:Issuedbook[] =  [];
 
  

 

  constructor() { }

 

getIssued(){
  return this.issuedServiceList
}

 addList(issuedData: Issuedbook){

        this.issuedServiceList.push(issuedData)
     
} 
 
   
  

getIssueBookMap(){
  const issuedBookMap =this.issuedServiceList.length ? _.groupBy(this.issuedServiceList, 'users'):{}
  return issuedBookMap;
}
 




}
