
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ListStudentComponent} from './studentdetails/list-student/list-student.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';

const routes: Routes = [
  {path : '' , component :ListStudentComponent },
  {path : 'students' , component :EmployeedetailsComponent },
  {path : 'departments' , component : DepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
