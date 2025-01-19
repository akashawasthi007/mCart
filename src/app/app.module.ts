import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { NestedComponent1Component } from './nested-component1/nested-component1.component';
import { NestedComponent2Component } from './nested-component2/nested-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    NestedComponent1Component,
    NestedComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
