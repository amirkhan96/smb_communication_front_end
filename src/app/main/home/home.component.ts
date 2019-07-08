import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  get username(): string {
    return this.usersService.username;
  }
  get isLoggedIn(): boolean {
    return this.usersService.isLoggedIn;
  }
  private usersService: UsersService;
  constructor(usersService: UsersService) { this.usersService = usersService; }
}
