import { Component, OnInit, Input } from '@angular/core';  
import { Product } from '../product';  
@Component({  
  selector:'app-product-detail',  
  templateUrl:'./product-detail.component.html',  
  styleUrls:['./product-detail.component.css']  
})  
  
export class ProductDetailComponent implements OnInit {  
  @Input() product: Product;   //表示这个属性是需要外部输入的  
  constructor() { }  
  
  ngOnInit() {  
  }  
}  