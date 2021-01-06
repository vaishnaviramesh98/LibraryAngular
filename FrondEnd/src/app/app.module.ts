import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';
import { BooksComponent } from './books/books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { BooksService } from './books.service';
import { AuthorsComponent } from './authors/authors.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { AuthorsService } from './authors.service';
import { SigninComponent } from './signin/signin.component';
import { SigninService } from './signin.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewbookComponent,
    BooksComponent,
    UpdateBookComponent,
    AuthorsComponent,
    NewauthorComponent,
    UpdateAuthorComponent,
    SigninComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,AuthGuard,BooksService,AuthorsService,SigninService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
