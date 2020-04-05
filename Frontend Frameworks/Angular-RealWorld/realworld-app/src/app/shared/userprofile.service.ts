import {Injectable} from '@angular/core';

@Injectable()
export class UserProfileService {
  username: string = null;
  bio: string = null;
  image: string = null;
  following: boolean = null;

  rememberUser(userData: any) {
    this.username = userData.username;
    this.bio = userData.bio;
    this.image = userData.image;
    this.following = userData.following;
  }

}
