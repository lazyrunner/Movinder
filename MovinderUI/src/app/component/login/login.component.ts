import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  allowLogin: any;
  showError = false;
  constructor(private userService: UserService, private route: Router) {
    this.username = 'joshfernandes';
    this.password = 'test';
   }

  ngOnInit(): void {
  }

  login(): void{
    this.userService.checkUser(this.username, this.password).subscribe(answer => {
      console.log(this.username);
      this.userService.userId = answer.body.user_id;
      this.userService.userName = this.username;
      this.route.navigate(['/groups']);
    }, err => {
      this.showError = true;
      console.log(err.error.message);
    });
  }

  inputChanged(): void {
    this.showError = false;
  }

}
