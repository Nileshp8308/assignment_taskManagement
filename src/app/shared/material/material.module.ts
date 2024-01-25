import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    DragDropModule,
  ],
  exports:[MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    DragDropModule,]
})
export class MaterialModule { }
