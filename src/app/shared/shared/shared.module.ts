import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../../header/header.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports:[HeaderComponent,MaterialModule]
})
export class SharedModule { }
