import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  getBreadcrumbs(): string[] {
    const breadcrumbs: string[] = [];
    let currentRoute = this.activatedRoute.root;

    while (currentRoute) {
      const breadcrumbLabel = this.getRouteBreadcrumbLabel(currentRoute);
      if (breadcrumbLabel) {
        breadcrumbs.push(breadcrumbLabel);
      }

      currentRoute = currentRoute.children.find(route => route.outlet === 'primary')!;
    }

    return breadcrumbs;
  }

  private getRouteBreadcrumbLabel(route: ActivatedRoute): string | null {
    const snapshot = route.snapshot;

    // Check if the breadcrumb is explicitly set in the route data
    if (snapshot.data && snapshot.data['breadcrumb']) {
      return snapshot.data['breadcrumb'];
    }

    // If breadcrumb is not set, use the last URL segment as the label
    const urlSegments = snapshot.url;
    if (urlSegments.length > 0) {
      return urlSegments[urlSegments.length - 1].path;
    }

    return null;
  }
}
