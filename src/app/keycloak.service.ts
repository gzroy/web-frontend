import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {
  static auth: any = {};

  constructor() { }

  static init(): Promise<any>{
    const keycloak = Keycloak({
      url: 'https://180.76.138.62:8543/auth',
      realm: 'demo',
      clientId: 'myweb-frontend'
    });

    return new Promise((resolve, reject) => {
      keycloak
        .init({ onLoad: 'login-required' })
        .success(() => {
          KeycloakService.auth.authz = keycloak;
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }
  
  static getToken(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(90) // refresh token if it will expire in 90 seconds or less
          .success(() => {
            return resolve(KeycloakService.auth.authz.token);
             
          })
          .error(() => {
            return reject('Failed to refresh token');
          });
      } else {
        return reject('Not logged in');
      }
    //return KeycloakService.auth.authz.token;
    });
  }

  static async getToken1(){
     let token1 = await KeycloakService.getToken();
     console.log('bbbbb');
     console.log(token1);
     return token1;
  }
}
