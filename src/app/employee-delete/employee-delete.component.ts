import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  employee:any;
  id:number;
  constructor(private employeeService: EmployeeService,
    private activateRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(){
    this.id = +this.activateRoute.snapshot.paramMap.get("id");
    this.employeeService.getEmployeeById(this.id).subscribe(value =>{
      this.employee = value.data;
    });
  }
  delete(){
    this.employeeService.deleteEmployee(this.id).subscribe(()=>{
      console.log("Success"),() =>{
        console.log("Failed")
      }
    });
    this.route.navigate(['/']);
  }
}
