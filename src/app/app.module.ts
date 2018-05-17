import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { HttpClientModule }   from '@angular/common/http';  
import { AppComponent } from './app.component';  
import { ProductsComponent } from './products/products.component';  
import { ProductDetailComponent } from'./product-detail/product-detail.component';  
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { KeycloakService } from './keycloak.service';
  
@NgModule({  
  declarations: [  
    AppComponent,  
    ProductsComponent,  
    ProductDetailComponent, AddProductComponent  
  ],  
  
  imports: [  
    BrowserModule,  
    FormsModule,  
    HttpClientModule, AppRoutingModule  
  ],  
  
  providers: [  
    ProductService, KeycloakService
  ],  
  
  bootstrap: [AppComponent]  
})  
  
export class AppModule { }  