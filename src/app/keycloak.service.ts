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
  
  static getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(90) // refresh token if it will expire in 90 seconds or less
          .success(() => {
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not logged in');
      }
    });
  }  
  
  static hasAnyRole(roles: String[]): boolean {
        for (let i = 0; i < roles.length; i++) {
            if (KeycloakService.auth.authz.hasRealmRole(roles[i])) {
                return true;
            }
        }

        return false;
    }
}
