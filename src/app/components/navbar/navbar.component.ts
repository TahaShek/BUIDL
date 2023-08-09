import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/global/breadcrumb.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'; // Add this import


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  breadcrumbs: string[] = [];

  constructor(
    private breadcrumbsService: BreadcrumbService,
    private router: Router
  ) {}

  ngOnInit() {

    // this.breadcrumbs = this.breadcrumbsService.getBreadcrumbs();

    // this.router.events
    //   .pipe(filter((event: any) => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.breadcrumbs = this.breadcrumbsService.getBreadcrumbs();
    //   });
  }
  showBreadcrumb(): boolean {
    return this.router.url.split('/').length > 2;
  }
  isOpen: boolean = false;


  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  clickedOutside(){
    this.isOpen=false
  }
}
