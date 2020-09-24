import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList:any;
  index = 0;
  page = 1;
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
  }, err => {
    console.log(err);
  });
  }

  nextMovie(): void{
    this.index++;
    if (this.index >= this.movieList.length){
      this.page++;
      this.updateMovieList(this.page);
    }
  }

}
