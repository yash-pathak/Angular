import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = 'YashPathak';

 isDisable=true;



  cityList:any[]=[
  {
    "city":"Delhi",
    "Employee":[
      {"employeeId":"101",
    "employeeName":"Yash",},
    {"employeeId":"102",
  "employeeName":"Himanshu",}
    ]},
    {"city":"Mumbai",
    "Employee":[{"employeeId":"103","employeeName":"Vikram"},{"employeeId":"103","employeeName":"Harmeet",}]},
  
  ];

  filterCriteria:any='';
  employeeArr:any=[
    {
      'employeeName':'Yash Pathak',
      'employeeDesc':'GET',
      'employeeSalary':1234,
      'gender':'Male',
      'employeeDOJ':new Date(2019,4,20),
      'employeeAppraisal':1.3495
      },
      {
        'employeeName':'HIMANSHU',
        'employeeDesc':'GET',
        'employeeSalary':2345,
        'gender':'Male',
        'employeeDOJ':new Date(2013,6,10),
        'employeeAppraisal':1.3495
        },
        {
          'employeeName':'harmeet',
          'employeeDesc':'GET',
          'employeeSalary':1234,
          'gender':'Male',
          'employeeDOJ':new Date(2013,6,10),
          'employeeAppraisal':1.3495
          },
          {
            'employeeName':'Alia Bhatt',
            'employeeDesc':'GET',
            'employeeSalary':1234,
            'gender':'Female',
            'employeeDOJ':new Date(2019,4,20),
            'employeeAppraisal':1.3495
            }
  ];



  

  username:string='';
  isValid=true;
  firstnumber:number;
  secondnumber:number;


  constructor() { }
  counter=0;
  arr: any=[];
  changeValue(inp)
  {
   
    if(inp==true)
    {this.isValid = false;
    }else{this.isValid=true;}
    this.counter++;
    this.arr.push(this.counter);
  }

  ngOnInit() {
  }

  setUserNameToBlank(){
    this.username='';
  }
  isDisabled():boolean{
    if(this.username==''){
      return true;
    }
    else {
      return false;
    }
  }

}
