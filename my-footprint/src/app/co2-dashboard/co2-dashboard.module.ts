import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule} from "../angular-material/angular-material.module";
import { FlexLayoutModule} from "@angular/flex-layout";
import { Co2HeaderComponent } from './co2-header/co2-header.component';
import { Co2FooterComponent } from './co2-footer/co2-footer.component';
import { Co2DashboardComponent} from "./co2-dashboard.component";
import { Co2ContentComponent} from "./co2-content/co2-content.component";
import { StatusBoxComponent } from './co2-content/status-box/status-box.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BuySellComponent } from './co2-content/buy-sell/buy-sell.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { GoogleChartsModule } from 'angular-google-charts';
import { OffsetEntriesComponent } from './co2-content/offset-entries/offset-entries.component';
import { Co2EmissionsComponent } from './co2-content/co2_emissions/co2_emissions.component';

@NgModule({
  declarations: [
    Co2HeaderComponent,
    Co2FooterComponent,
    Co2DashboardComponent,
    Co2ContentComponent,
    StatusBoxComponent,
    BuySellComponent,
    Co2EmissionsComponent,
    OffsetEntriesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    GoogleChartsModule.forRoot()
  ]
})
export class Co2DashboardModule { }
