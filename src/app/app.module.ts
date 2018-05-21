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
import { HttpAuthService } from './http-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
  
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
    ProductService, 
    KeycloakService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthService, multi: true }
  ],  
  
  bootstrap: [AppComponent]  
})  
  
export class AppModule { }  
