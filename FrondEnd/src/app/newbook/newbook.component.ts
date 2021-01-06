import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {

  constructor(private booksService:BooksService,private router: Router){  } 
  bookItem= {
    bookName:'',
    authorName: '',
    bookGenre: '',
    imageUrl:''} 

  ngOnInit() {
  }
  AddBook()
  {    
    this.booksService.newBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
