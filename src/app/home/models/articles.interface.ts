import { Iimage } from './images.interface';

export interface IArticles {
  id: number;
  title: string;
  price: number;
  discount: number;
  image: Iimage;
  favourite: boolean;
}
