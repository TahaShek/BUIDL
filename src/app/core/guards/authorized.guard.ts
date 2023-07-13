import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {

  constructor(private _router: Router, private _auth: AuthService) {}

  canLoad(_: Route, segments: UrlSegment[]): boolean {
    const isLoggedIn = this._auth.isLoggedIn;
    if (isLoggedIn) {
      return true;
    }
    const callbackURL = segments.map((s) => s.path).join('/');
    this._router.navigate(['/auth/login'], { queryParams: { callbackURL } });
    return false;
  }
}
