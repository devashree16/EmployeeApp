import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { EmployeeService } from '../../Services/employee.service'
import { Student } from 'src/app/classes/student';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  studentlist : any[] = [];
  studentEditlist : any[] = [];
  public students:any =  new MatTableDataSource<Student>();
  private subscription! : Subscription;
  typname : string = "Kavi";
  listemp : any;
  Editfiled : boolean = false;
  displayedColumns: string[] = ['id', 'name', 'department', 'phone','dob','actions'];
  dataSource =  new MatTableDataSource<Student>();
  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.listallstudents();
   
  }
    
    greet(): void {
      alert(" Hello " + this.typname);
  };

  listallstudents(){
    this.employeeService.GetStudents().subscribe(
      (state :any ) => {
        this.dataSource = state;
        this.studentlist = state;
        sessionStorage.setItem("Allstundents",state)
       // console.log(state);
        //console.log(state + "1");
      }
     );
  }

  Onsave(msg: any){
   
   this.employeeService.GetStudents().subscribe(
    (state :any ) => {
      this.dataSource = state;
      this.studentlist = state;
     // console.log(state);
      //console.log(state + "1");
    }
   );

  
  }

  updateEdit(){
    this.Editfiled= true;
   //this.studentlist;
  
  }
  CancelEdit(){
    this.Editfiled= false;
  }
    

  SaveEdit(id:any){
    console.log(this.studentlist.length + "\\" +  id + "//" );
   
    this.studentlist = this.studentlist.filter((value,key)=>{
      return value.id != id;
    });

   this.dataSource.data = this.studentlist;
   this.dataSource._updateChangeSubscription;
   console.log(this.studentlist.length);
    this.Editfiled= false;
  }
  }


