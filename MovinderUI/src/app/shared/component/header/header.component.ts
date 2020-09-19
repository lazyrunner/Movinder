import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems = [];
  isMenuVisable = false;
  displayClass = 'hidden';

  constructor() {
    this.menuItems = [{
      name: 'Home',
      path: '/'
    },
    {
      name: 'Countdown',
      path: '/day2'
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
}
