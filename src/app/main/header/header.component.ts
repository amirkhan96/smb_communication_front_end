import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usersService: UsersService;
  get isLoggedIn(): boolean {
    return this.usersService.isLoggedIn;
  }
  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }
}
