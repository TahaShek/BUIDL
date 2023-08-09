import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from './theme/theme.module';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from './components/component.module';
import { BreadcrumbService } from './services/global/breadcrumb.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),

  ],
  providers: [HttpParams,BreadcrumbService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
