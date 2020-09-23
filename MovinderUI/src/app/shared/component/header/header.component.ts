import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems = [];
  isMenuVisable = false;
  displayClass = 'hidden';

  constructor(private route: Router) {
    this.menuItems = [{
      name: 'Home',
      path: '/'
    },
    {
      name: 'Groups',
      path: '/groups'
    },
    {
      name: 'Quiz',
      path: '/day3'
    }];
  }

  ngOnInit(): void {
  }

  toggleMenu(): void{
    this.isMenuVisable = !this.isMenuVisable;
    if (this.isMenuVisable){
      this.displayClass = '';
    } else {
      this.displayClass = 'hidden';
    }
  }

  loadPage(path): void{
    this.route.navigate([path]);
  }
}
