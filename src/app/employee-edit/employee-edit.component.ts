import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { PositionAndOfficeService } from '../service/position-and-office.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  positions:any;
  offices:any;
  employee:any;
  id:number;

  constructor(
    private positionAndOfficeService: PositionAndOfficeService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router:Router
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
    this.id = +this.route.snapshot.paramMap.get("id");
    this.employeeService.getEmployeeById(this.id).subscribe(employee =>{
      this.employee = employee.data;
      console.log(this.employee);
    })
  }

  submit(form:any){
    this.employeeService.putEmployeeById(this.id,form.value).subscribe(()=>{
      console.log("Success"),() =>{
        console.log("Failed")
      }
    });
    this.router.navigate(['/']);
    console.log(form.value);
  }
}
