import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList = [];
  index = 0;
  page = 1;
  display = 'none';
  matched: any = {};
  constructor(
    private userService: UserService,
    private movieService: MovieService) {
      this.updateMovieList(this.page);
    }

  ngOnInit(): void {
  }

  updateMovieList(page): void{
    this.index = 0;
    const groupId = this.userService.groupId;
    const userId = this.userService.userId;
    this.movieService.checkUser(userId, groupId, page).subscribe(res => {
      this.movieList = res.body.results;
      if (this.movieList.length === 0){
        this.page++;
        this.updateMovieList(this.page);
      }
  }, err => {
    console.log(err);
  });
  }

  nextMovie(liked): void{
    this.updateMovieDecision(liked);
    this.index++;
    if (this.index >= this.movieList.length){
      this.page++;
      this.updateMovieList(this.page);
    }
  }

  updateMovieDecision(approved): void {
    const groupId = this.userService.groupId;
    const userId = this.userService.userId;
    const movieId =  this.movieList[this.index].id;
    this.movieService.makeDecision(userId, groupId, movieId, approved).subscribe(res => {
      console.log(res.body);
      if (res.body.matched){
        this.switchModal(true);
        this.movieService.getMovie(res.body.movieId).subscribe(movieInfo => {
          this.matched = movieInfo.body;
        }, error =>{
          console.log(error);
        });
      }
  }, err => {
    console.log(err);
  });
  }

  switchModal(turn): void{
    this.display = turn ?  'block' : 'none';
  }

}
