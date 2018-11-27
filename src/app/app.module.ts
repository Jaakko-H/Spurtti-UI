import { MatGridListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';

import { ROUTES } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
