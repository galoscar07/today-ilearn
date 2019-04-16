import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formError = false;

  constructor(private apiService: ApiService,
              private router: Router,
              private authService: AuthService,
              private userData: User) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const user = {
      'user': {
        'email': form.value.email,
        'password': form.value.password,
      }
    };
    this.apiService.postLogInUser(user).subscribe(
      (response: any) => {
        console.log(response);
        this.authService.rememberUser(response.user.token);
        this.userData.rememberUser(response.user);
        this.formError = false;
        this.router.navigate(['/']);
        console.log(this.userData);
      },
      (error => {
        console.log(error);
        this.formError = true;
      })
    );

  }

}
