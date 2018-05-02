import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Observable';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Product } from './product';  
  
@Injectable()  
export class ProductService {  
  private productsUrl ='http://localhost:9090/all';  //这是REST API的URL  
  
  constructor(private http:HttpClient) { }  
  
  getProducts ():Observable<Product[]> {  
    return this.http.get<Product[]>(this.productsUrl)  
  }  
}  