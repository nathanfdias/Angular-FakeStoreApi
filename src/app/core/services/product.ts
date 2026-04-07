import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private api = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient){}

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }

  getById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }
}
