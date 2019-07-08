import { User } from './user';

export class Group {
  name: string;
  members: User[];
  constructor(name: string, ...members: User[]) { this.name = name; this.members = members; }
}
