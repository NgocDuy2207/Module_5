import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductType} from '../../model/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeServiceService {
  API_URL = 'http://localhost:3000/productType';

  constructor(private http: HttpClient) { }
  getAll(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.API_URL);
  }
  findById(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(this.API_URL + '/' + id);
  }
}
