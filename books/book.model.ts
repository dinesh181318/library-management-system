export class Book {
    public isbn: number;
    public bookName: string;
    public authorName: string;
    public publisher: string;
    public quantity: number;
    public issuedBook:number;


    constructor(isbn: number, bookName: string, authorName: string, publisher: string, quantity: number ,issuedBook:number){
       this.isbn =isbn;
       this.bookName = bookName;
       this.authorName =authorName;
       this.publisher = publisher;
       this.quantity = quantity;
       this.issuedBook=issuedBook;
    }
    
}