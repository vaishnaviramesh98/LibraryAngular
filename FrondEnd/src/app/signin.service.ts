import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

 
  constructor(private http:HttpClient) { }
  newUser(item:any){
    return this.http.post("http://localhost:3000/sign",{"sign":item})
    .subscribe(data =>{console.log(data)})
  }
  newUserr(item:any){
    return this.http.post("http://localhost:3000/signn",{"sign":item})
    .subscribe(data =>{console.log(data)})
  }
}
