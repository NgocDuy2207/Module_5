import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }
  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }
  editProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/${id}`, product);
  }
  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL + '/' + id);
  }
  search(input: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL + '?q=' + input);
  }

}
