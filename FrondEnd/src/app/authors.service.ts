import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  item= {
    authorName:'',
    authorNationality:'',
    authorAge:'',
    authorImage:''}
  constructor( private http:HttpClient) { }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/author/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }

  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/insertauthor",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/removeauthor/"+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    console.log('Author'+author);
    return this.http.put("http://localhost:3000/updateauthor",author)
    .subscribe(data =>{console.log(data)})
  }
}
