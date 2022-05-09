import { Icategories } from './categories.interface';
import { Iimage } from './images.interface';

export class Categories implements Icategories {
  image: Iimage;
  title: string;

  constructor(Iimage: Iimage, title: string) {
    this.image = Iimage;
    this.title = title;
  }
}
