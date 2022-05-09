import { Component, OnInit } from '@angular/core';
import {
  faComment,
  faUser,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faComment = faComment;
  faUser = faUser;
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  constructor() {}

  ngOnInit(): void {}
}
