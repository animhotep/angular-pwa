import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HowtoComponent} from './howto/howto.component';

const routes: Routes = [
  { path: 'how-to', component: HowtoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
