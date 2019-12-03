import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { GenderPipe } from './gender.pipe';
import { UltaPipe } from './ulta.pipe';
import { FilterxPipe } from './filterx.pipe';
import { MultiplyPipe } from './multiply.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    GenderPipe,
    UltaPipe,
    FilterxPipe,
    MultiplyPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
