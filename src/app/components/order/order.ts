export class Order {
  count: number;
  creator: string;
  deadline: string;
  productName: string;
  requestGroup: string[];
  constructor(prodName: string, count: number, creator: string, deadline: string, ...reqGroup: string[]) {
    this.count = count;
    this.creator = creator;
    this.deadline = deadline;
    this.productName = prodName;
    this.requestGroup = reqGroup;
  }
}
