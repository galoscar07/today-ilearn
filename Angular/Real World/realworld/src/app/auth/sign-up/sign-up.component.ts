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
        if (error.error.errors.hasOwnProperty('email')) {
          this.emailError = true;
        }
        if (error.error.errors.hasOwnProperty('username')) {
          this.usernameError = true;
        }
        if (error.error.errors.hasOwnProperty('password')) {
          this.passwordError = true;
        }
      })
    );
  }
}
