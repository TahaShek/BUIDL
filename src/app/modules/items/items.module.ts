import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/component.module';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ItemCreationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ComponentsModule
  ]
})
export class ItemsModule { }
