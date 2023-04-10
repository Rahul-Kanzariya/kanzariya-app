import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

const dashboardRoutes = [
  {
    path : '',
    children : [
      {
        path :'',
        component : DashboardComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [],
})
export class DashboardModule { }
