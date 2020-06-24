import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';import {
  HttpClientJsonpModule,
  HttpClientModule,
} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TumblerApiService } from './tumbler-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [TumblerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
