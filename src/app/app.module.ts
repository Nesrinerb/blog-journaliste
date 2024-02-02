import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
