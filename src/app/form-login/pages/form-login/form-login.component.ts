import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  hasError: boolean = false;
  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.hasError = true;
      return;
    }

    const { email, password } = this.loginForm.value;

    this.loginService.checkUserExists(email, password)
      .subscribe(data => {
        if (data.length > 0) {
          const { id } = data[0];
          localStorage.setItem('userId', JSON.stringify(id));
          this.router.navigate(['home']);
        } else {
          this.hasError = true;
        }
      })
  }
}
