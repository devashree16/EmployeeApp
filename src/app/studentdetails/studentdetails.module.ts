import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';



@NgModule({
  declarations: [
    ListStudentComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ListStudentComponent
  ]
})
export class StudentdetailsModule { }
