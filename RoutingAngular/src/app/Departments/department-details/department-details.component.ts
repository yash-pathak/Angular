import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activeRouteObj:ActivatedRoute) { }
  departmentId:any;

  ngOnInit() {
    let id=parseInt(this.activeRouteObj.snapshot.paramMap.get('deptId'));
    this.departmentId=id;
  }

}
