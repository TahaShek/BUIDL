import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';
import { AuthorizedGuard, UnAuthorizationGuard } from './core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    // canLoad: [UnAuthorizationGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    // canLoad: [AuthorizedGuard],
    children: [
      {
        path: 'items',
        loadChildren: () =>
          import('./modules/items/items.module').then((m) => m.ItemsModule),
      },
      {
        path: 'purchase',
        loadChildren: () =>
          import('./modules/purchase/purchase.module').then((m) => m.PurchaseModule),      }
    ],
  },

];

const _config: ExtraOptions = {
  useHash: false,
  initialNavigation: 'enabledNonBlocking',
};

@NgModule({
  imports: [RouterModule.forRoot(routes,_config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
