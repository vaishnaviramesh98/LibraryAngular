import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { AuthorsComponent } from './authors/authors.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path:'authors',
    component:AuthorsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  //signin
  {
    path:'signin',
    component:SigninComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewbookComponent,
},
{
  path:'addauthor',
  canActivate:[AuthGuard],
  component:NewauthorComponent
},

{
  path:'update',
  component:UpdateBookComponent
},
{
  path:'updateauthor',
  component:UpdateAuthorComponent
}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
