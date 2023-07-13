import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { storage } from '@core/utils';
import { BaseService } from '@services/api';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class  AuthService {
  private isAdmin: boolean = false

  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem('valusoft/session'));

  constructor(private http: BaseService, private router: Router, private toastr: ToastrService) {}

  // jugar for the moment

  setIsAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
    localStorage.setItem('isAdmin', JSON.stringify(this.isAdmin));
  }
  getIsAdmin(): boolean {
    const isAdminStr = localStorage.getItem('isAdmin');
    const isAdmin = isAdminStr ? JSON.parse(isAdminStr) : false;
    return isAdmin;
  }

  removeIsAdmin(): void {
    localStorage.removeItem('isAdmin');
  }



  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  login(): void {
    this.isLoggedIn$.next(true);
  }

  logout(): void {
    storage.removeItem('valusoft/session');
    // this.isLoggedIn$.next(false);
    // this.router.navigate(['auth/login']);
  }

  SendLoginRequest(req: any): void {
    this.http.PostByPromise('tokens', req).then(res => {
      if (res) {
        storage.setItem('valusoft/session', {
          token: res.token,
          refreshToken: res.refreshToken,
          refreshTokenExpiryTime: res.refreshTokenExpiryTime,
          user: res.userId,
          tenent: res.tenentId,
          fullName: res.fullName,
          profileImage: res.profileImage,
          emailAddress: res.emailAddress,
          role: res.role,
          clientName:'',
          clientId:''
        })

       if(res.role==='Client'){
        this.http.GetByPromise('clients/details/' + res.userId).then(response => {
    const session = storage.getItem('valusoft/session');

     storage.setItem('valusoft/session',{
       clientId: response.data.id,
       token: session?.token ||'',
       refreshToken: session?.refreshToken ||'',
       refreshTokenExpiryTime: session?.refreshTokenExpiryTime || new Date() ,
       user: session?.user||'',
       tenent: session?.tenent||'',
       fullName: session?.fullName||'',
       profileImage: session?.profileImage ||'',
       emailAddress: session?.emailAddress||'',
       role:session?.role||'',
       clientName: response.data.clientName,
     })
          console.log(response);

        });
       }
      }
    }).then(() => {
      this.isLoggedIn$.next(true);
      this.router.navigate([storage.getItem('valusoft/session')?.role.toLowerCase(),'dashboard']);
      this.toastr.success('Login Successfully');
    }).catch(err => {
      this.toastr.error(err.error?.messages[0] || "Server Error");
    });
  }
  getRole(): string {
    const session = storage.getItem('valusoft/session');
    return session?.role || '';

}
}
