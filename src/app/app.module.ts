import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {TeraDataCovalentModule} from './tera-data-covalent/tera-data-covalent.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    SortPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    TeraDataCovalentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
