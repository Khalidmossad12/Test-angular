import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {name : 'ahmed' , age : 25 , gender : 'male' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'ali' , age : 25 , gender : 'male' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'khalid' , age : 25 , gender : 'male' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'omar' , age : 25 , gender : 'male' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'samar' , age : 25 , gender : 'female' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'mai' , age : 25 , gender : 'female' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'aya' , age : 25 , gender : 'female' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'marwan' , age : 25 , gender : 'male' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'ali' , age : 25 , gender : 'male' , salary : 2200 , dateOfBirth : '1/1/2010'},
    {name : 'ahmed' , age : 25 , gender : 'male' , salary : 2200 , dateOfBirth : '1/1/2010'},
  ]
  constructor() { }
}
