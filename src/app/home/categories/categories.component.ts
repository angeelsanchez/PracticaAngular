import { Component, Input, OnInit } from '@angular/core';
import { Icategories } from '../models/categories.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categorie?: Icategories;

  constructor() {}

  ngOnInit(): void {}
}
