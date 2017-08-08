/**
 * Created by Ritesh on 7/16/2017.
 */
import {Component, OnInit} from '@angular/core';
import { MovieService } from '../movies.services';


@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  popularList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr : string;

  constructor(private _movieService: MovieService){
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this._movieService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res.results;
      console.log(res.results);
    })
  }

  ngOnInit(){
  }

  searchMovies(){
    this._movieService.searchMovies(this.searchStr).subscribe(res=>{
      this.searchRes = res.results;
    })
  }
}
