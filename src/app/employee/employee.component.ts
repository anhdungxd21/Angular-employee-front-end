import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees:any;
  page:number = 0;
  size:number = 10;
  totalPage = 0;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.employeeService.getAll(this.page,this.size).subscribe(value =>{
      this.employees = value.data.content;
      this.totalPage = value.data.totalPages;
    });
  }
  /**  */
  previousButton(){
    this.page--;
    this.getAll();
  }
  nextButton(){
    this.page++;
    this.getAll();
  }

  searchByName(name:string){
    this.employeeService.getEmployeeByName(name).subscribe(value =>{
      this.employees = value.data.content;
    });
    console.log(this.employees);
  }
}
