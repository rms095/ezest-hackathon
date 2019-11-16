import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {LoginModule} from "./login/login.module";
import {Co2DashboardModule} from "./co2-dashboard/co2-dashboard.module";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from "ngx-webstorage";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    AppRoutingModule,
    LoginModule,
    Co2DashboardModule,
    NgxChartsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
