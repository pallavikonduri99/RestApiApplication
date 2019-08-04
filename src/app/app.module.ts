import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UICompComponent } from './uicomp/uicomp.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateServiceService } from './update-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UICompComponent
    
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports: [
    
    HttpClientModule
  ],
  providers: [HttpClient,UpdateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
