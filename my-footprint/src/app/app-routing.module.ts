import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from "./login/login-screen/login-screen.component";
import {ForgotPasswordComponent} from "./login/forgot-password/forgot-password.component";
import {Co2DashboardComponent} from "./co2-dashboard/co2-dashboard.component";
import {StatusBoxComponent} from "./co2-dashboard/co2-content/status-box/status-box.component";
import {BuySellComponent} from "./co2-dashboard/co2-content/buy-sell/buy-sell.component";
import {OffsetEntriesComponent} from "./co2-dashboard/co2-content/offset-entries/offset-entries.component";
import {UserGuard} from "./guard/user.guard";
import { Co2EmissionsComponent } from './co2-dashboard/co2-content/co2_emissions/co2_emissions.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'myfootprint',
    component: Co2DashboardComponent,
    canActivate: [UserGuard],
    children: [
      { path: 'account-summary', component: StatusBoxComponent, outlet: 'sideoutlet' },
      { path: 'buy-sell', component: BuySellComponent, outlet: 'sideoutlet' },
      { path: 'co2-emissions', component: Co2EmissionsComponent, outlet: 'sideoutlet' },
      { path: 'penalties', component: StatusBoxComponent, outlet: 'sideoutlet' },
      // { path: 'reports', component: StatusBoxComponent, outlet: 'sideoutlet' },
      { path: 'offset-entries', component: OffsetEntriesComponent, outlet: 'sideoutlet' },
      { path: '', component: StatusBoxComponent, outlet: 'sideoutlet' },
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
