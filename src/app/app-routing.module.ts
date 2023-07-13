import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';
import { AuthorizedGuard, UnAuthorizationGuard } from './core/guards';

const routes: Routes = [

  {
    path:'', redirectTo:'auth',pathMatch:'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canLoad: [UnAuthorizationGuard],
  },
  {
    path:'',
    component:LayoutComponent,
    canLoad:[AuthorizedGuard],
    children:[
      {
        path:'items',
        loadChildren:()=>import('./modules/items/items.module').then(
          (m)=>m.ItemsModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
