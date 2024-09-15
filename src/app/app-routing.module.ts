import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiformsComponent } from './multiforms/multiforms.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',component:AppComponent,
   
  },
  {
    path:'multiform',component:MultiformsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
