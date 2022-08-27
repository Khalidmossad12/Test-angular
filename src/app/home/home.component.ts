
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _MoviesService:MoviesService){}
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPeople:any[]=[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {

    $(".hello").hide(2000);


    this._MoviesService.getTrending('movie').subscribe((response)=>{
        this.trendingMovies = response.results.slice(0,10);
    })

    this._MoviesService.getTrending('tv').subscribe((response)=>{
      this.trendingTv = response.results.slice(0,10);
    })

  this._MoviesService.getTrending('people').subscribe((response)=>{
    this.trendingPeople = response.results.slice(0,10);
    })
  }

}
