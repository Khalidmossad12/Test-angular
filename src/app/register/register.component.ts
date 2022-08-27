import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error:string = "";    

  registerForm:FormGroup = new FormGroup({
    first_name : new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    last_name : new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    age : new FormControl('' , [Validators.required , Validators.min(16) , Validators.max(80)]),
    email : new FormControl('',[Validators.required , Validators.email] ),
    password : new FormControl('',[Validators.required , Validators.pattern(`^[A-Z][a-z]{2,8}$`)]),

  });

  constructor(public _AuthService:AuthService , public _Router:Router) { }

  ngOnInit(): void {

  }

  submitRegisterForm(registerForm:FormGroup)
  {
     if (registerForm.valid) {
       this._AuthService.register(registerForm.value).subscribe((response)=>{
          if (response.message == 'success') {
            this._Router.navigate(['login'])
          }

          else{
            this.error = response.errors.email.message;
          }
       })
     }
  }



}
