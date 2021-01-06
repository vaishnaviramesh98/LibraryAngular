import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  authorItem= {
    authorName:'',
    authorNationality:'',
    authorAge:'',
    authorImage:''} 

constructor(private router:Router,private authorsService:AuthorsService) { }

ngOnInit(): void {
  let authorId = localStorage.getItem("editAuthorId");
  this.authorsService.getAuthor(authorId).subscribe((data)=>{
    this.authorItem=JSON.parse(JSON.stringify(data));
})
}
editAuthor()
{    
  this.authorsService.editAuthor(this.authorItem);   
  alert("Sucess");
  this.router.navigate(['authors']);
}

}
