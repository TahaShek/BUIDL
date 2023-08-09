import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/components/prime.module';
import { ComponentsModule } from 'src/app/components/component.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,FormsModule,
    PrimeModule,
    ComponentsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

  ]
})
export class AuthModule { }
