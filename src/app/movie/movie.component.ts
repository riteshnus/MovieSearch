/**
 * Created by Ritesh on 7/16/2017.
 */
import { Component, OnInit } from '@angular/core'
import {MovieService} from "../movies.services";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from '@angular/router';
import {log} from "util";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent{
  movie : Object;
  reviews: Array<Object>;
  //similarMovies: Array<Object>;
  cast: Array<Object>;
  video: Object;
  constructor(
    private _movieService: MovieService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer){
  }

  ngOnInit(){
      this.router.params.subscribe((params)=>{
        console.log(params);
        const id = params['id'];
        this._movieService.getMovie(id).subscribe(movie=>{
          this.movie = movie;
        });
        this._movieService.getMovieReviews(id).subscribe(res=>{
          this.reviews = res.results;
        });
        this._movieService.getMovieCredits(id).subscribe(res=>{
          res.cast = res.cast.filter((item)=>{return item.profile_path});
          this.cast = res.cast.slice(0,4);
        });
        this._movieService.getMovieVideos(id).subscribe(res => {
          if(res.results && res.results.length) {
            this.video = res.results[0];
            console.log("youTube video key: "+this.video['key']);
            this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
          }
        });
      })
  }

}
