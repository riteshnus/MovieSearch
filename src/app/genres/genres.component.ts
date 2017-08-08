/**
 * Created by Ritesh on 7/16/2017.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MovieService } from '../movies.services';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  title: string;
  movies: Object;

  constructor(
    private _moviesServices: MovieService,
    private router: ActivatedRoute ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.title = params['name'];
      this._moviesServices.getMoviesByGenre(id).subscribe(res => {
        this.movies = res.results;
      });
    })
  }

}
