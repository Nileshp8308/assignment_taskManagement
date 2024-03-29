import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard.component';
import { TaskFormComponent } from './task-form/task-form.component';
// import {MatInputModule} from "@angular/material/input";
// import {MatCardModule} from "@angular/material/card";
// import {MatRadioModule} from "@angular/material/radio";
// import {MatButtonModule} from "@angular/material/button";
// import {MatTableModule} from "@angular/material/table"
// import {MatPaginatorModule} from "@angular/material/paginator"
// import {MatSortModule} from "@angular/material/sort"
// import {MatDialogModule} from "@angular/material/dialog"
// import {MatSelectModule} from "@angular/material/select"
// import {MatCheckboxModule} from "@angular/material/checkbox";
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import { MatNativeDateModule } from "@angular/material/core";
// import { ReactiveFormsModule } from '@angular/forms';
// import { NgApexchartsModule } from 'ng-apexcharts';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '../shared/material/material.module';
import { HeaderComponent } from '../header/header.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    TasksComponent,
    DashboardComponent,
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // MatInputModule,
    // MatCardModule,
    // MatRadioModule,
    // MatButtonModule,
    // MatTableModule, MatPaginatorModule,
    // MatSortModule,
    // MatDialogModule,
    // MatSelectModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatDividerModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
    // NgApexchartsModule,
    // DragDropModule,
    MaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
