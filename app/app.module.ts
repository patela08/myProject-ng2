import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent}  from './app.component';
import {ChildBody} from "./app.childbody";
import {ChildMessage} from "./app.childmessage";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ChildBody,
    ChildMessage
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
