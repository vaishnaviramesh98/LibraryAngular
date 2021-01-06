import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor(private  authorsService:AuthorsService,private router: Router){  } 
  authorItem= {
    authorName:'',
    authorNationality:'',
    authorAge:'',
    authorImage:''} 

  ngOnInit() {
  }
  AddAuthor()
  {    
    this.authorsService.newAuthor(this.authorItem);
    console.log("Called");    
    alert("Sucess");
    this.router.navigate(['/authors']);
  }
}
