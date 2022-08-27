import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutUsers:any[] = []
  constructor() {
    let x = new UsersService();
    this.aboutUsers = x.users; 
   }

  ngOnInit(): void {
  }

}
