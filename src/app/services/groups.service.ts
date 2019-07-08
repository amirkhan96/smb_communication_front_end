import { Injectable } from '@angular/core';
import { Group } from '../components/accounting/group';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  mockGroups: Group[];
  get allAvailableGroups(): Group[] {
    return this.mockGroups;
  }
  constructor(usersService: UsersService) {
    this.mockGroups = [];
    const us = usersService.allUsers;
    const gNames = [];
    us.forEach(u => {
      if (gNames.indexOf(u.group) < 0) {
        gNames.push(u.group);
      }
    });
    gNames.forEach(g => {
      const grp = new Group(g);
      us.forEach(u => {
        if (u.group === g) {
          grp.members.push(u);
        }
      });
      this.mockGroups.push(grp);
    });
  }
}
