import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iimage } from '../models/images.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private http: HttpClient) {}

  public fotosCarousel(): Observable<Iimage[]> {
    const urlEndpoint: string = 'http://localhost:3002/carousel';
    return this.http.get<Iimage[]>(urlEndpoint);
  }

  public fotosBanner(): Observable<Iimage[]> {
    const urlEndpoint: string = 'http://localhost:3002/banner';
    return this.http.get<Iimage[]>(urlEndpoint);
  }
}
