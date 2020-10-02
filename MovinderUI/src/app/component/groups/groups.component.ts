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
  groupCode: string;
  groupList = [];
  showError = false;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private route: Router
    ) {
      this.groupCode = 'PPBqWA9';
      this.getListOfGroups();
     }

  ngOnInit(): void {
  }

  joinGroup(): void{
    const userId = this.userService.userId;
    this.groupService.joinGroup(userId, this.groupCode).subscribe(answer => {
      this.userService.groupId = answer.body.group_id;
      this.route.navigate(['/movies']);
    }, err => {
      this.showError = true;
      console.log(err.error.message);
    });
  }

  inputChanged(): void {
    this.showError = false;
  }

  getListOfGroups(): void {
    const userId = this.userService.userId;
    this.groupService.getListOfGroups(userId).subscribe(answer => {
      this.groupList = answer.body;
    }, err => {
      console.log(err.error.message);
    });
  }

  selectGroup(groupId): void {
    this.userService.groupId = groupId;
    this.route.navigate(['/movies']);
  }
}
