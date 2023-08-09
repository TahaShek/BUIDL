import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {


  private componentData: { title: string, routerLink?: string, src?: string }[] = [
    { title: 'Dashboard', routerLink: 'items/dashboard' }
  ];
  private componentDataSubject = new BehaviorSubject<{ title: string, routerLink?: string, src?: string }[]>(this.componentData);


  constructor(private router: Router) {
    const defaultRouterLink = this.componentData.find(item => item.title === 'Dashboard')?.routerLink || '';
    this.router.navigate([defaultRouterLink]);
  }

  getComponentData(): Observable<{ title: string, routerLink?: string, src?: string }[]> {
    return new BehaviorSubject(this.componentData); // Wrap the componentData in a BehaviorSubject and return it
  }

  pushToComponentData(data: { title: string, routerLink?: string, src?: string }[]): void {
    this.componentData.push(...data);
    this.componentDataSubject.next(this.componentData); //
  }

  removeComponentData(index: number): void {
    this.componentData.splice(index, 1);
    this.componentDataSubject.next(this.componentData); // Notify subscribers of the change
  }
}
