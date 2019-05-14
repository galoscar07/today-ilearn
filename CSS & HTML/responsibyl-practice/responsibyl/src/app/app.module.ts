import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SearchModule} from '@rodeapps/search';
import {NegativeCornerBoxModule} from '@rodeapps/negative-corner-box';


import { AppComponent } from './app.component';
import {HeaderModule} from '@rodeapps/responsibyl-header';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SearchModule,
    NegativeCornerBoxModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
