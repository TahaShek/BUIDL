import { NgModule,OnInit} from '@angular/core';
import { Dropdown, Ripple, initTE } from 'tw-elements';

@NgModule({})
export class TailwindElementsModule implements OnInit {
  ngOnInit() {
    initTE({ Dropdown, Ripple });
  }
}
