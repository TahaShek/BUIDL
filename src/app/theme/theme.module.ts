import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule,Routes } from '@angular/router';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
  ],
  exports: [
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class ThemeModule { }
