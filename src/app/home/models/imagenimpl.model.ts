import { Iimage } from './images.interface';

export class Imagen implements Iimage {
  constructor(src: string, alt: string) {
    this.src = src;
    this.alt = alt;
  }
  src: string;
  alt: string;
}
