import { Injectable } from '@angular/core';
import { User } from '../components/accounting/user';

export const mockUsers: User[] = [
  new User('1', 'E1@m1.com', 'F1', 'L1', 'G1'),
  new User('2', 'E2@m2.com', 'F2', 'L2', 'G1'),
  new User('3', 'E3@m3.com', 'F3', 'L3', 'G2'),
  new User('4', 'E4@m4.com', 'F4', 'L4', 'G2'),
  new User('5', 'E5@m5.com', 'F5', 'L5', 'G3'),
  new User('6', 'E6@m6.com', 'F6', 'L6', 'G3'),
  new User('7', 'E7@m7.com', 'F7', 'L7', 'G4'),
  new User('8', 'E8@m8.com', 'F8', 'L8', 'G4'),
  new User('9', 'E9@m9.com', 'F9', 'L9', 'G5'),
  new User('10', 'E0@m0.com', 'F0', 'L0', 'G5')
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _username: string = null;
  get username(): string {
    if (this._username == null) {
      this._username = 'Mock User';
      // this._username = null;
    }
    return this._username;
  }
  get isLoggedIn(): boolean { return this.username != null; }
  get allUsers() { return mockUsers; }
  constructor() { }
}
