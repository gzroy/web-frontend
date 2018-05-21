import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { KeycloakService } from './keycloak.service';  

import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      return Observable.fromPromise(KeycloakService.getToken()).switchMap(token=>{
               const authReq = req.clone({ setHeaders: { Authorization: 'Bearer '+token } });
               return next.handle(authReq);
             });
  }

      //let authToken = 'abcd';
      //KeycloakService.getToken().then((token)=>{authReq = req.clone({ setHeaders: { Authorization: authToken } });return next.handle(authReq);});
      //console.log('dddd');
      //console.log(authToken);
      //const tokenPromise: Promise<string> = KeycloakService.getToken();
//const tokenObservable: Observable<string> = Observable.fromPromise(tokenPromise);
      //console.log('dddd');
      //let authToken = KeycloakService.getToken1();
      //console.log('ffffffffffffffff');
      //console.log(authToken);
      //tokenObservable: Observable<string> = Observable.fromPromise(KeycloakService.getToken());
      //let authToken = getToken();
      //KeycloakService.getToken().then(token=>{console.log(token)};);
      //const authReq = req.clone({ setHeaders: { Authorization: "abc" } });
      //KeycloakService.getToken().then((token)=>{authReq = req.clone({ setHeaders: { Authorization: token } }); return next.handle(authReq);});
      //return next.handle(authReq);
//const tokenPromise: Promise<string> = KeycloakService.getToken();
//const tokenObservable: Observable<string> = Observable.fromPromise(tokenPromise);
//tokenObservable.map(token=>{authReq = req.clone({ setHeaders: { Authorization: token } });
}
