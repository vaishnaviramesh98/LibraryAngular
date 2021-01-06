import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../customvalidation.service';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup|any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private signinService:SigninService,private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  reactiveItem={
   name:'',
   email:'',
   username:'',
   password:'',
   confirmPassword:''
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!');
      console.table(this.registerForm.value);
      this.signinService.newUserr(this.registerForm.value)
      console.log("Called");    
      this.router.navigate(['/login']);
    }
  }
}

