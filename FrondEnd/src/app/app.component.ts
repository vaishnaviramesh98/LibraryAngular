import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library App';
  constructor(public _auth:AuthService,
    private _router:Router){}
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/books'])
}
loggedUser()
{
  this._router.navigate(['/add'])
}
}
