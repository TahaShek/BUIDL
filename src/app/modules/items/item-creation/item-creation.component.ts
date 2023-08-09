import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {
  Tab,Select,

  initTE,
} from "tw-elements";


@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.scss']
})
export class ItemCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initTE({ Select });
    initTE({ Tab, });

    // this.loadUsers();
  }

  // loadUsers() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any)=> {
  //    this.usersList = result;
  //   })
  // }




}
