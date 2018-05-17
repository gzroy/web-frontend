import { Component, OnInit } from '@angular/core';  
import { Product } from '../product';  
import { ProductService } from '../product.service';  //productServic是用于读取数据的Service  
import { KeycloakService } from '../keycloak.service';      
@Component({  
  selector: 'app-products',  
  templateUrl:'./products.component.html',  
  styleUrls: ['./products.component.css']  
})  
  
export class ProductsComponent implements OnInit {  
  products: Product[];  
  constructor(private productService: ProductService) { }   
  ngOnInit() {  
    this.getProducts();  
  }  
  
  getProducts(): void {  
    this.productService.getProducts()  
      .subscribe(products=> this.products = products); //subscribe是异步方式，在拿到数据后调用callback函数  
  }  
  
  selectedProduct: Product;  
  
  onSelect(product: Product):void {  
    this.selectedProduct =product;  
  }  
}  