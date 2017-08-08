/**
 * Created by Ritesh on 7/16/2017.
 */
import { Injectable } from '@angular/core'
import {Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MovieService{
  apikey: string;

  constructor (private _jsonp: Jsonp){
    this.apikey = '15954a933628031dd6874635b11e839a';
  }

  getPopular(){
    var search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  searchMovies(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMoviesByGenre(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/'+ id +'/movies?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getGenres() {
    var search = new URLSearchParams();
    search.set('language', 'en-US');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getTopRatedMovies() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieReviews(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/reviews?callback=JSONP_CALLBACK', {search})
      .map(res => res.json())
  }

  getMovieCredits(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?callback=JSONP_CALLBACK', {search})
      .map(res => res.json())
  }

  getMovieVideos(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/videos?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getPersonDetail(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getUpComingMovies() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
}
