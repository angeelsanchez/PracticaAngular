import { Component, OnInit } from '@angular/core';
import { Icategories } from './models/categories.interface';
import { Categories } from './models/categories.model';
import { Iimage } from './models/images.interface';
import { HomeServiceService } from './services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imagesCarousel: Iimage[] = [];
  imagesBanner: Iimage[] = [];
  categories: Icategories[] = [];

  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.loadCarousel();
    this.loadBanner();
    this.loadCategories();
  }

  public loadCarousel(): void {
    this.homeService.fotosCarousel().subscribe({
      next: (images) => {
        this.imagesCarousel = images;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  public loadBanner(): void {
    this.homeService.fotosBanner().subscribe({
      next: (images) => {
        this.imagesBanner = images;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  public loadCategories(): void {
    this.homeService.fotosCategories().subscribe({
      next: (images) => {
        this.categories = images;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
