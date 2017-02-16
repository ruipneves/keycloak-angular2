import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { KeycloakService } from '../services/keycloak.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private kc: KeycloakService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(KeycloakService.auth);
      KeycloakService.init()
      .then(() => {
          return true;
      })
      .catch(() => this.router.navigate(['/']); return true;);
      return false;
    }
}
