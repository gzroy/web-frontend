import { Component, OnInit } from '@angular/core';
import { Product } from '../product';  
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }

  ngOnInit() {
  }

  create(name: String, description: string): void {
   this.productService.createProduct({name, description} as Product)
     .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
