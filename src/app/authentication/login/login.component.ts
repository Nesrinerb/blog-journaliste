import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _fb: FormBuilder,
    private authService: AuthenticationService,
    private _router: Router
  ) {}

  loginForm = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login() {
    this.authService.getUserData().subscribe(
      (data) => {
        const found = data.find(
          (user: any) =>
            user.email == this.loginForm.value.email &&
            user.password == this.loginForm.value.password
        );
        if (found) {
          localStorage.setItem('statut', 'connected');
          this._router.navigate(['article/list-article']);
        } else alert('please verify your email & password');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
