import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/user.model';
import {AuthService} from '../auth/auth.service';
import {ApiService} from '../shared/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;
  errors = { username: false, email: false, password: false};
  errorMessages = { username: '', email: '', password: '', };

  constructor(private userData: User,
              private authService: AuthService,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.settingsForm = new FormGroup({
      profile_picture: new FormControl(this.userData.image, [Validators.required]),
      name: new FormControl(this.userData.username, [Validators.required]),
      bio: new FormControl(this.userData.bio, [Validators.required]),
      email: new FormControl(this.userData.email, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmitSettingsForm() {
    const image = this.settingsForm.value.profile_picture;
    const username = this.settingsForm.value.name;
    const bio = this.settingsForm.value.bio;
    const email = this.settingsForm.value.email;
    const password = this.settingsForm.value.password;
    this.apiService.postUpdateUser(image, username, bio, email, password).subscribe(
      (response: any) => {
        this.userData.rememberUser(response.user);
        this.authService.rememberUser(response.user.token);
        this.router.navigate(['/@' + response.user.username]);
      },
      (error1 => {
        this.errors.username = false;
        this.errors.password = false;
        this.errors.email = false;
        if (error1.error.errors.hasOwnProperty('password')) {
          this.errors.password = true;
          this.errorMessages.password = error1.error.errors.password;
        }
        if (error1.error.errors.hasOwnProperty('username')) {
          this.errors.username = true;
          this.errorMessages.username = error1.error.errors.username;
        }
        if (error1.error.errors.hasOwnProperty('email')) {
          this.errors.email = true;
          this.errorMessages.email = error1.error.errors.email;
        }
      })
    );
  }

  onClickLogOut() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
