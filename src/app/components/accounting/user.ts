export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  group: string;
  password: string;
  productsOwned: string[];
  productsAccessed: string[];
  ordersSent: string[];
  ordersReceived: string[];
  constructor(id: string, email: string, fName: string, lName: string, group: string) {
    this.id = id;
    this.email = email;
    this.firstName = fName;
    this.lastName = lName;
    this.group = group;
  }
}
