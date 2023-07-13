import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Global } from "../enums";
import { storage } from "../utils";
import { BaseService } from "src/app/services/api";
import { ConsoleService } from "src/app/services/global";
import { ToastrService } from "ngx-toastr";
import { ConfirmationService } from "primeng/api";
import { BehaviorSubject } from "rxjs";

@Injectable()
export abstract class BaseComponent {

  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem(Global.StorageKey));

  data: any;
  isUpdate: boolean = false;

  protected _router = this.injector.get(Router);
  protected _http = this.injector.get(BaseService);
  protected _toast = this.injector.get(ToastrService);
  protected _console = this.injector.get(ConsoleService);
  protected _confirmDialog = this.injector.get(ConfirmationService);

  constructor(protected injector: Injector) {
  }

  protected get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }


protected get CurrentUserId(): any {
  const storageValue = localStorage.getItem(Global.StorageKey);
  const user = storageValue ? JSON.parse(storageValue).user : null;
  return user;
}


protected get CurrentClientId(): any {
  const storageValue = localStorage.getItem(Global.StorageKey);
  const clientId = storageValue ? JSON.parse(storageValue).clientId : null;
  return clientId;
}

// protected get CurrentUserId():any{
//   return JSON.parse(localStorage.getItem(Global.StorageKey))?.user
// }
// ​
protected get CurrentTenentId(): any {
  const storageValue = localStorage.getItem(Global.StorageKey);
  const tenent = storageValue ? JSON.parse(storageValue).tenent : null;
  return tenent;
}

  // protected get CurrentTenentId(): any {
  //   return JSON.parse(localStorage.getItem(Global.StorageKey)).tenent;
  // }

//   protected get CurrentUserEmail(): any {
//     return JSON.parse(localStorage.getItem(Global.StorageKey)).emailAddress;
//   }

//   protected get CurrentUserFullName(): any {
//     return JSON.parse(localStorage.getItem(Global.StorageKey)).fullName;
//   }
​
  protected get GetStorage() {
    return storage;
  }
​
  protected get TimeStamp(): number {
    return new Date().getTime();
  }

}
