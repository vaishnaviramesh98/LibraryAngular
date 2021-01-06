import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  pageTitle: string = 'Authors';
  imageWidth: number = 150;
  imageMargin: number = 150;
  showImage: boolean = false;

  authors=[{
    authorName:'',
    authorNationality:'',
    authorAge:'',
    authorImage:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private authorsService:AuthorsService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.authorsService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }
 
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.authorsService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(a => a !== author);
      })
  

  }
}
  