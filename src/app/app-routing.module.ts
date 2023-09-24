import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { ListStudentComponent } from './component/list-student/ListStudentComponent';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ShowComponent } from './component/show/show.component';


const routes: Routes = [
  {path:'', component:ListStudentComponent},
  {path:'AddStudent', component:AddStudentComponent},
  {path:'EditRecord/:id', component:EditStudentComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Show/:id', component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
