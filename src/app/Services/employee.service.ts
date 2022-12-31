import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from 'src/app/classes/student';
import { apiresponse } from 'src/app/classes/apiresponse';
import { BehaviorSubject,observable,of, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string = 'https://jsonplaceholder.cypress.io/';

  public appbaseUrl : string;
  public deptbaseUrl : string;
 public studentList = new Subject<Student[]>();
 private studentlststate! : any;
  constructor(private http : HttpClient) { 
this.appbaseUrl = environment.baseUrl;
this.deptbaseUrl = environment.deptbaseUrl;

   }

    listallemployees(){
     return this.http.get(this.baseUrl + 'users');
    }

//     public GetStudents(msg:any){
//        this.http.get<apiresponse>(this.appbaseUrl).subscribe((Response) => {
//        this.studentList.next(<Student[]>Response.data);
// });

//       //return this.http.get(this.appbaseUrl + "?city="+ msg);
//     }


public GetStudents():any {
  return this.http.get<apiresponse>(this.appbaseUrl)
}
   
public GetDepartments():any {
  return this.http.get<apiresponse>(this.deptbaseUrl)
}
   
}
