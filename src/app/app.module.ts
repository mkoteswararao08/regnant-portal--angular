import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ LayOutComponent } from './layout/layout.component';
import { HeaderComponent } from "./header/header.component";
import{ NavBarComponent } from './navbar/navbar.component';
import { HomeBodyComponent } from "./home-body/home-body.component";
import { HRLoginComponent } from './hr-login/hr-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import {HRHomeBodyComponent} from './hr-home-body/hr-home-body.component';
import {HRNavBarComponent } from './hr-navbar/hr-navbar.component';
 
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,NavBarComponent,HomeBodyComponent,HRLoginComponent,LayOutComponent,
    EmployeeLoginComponent,HRHomeBodyComponent,HRNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
