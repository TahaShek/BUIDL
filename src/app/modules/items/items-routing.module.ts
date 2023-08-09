import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent
  // }

  {
    path: 'dashboard',
    component: DashboardComponent,

  },

  {
    path:'check',
    component:ItemCreationComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
 }
