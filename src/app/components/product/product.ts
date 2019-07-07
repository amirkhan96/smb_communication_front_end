export class Product {
  id: string;
  name: string;
  owner: string;
  image: string;
  description: string;
  constructor(id: string, name: string, img: string, user: string, desc: string) {
    this.id = id;
    this.name = name;
    this.image = img;
    this.owner = user;
    this.description = desc;
  }
}
