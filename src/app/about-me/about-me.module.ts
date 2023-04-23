import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me.component';

const AboutMeRoutes = [
  {
    path : '',
    children : [
      {
        path :'about-me',
        component : AboutMeComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(AboutMeRoutes)
  ],
  providers: [],
})
export class AboutMeModule { }
