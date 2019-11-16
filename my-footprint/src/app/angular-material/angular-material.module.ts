import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNavList,
  MatSidenavModule,
  MatChipsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatBadgeModule,
  MatProgressBarModule,
  MatStepperModule,
  MatTableModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatChipsModule,
    MatStepperModule,
    MatTableModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatChipsModule,
    MatStepperModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
