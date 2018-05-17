import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent }      from './products/products.component';
import { ProductDetailComponent }      from './product-detail/product-detail.component';
import { AddProductComponent }      from './add-product/add-product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: 'createproduct', component: AddProductComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
