import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  departmentArr:any=[
    {
      'departmentName':'Food',
      'departmentHead':'Yash pathak',
      'departmentId':1
      },
      {
        'departmentName':'Cyber Security',
      'departmentHead':'Vikram',
      'departmentId':'2'
        },
        {
          'departmentName':'Sports',
          'departmentHead':'Harmeet',
          'departmentId':3
          },
          {
            'departmentName':'Bakchodi',
          'departmentHead':'Himanshu',
          'departmentId':4
            }
  ];

  onSelect(dept:any){
    this.router.navigate(['/departments', dept.departmentId])
  }


  constructor(private router:Router) { }



  ngOnInit() {
  }

}
