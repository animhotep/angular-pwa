import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HowtoComponent} from './howto/howto.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'how-to', component: HowtoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
