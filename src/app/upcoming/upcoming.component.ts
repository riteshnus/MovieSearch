/**
 * Created by Ritesh on 7/16/2017.
 */
import {Component, OnInit} from "@angular/core";
import {MovieService} from "../movies.services";

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit{
  movies: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieService:MovieService){
    this._movieService.getUpComingMovies().subscribe(res=>{
      this.movies = res.results;
    });
  }

  ngOnInit(){}

  searchMovies(){
    this._movieService.searchMovies(this.searchStr).subscribe(res =>{
      this.searchRes = res.results;
    })
  }
}
