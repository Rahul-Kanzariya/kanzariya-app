import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([{path:"",component:DashboardComponent}])
  ],
  providers: [],
})
export class DashboardModule { }
