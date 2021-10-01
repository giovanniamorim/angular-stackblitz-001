import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
