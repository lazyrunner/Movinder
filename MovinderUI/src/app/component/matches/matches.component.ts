import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchedMovies = [];
  constructor(
    private userService: UserService,
    private movieService: MovieService
    ) { 
      this.getMatchedMovies();
    }

  ngOnInit(): void {
  }

  getMatchedMovies(): void{
    const groupId = this.userService.groupId;
    this.movieService.getMatchedMovie(groupId).subscribe(resp => {
      this.matchedMovies = resp.body;
    }, err => {
      console.log(err);
    });
  }

}
