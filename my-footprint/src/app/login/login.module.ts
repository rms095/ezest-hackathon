import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {RouterModule} from "@angular/router";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginScreenComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class LoginModule { }
