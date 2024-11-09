import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'home/:id',component:HomepageComponent},
  {path:'',component:UserloginComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
