import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BasictableComponent } from './basictable/basictable.component';
import { BlankComponent } from './blank/blank.component';
import { Error404Component } from './error404/error404.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MapgoogleComponent } from './mapgoogle/mapgoogle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    BasictableComponent,
    BlankComponent,
    Error404Component,
    FontawesomeComponent,
    MapgoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
