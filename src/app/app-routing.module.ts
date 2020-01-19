import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaysComponent } from './days/days.component';


const routes: Routes = [
  { path: '', component: DaysComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
