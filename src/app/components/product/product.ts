export class Product {
  name: string;
  owner: string;
  image: string;
  description: string;
  constructor(name:string, img: string, user: string, desc: string) {
    this.name = name;
    this.image = img;
    this.owner = user;
    this.description = desc;
  }
}
