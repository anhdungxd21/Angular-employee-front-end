import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [{
  path: '',
  component: EmployeeComponent
},{
  path: 'create',
  component: EmployeeCreateComponent
},{
  path: 'edit/:id',
  component: EmployeeEditComponent
},{
  path: 'delete/:id',
  component: EmployeeDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
