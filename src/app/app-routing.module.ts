import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'posts', component: SecondPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
