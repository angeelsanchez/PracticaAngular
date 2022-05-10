import { Iimage } from './images.interface';

export interface IOpenArticle {
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
}
