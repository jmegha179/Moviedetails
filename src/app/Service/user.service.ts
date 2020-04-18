import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Used to store api key of movie db
   */
  apiKey = 'api_key=9bf8050b44e4f2c3416381922ee69286';

  /**
   * Used to stroe base Url for movie list
   */
  baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?';

  /**
   * Used to store base url for movie details
   */
  baseUrlID = 'https://api.themoviedb.org/3/movie/';

  /**
   * Used to store path of image
   */
  imagePath = 'https://image.tmdb.org/t/p/w200';

  /**
   * Used to store path for background Image
   */
  backgroundPath = 'https://image.tmdb.org/t/p/w300';
  constructor(private http: HttpClient) {}

  // funtion for get all Movies
  getAll(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl + this.apiKey);
  }

  // get movies by Id
  getById(userId): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrlID  + userId + '?'  + this.apiKey);
  }
}
