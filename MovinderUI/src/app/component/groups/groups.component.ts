import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../services/group.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groupCode:string;
  showError = false;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  joinGroup(): void{
    const userId = this.userService.userId;
    this.groupService.checkUser(userId, this.groupCode).subscribe(answer => {
      this.userService.groupId = answer.body.group_id;
      this.route.navigate(['/day3']);
    }, err => {
      this.showError = true;
      console.log(err.error.message);
    });
  }

  inputChanged(): void {
    this.showError = false;
  }
}
