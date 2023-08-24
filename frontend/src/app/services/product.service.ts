import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL='http://localhost:3000/products';
  
  constructor(private http:HttpClient) { }
  products$ = new BehaviorSubject<Product[]>([]);
  
  getProducts(){
    this.http.get<Product[]>(this.API_URL).subscribe((products)=>{
      this.products$.next(products);
    });
  }
  createProduct(product:Product){
    this.http.post<Product>(this.API_URL,product).subscribe((product)=>{
      this.getProducts();
    });
  }
  updateProduct(product:Product){
    this.http.put<Product>(this.API_URL+'/'+product.id,product).subscribe((product)=>{
      this.getProducts();
    });
  }
  deleteProduct(id:number){
    this.http.delete<Product>(this.API_URL+'/'+id).subscribe((product)=>{
      this.getProducts();
    });
  }
}
