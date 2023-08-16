import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComponentDataService } from 'src/app/services/global/component-data.service';
interface TabData {
  title: string;
  routerLink?: string;
  bookmarked: boolean;
  icons?: string;
}
interface Menu {
  label: string;
  routerLink?: string;
  bookmarked?: boolean;
  action?: (item: TabData) => void;
}

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {
  activeTab: string = '';
  componentData: any;
  @ViewChild('menuTrigger') menuTrigger!: any;
  activeRouterLink: any;
  items!: Menu | any;
  constructor(
    private communicationService: ComponentDataService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    // this.activeTab = 'Dashboard';
    this.communicationService.getComponentData().subscribe((data: any) => {
      this.componentData = data;
    });
    // if (this.componentData.length > 0) {
    // //   const lastObject = this.componentData[this.componentData.length - 1];
    // //   const lastObjectTitle = lastObject.title;
    // //  this.activeTab=lastObjectTitle

    // //   // Now you have the title of the last object in the variable lastObjectTitle
    // // }
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
    console.log(this.activeTab);
  }
  closeTab(index: number): void {
    if (index >= 0 && index < this.componentData.length) {
      this.componentData.splice(index, 1); //
      const previousTabIndex = Math.max(index - 1, 0);
      const previousTab = this.componentData[previousTabIndex];
      if (previousTab) {
        this.router.navigateByUrl(previousTab.routerLink || '');
      } else {
        this.router.navigateByUrl('/');
      }
    }
    console.log(this.items);
  }
  updateBookmarkMenu(): void {
    this.items = this.componentData
      .filter((tab: { bookmarked: any }) => tab.bookmarked)
      .map((tab: { title: string; routerLink: string; src: string }) => ({
        label: tab.title,
        routerLink: tab.routerLink,
        src: tab.src,
        action: this.sendTitle.bind(this, tab),
      }));
    console.log(this.items);
  }

  toggleBookmark(tab: TabData): void {
    tab.bookmarked = !tab.bookmarked;
    this.updateBookmarkMenu();
  }

  // sendTitle(value: any) {
  //   const newTitle = value.title;
  //   const existingData = this.communicationService
  //     .getComponentData()
  // .find((data: { title: any; }) => data.title === newTitle);

  //   if (existingData) {
  //     this.toast.info(value.title + " " +"already exists")
  //     return;
  //   }

  //   const newData = [{ title: newTitle, routerLink: value.routerLink }];
  //   this.communicationService.pushToComponentData(newData);
  //   this.router.navigate([value.routerLink]);
  //   this.activeTab=value.title
  // }
  sendTitle(value: any) {
    const newTitle = value.title;
    console.log(value.routerLink);

    this.communicationService.getComponentData().subscribe((data) => {
      const existingData = data.find((item) => item.title === newTitle);

      if (existingData) {
        // Title already exists, display a toast or alert
        this.toast.info(value.title + ' ' + 'already exists');
        return;
      }

      const newData = [{ title: newTitle, routerLink: value.routerlink }];
      this.router.navigate([value.routerLink]);
      this.communicationService.pushToComponentData(newData);
    });
  }
}
