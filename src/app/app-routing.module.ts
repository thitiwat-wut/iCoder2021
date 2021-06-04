import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { QueryStudentComponent } from './query-student/query-student.component';

const routes: Routes = [
  {path:'add', component:AddStudentComponent},
  {path:'edit',component:EditStudentComponent},
  {path:'query', component:QueryStudentComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
