import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { EmployeeService } from '../../Services/employee.service'
import { departments } from 'src/app/classes/departments';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  dataSource =  new MatTableDataSource<departments>();
  displayedColumns: string[] = ['id',  'department'];
  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.listalldepartments();
  }

  listalldepartments(){
    this.employeeService.GetDepartments().subscribe(
      (state :any ) => {
        this.dataSource = state;
       
      }
     );
  }
}
