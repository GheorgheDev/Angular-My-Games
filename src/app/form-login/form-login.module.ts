import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormLoginRoutingModule } from './form-login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormLoginComponent } from './pages/form-login/form-login.component';

@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    FormLoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormLoginComponent
  ]
})
export class FormLoginModule { }
