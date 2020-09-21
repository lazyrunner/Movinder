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
  constructor(private userService: UserService, private route: Router) {
    this.username = 'joshfernandes';
    this.password = 'test';
   }

  ngOnInit(): void {
  }

  login(): void{
    this.userService.checkUser(this.username, this.password).subscribe(answer => {
      this.allowLogin = answer;
      console.log(this.username);
      console.log(this.allowLogin);
      this.route.navigate(['/day2']);
    }, err => {
      console.log(err.error.message);
    });
  }

}
