import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {ApiService} from '../shared/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {UserProfileService} from '../shared/userprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;

  constructor(private userData: User,
              private apiService: ApiService,
              private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute,
              private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username').replace('@', '');
    this.apiService.getProfile(this.username).subscribe(
        (response: any) => {
          console.log(response);
          this.userProfileService.rememberUser(response.profile);
        },
        error1 => {
          console.log(error1);
        }
        );
  }

  settingButtonClicked() {
    this.router.navigate(['/settings']);
  }

  followUser(type: string) {
    if (type === 'follow') {
      this.apiService.postFollowProfile(this.userProfileService.username, this.userData.email).subscribe(
        (response: any) => {
          this.userProfileService.bio = response.profile.bio;
          this.userProfileService.following = response.profile.following;
          this.userProfileService.image = response.profile.image;
          this.userProfileService.username = response.profile.username;
        },
        (error1) => {
          console.log(error1);
        }
      );
    } else {
      this.apiService.delUnfollowProfile(this.userProfileService.username).subscribe(
        (response: any) => {
          this.userProfileService.bio = response.profile.bio;
          this.userProfileService.following = response.profile.following;
          this.userProfileService.image = response.profile.image;
          this.userProfileService.username = response.profile.username;
        },
        (error1) => {
          console.log(error1);
        }
      );
    }
  }

}
