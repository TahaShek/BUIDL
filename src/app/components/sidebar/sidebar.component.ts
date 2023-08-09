import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ComponentDataService } from 'src/app/services/global/component-data.service';

interface Menu {
  title: string;
  src: string;
  gap?: boolean;
  routerlink?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // animations: [
  //   trigger('submenuAnimation', [
  //     state('in', style({ height: '*', opacity: 1 })),
  //     state('out', style({ height: '0', opacity: 0 })),
  //     transition('in <=> out', animate('0.3s ease')),
  //   ]),
  //   trigger('openSubmenuAnimation', [
  //     transition(':enter', [
  //       style({ height: '0', opacity: 0 }),
  //       animate('0.3s ease', style({ height: '*', opacity: 1 }))
  //     ]),
  //   ])
  // ]
})
export class SidebarComponent implements OnInit {
  @Output() componentName = new EventEmitter<any>();
  open = false;
  menus: Menu[] = [
    {
      title: 'Dashboard',
      src: 'bx bx-line-chart',
      routerlink: 'items/dashboard',
    },
    { title: 'Inbox', src: 'bx bx-envelope', routerlink: 'items/check' },
    { title: 'Schedule', src: 'bx bx-calendar' },
    { title: 'Search', src: 'bx bx-search' },
    { title: 'Analytics', src: 'bx bx-bar-chart' },
    { title: 'Analytics', src: 'bx bx-bar-chart-alt' }
    // {
    //   title: 'Files',
    //   src: 'pi pi-folder',
    //   gap: true,
    // },
  ];

  constructor(private communicationService: ComponentDataService) {}

  ngOnInit(): void {}

  // sendTilte(value:any){
  // //  this.componentName.emit({ title: value.title, routerLink: value.routerlink });

  sendTitle(value: any) {
    const data = [
      { title: value.title, routerLink: value.routerlink, src: value.src },
    ];

    this.communicationService.pushToComponentData(data);
    console.log(data);
  }



  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.open = true;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.open = false;
  }
}
