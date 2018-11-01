import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HowtoComponent} from './howto/howto.component';
import {AboutComponent} from './about/about.component';
import {AdvantagesComponent} from './advantages/advantages.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'how-to', component: HowtoComponent },
  { path: 'advantages', component: AdvantagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
