import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeModule } from './prime.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './dropdown/custom-dropdown/custom-dropdown.component';
import { DatatableComponent } from './datatable/datatable.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { RouterModule, Routes } from '@angular/router';
import { InputComponentComponent } from './input-component/input-component.component';
import { ClickOutsideDirective } from '../directive/clickOutside.directive';
import { DataTableFilterPipe } from '../pipes/dataTablefilter.pipe';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { DropdownComponent } from './dropdown/dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    PrimeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  declarations: [
    DataTableFilterPipe,
    NavbarComponent,
    CustomDropdownComponent,
    DatatableComponent,
    SidebarComponent,
    DynamicComponentComponent,
    InputComponentComponent,
    ClickOutsideDirective,
    TabBarComponent,
    MenuPanelComponent,
    DropdownComponent,
  ],

  exports: [
    NavbarComponent,
    CustomDropdownComponent,
    DatatableComponent,
    SidebarComponent,
    DynamicComponentComponent,
    InputComponentComponent,
    TabBarComponent,
    MenuPanelComponent,
    DropdownComponent,
  ],
})
export class ComponentsModule {}
