import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string = "";
  loginForm:FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required , Validators.email] ),
    password : new FormControl('',[Validators.required , Validators.pattern(`^[A-Z][a-z]{2,8}$`)]),
  });

  constructor(public _AuthService:AuthService , public _Router:Router) { }

  ngOnInit(): void {
  }

  submitLoginForm(loginForm:FormGroup)
  {
     if (loginForm.valid) {
       this._AuthService.login(loginForm.value).subscribe((response)=>{
          if (response.message == 'success') {
            localStorage.setItem('userToken' , response.token);
            this._AuthService.saveUserData();
            this._Router.navigate(['home'])
          }

          else{
            this.error = response.errors.email.message;
          }
       })
     }
  }

}
