import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../accounting/user';

@Component({
  selector: 'dialog-groups-add',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css', '../../styles/dialogs.css']
})
export class AddGroupDialogComponent {
  isShown = false;
  usersService: UsersService;
  name: string;
  currentUser: User;
  users: User[];
  constructor(usersService: UsersService) {
    this.users = [];
    this.usersService = usersService;
  }
  get allUsers() { return this.usersService.allUsers; }
  onSubmit(): void {
    this.isShown = false;
  }
  addUser(): void {
    if (this.currentUser !== null && this.users.indexOf(this.currentUser) < 0) {
      this.users.push(this.currentUser);
    }
  }
  delUser(u): void {
  }
}
