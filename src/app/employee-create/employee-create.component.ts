import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { PositionAndOfficeService } from '../service/position-and-office.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  positions:any;
  offices:any;


  constructor(
    private positionAndOfficeService: PositionAndOfficeService,
    private employeeService: EmployeeService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.positionAndOfficeService.getAllPosition().subscribe(positions =>{
      this.positions = positions.data;
    })

    this.positionAndOfficeService.getAllOffice().subscribe( offices =>{
      this.offices = offices.data;
    })
  }

  submit(form:any){
    this.employeeService.addEmployee(form.value).subscribe(()=>{
      console.log("Success"),() =>{
        console.log("Failed")
      }
    });
    this.route.navigate(['/']);
    console.log(form.value);
  }
}
