import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
//import { DepartmentDetailsComponent } from './Departments/department-details/department-details.component';
//import { EmployeeComponent } from './Employees/employee/employee.component';
//import { DepartmentComponent } from './Departments/department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
