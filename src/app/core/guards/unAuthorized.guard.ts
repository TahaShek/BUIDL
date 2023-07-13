import { CanActivate, CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class UnAuthorizationGuard implements CanLoad {

  constructor(private _router: Router, private _auth: AuthService) {}

  canLoad(): boolean {
    const isLoggedIn = this._auth.isLoggedIn;
    if (isLoggedIn) {
      this._router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
