import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './keycloak.service'; 
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  token: string;
  //const tokenPromise: Promise<string> = this.keycloakService.getToken();
  //const tokenObservable: Observable<string> = Observable.fromPromise(tokenPromise);
  
  constructor() {
  }
  
  public ngOnInit(): void {
        //KeycloakService.getToken().then(()=>{this.token=KeycloakService.auth.authz.token});
  }
  
  public isManager(): boolean {
        //return KeycloakService.hasAnyRole(['manager']);
        return false;
    }
}
