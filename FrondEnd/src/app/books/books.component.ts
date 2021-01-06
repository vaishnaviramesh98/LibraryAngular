import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  pageTitle: string = 'Books';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  books=[{
    bookName:'',
    authorName: '',
    bookGenre: '',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private booksService:BooksService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.booksService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
 
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.booksService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
  

  }
}
  