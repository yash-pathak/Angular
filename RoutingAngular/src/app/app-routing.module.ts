import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './Departments/department/department.component';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { DepartmentDetailsComponent } from './Departments/department-details/department-details.component';


const routes: Routes = [{path:'',redirectTo:'/departments',pathMatch:'full'},{path:'departments',component:DepartmentComponent},
 {path:'departments/:deptId',component:DepartmentDetailsComponent},
 {path:'employees',component:EmployeeComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
export const routingComponent=[DepartmentComponent,EmployeeComponent,DepartmentDetailsComponent];
