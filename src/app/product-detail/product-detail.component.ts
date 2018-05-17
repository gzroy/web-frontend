import { Component, OnInit, Input } from '@angular/core';  
import { Product } from '../product';  
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService }  from '../product.service';
@Component({  
  selector:'app-product-detail',  
  templateUrl:'./product-detail.component.html',  
  styleUrls:['./product-detail.component.css']  
})  
  
export class ProductDetailComponent implements OnInit {  
  product: Product;     
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }  
  
  ngOnInit() {  
    this.getProduct()
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);  
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.productService.updateProduct(this.product)
     .subscribe(() => this.goBack());
  }

  delete(): void {
   this.productService.deleteProduct(this.product)
     .subscribe(() => this.goBack());
  }
}  
