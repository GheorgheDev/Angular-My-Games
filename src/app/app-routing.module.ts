import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormLoginComponent } from './form-login/pages/form-login/form-login.component';
import { MainPageComponent } from './main-page/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: FormLoginComponent },
  { path: 'home', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
