import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
import { PageErrorComponent } from '../page-error/page-error.component';
const routes:Routes=[
  {path:"profile",component:ProfileComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/profile",pathMatch:"full"},
  {path:'**',component:PageErrorComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
