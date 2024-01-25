import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AuthModule } from './Auth/auth/auth.module';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[SharedModule]
})
export class AppModule { }
