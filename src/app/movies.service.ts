import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {

  }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=09f3e1a7bb2b9c109ee08870de67e8a2`);
  }

  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=09f3e1a7bb2b9c109ee08870de67e8a2&language=en-US`);
  }

  getMovieTv(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=09f3e1a7bb2b9c109ee08870de67e8a2&language=en-US`);
  }

  getMoviePeople(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=09f3e1a7bb2b9c109ee08870de67e8a2&language=en-US`);
  }

}
