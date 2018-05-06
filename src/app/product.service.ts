import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Observable';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Product } from './product';  

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
@Injectable()  
export class ProductService {  
  private productsUrl ='http://localhost:9090/all';  //这是REST API的URL  
  private productDetailUrl ='http://localhost:9090/productdetail';
  private productUpdateUrl ='http://localhost:9090/updateproduct';
  private productCreateUrl ='http://localhost:9090/createproduct';
  private productDeleteUrl ='http://localhost:9090/deleteproduct';
  
  constructor(private http:HttpClient) { }  
  
  getProducts(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.productsUrl)  
  }  

  /** GET hero by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.productDetailUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  /** PUT: update the product on the server */
  updateProduct (product: Product): Observable<any> {
    return this.http.put(this.productUpdateUrl, product, httpOptions);
  }

  /** POST: add a new product to the server */
  createProduct (product: Product): Observable<Product> {
    return this.http.put<Product>(this.productCreateUrl, product, httpOptions);
  }

  /** POST: add a new product to the server */
  deleteProduct (product: Product): Observable<Product> {
    return this.http.put<Product>(this.productDeleteUrl, product, httpOptions);
  }
}
