import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsInterface } from '../interfaces/product.interface';
import { ProductInterface } from '../interfaces/productInput.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<ProductsInterface[]> {
    const url = environment.api_url + `product`;
    return this.http.get<ProductsInterface[]>(url);
  }

  getProduct(id: number): Observable<ProductInterface[]> {
    const url = environment.api_url + `product/${id}`;
    return this.http.get<ProductInterface[]>(url);
  }
  // PostBudget(id: number): Observable<ProductInterface[]> {
  //   const url = environment.api_url + `budget/${id}`;
  //   return this.http.post<ProductInterface[]>(url);
  // }
}
