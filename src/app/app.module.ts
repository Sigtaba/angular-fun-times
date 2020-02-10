import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeData } from './employee-data';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(EmployeeData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
