import { Iimage } from './images.interface';
import { IOpenArticle } from './open-article.interface';

export class OpenArticle implements IOpenArticle {
  id: number;
  title: string;
  price: number;
  discount: number;
  image: Iimage;
  smallImage: Iimage;
  category: string;
  color: string;
  size: string[];
  stock: number;

  constructor(
    id: number,
    title: string,
    price: number,
    discount: number,
    image: Iimage,
    smallImage: Iimage,
    category: string,
    color: string,
    size: string[],
    stock: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.discount = discount;
    this.image = image;
    this.smallImage = smallImage;
    this.category = category;
    this.color = color;
    this.size = size;
    this.stock = stock;
  }
}
