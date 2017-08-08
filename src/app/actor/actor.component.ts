/**
 * Created by Ritesh on 7/16/2017.
 */

import {Component, OnInit} from "@angular/core";
import {MovieService} from "../movies.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit{
  person: Object;
  //movies: Array<Object>;
  constructor(private _movieService: MovieService, private router: ActivatedRoute){
  }

  ngOnInit(){
    this.router.params.subscribe((params)=>{
      const id = params['id'];
      this._movieService.getPersonDetail(id).subscribe(person =>{
        this.person = person;
      })
    })
  }
}
