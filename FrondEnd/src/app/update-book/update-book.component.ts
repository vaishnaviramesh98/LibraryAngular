import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
    bookItem= {
      bookName:'',
      authorName: '',
      bookGenre: '',
      imageUrl:''} 
 
  constructor(private router:Router,private booksService:BooksService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.booksService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.booksService.editBook(this.bookItem);   
    alert("Sucess");
    this.router.navigate(['books']);
  }

}
