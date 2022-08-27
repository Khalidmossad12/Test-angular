import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  id:string = '';
  movieDetails:any = {};
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {


   }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getMovieDetails(this.id).subscribe((response)=>
    {
      this.movieDetails = response;
    })

    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getMovieTv(this.id).subscribe((response)=>
    {
      this.movieDetails = response;
    })

    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getMoviePeople(this.id).subscribe((response)=>
    {
      this.movieDetails = response;
    })
  }

}
