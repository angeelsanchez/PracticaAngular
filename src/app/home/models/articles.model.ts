import { IArticles } from './articles.interface';
import { Iimage } from './images.interface';

export class Articles implements IArticles {
  id: number;
  title: string;
  price: number;
  discount: number;
  image: Iimage;
  favourite: boolean;

  constructor(
    id: number,
    title: string,
    price: number,
    discount: number,
    image: Iimage,
    favourite: boolean
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.discount = discount;
    this.image = image;
    this.favourite = favourite;
  }
}
