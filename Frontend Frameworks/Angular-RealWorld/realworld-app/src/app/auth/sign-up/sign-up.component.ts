import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ApiService} from '../../shared/api.service';
import {Router} from '@angular/router';
import {translateDiagnostics} from '@angular/compiler-cli/src/diagnostics/translate_diagnostics';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usernameError = false;
  passwordError = false;
  emailError = false;

  usernameErrorMessage = '';
  passwordErrorMessage = '';
  emailErrorMessage = '';

  constructor(private apiService: ApiService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const email = form.value.email;
    const user = {
      user: {
        username,
        password,
        email,
      }
    };
    this.apiService.postRegisterUser(user).subscribe(
      (response: any) => {
        this.emailError = false;
        this.passwordError = false;
        this.usernameError = false;
        this.authService.token = response.user.token;
        this.router.navigate(['/']);
      },
      (error => {
        this.emailError = false;
        this.passwordError = false;
        this.usernameError = false;
        console.log(error);
        if (error.error.errors.hasOwnProperty('email')) {
          this.emailError = true;
          this.emailErrorMessage = error.error.errors.email;
        }
        if (error.error.errors.hasOwnProperty('username')) {
          this.usernameError = true;
          this.usernameErrorMessage = error.error.errors.username;
        }
        if (error.error.errors.hasOwnProperty('password')) {
          this.passwordError = true;
          this.passwordErrorMessage = error.error.errors.password;
        }
      })
    );
  }
}
