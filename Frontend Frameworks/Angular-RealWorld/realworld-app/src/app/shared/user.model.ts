import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class User {
  public bio: string;
  public createdAt: string;
  public email: string;
  public id: number;
  public image: string;
  public updatedAt: string;
  public username: string;

  constructor() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      this.bio = userData.bio;
      this.createdAt = userData.createdAt;
      this.email = userData.email;
      this.id = userData.id;
      this.image = userData.image;
      this.updatedAt = userData.updatedAt;
      this.username = userData.username;
    } else {
      this.bio = '';
      this.createdAt = '';
      this.email = '';
      this.id = 0;
      this.image = '';
      this.updatedAt = '';
      this.username = '';
    }
  }

  rememberUser(userData: any) {
    this.bio = userData.bio;
    this.createdAt = userData.createdAt;
    this.email = userData.email;
    this.id = userData.id;
    this.image = userData.image;
    this.updatedAt = userData.updatedAt;
    this.username = userData.username;
    localStorage.setItem('user', JSON.stringify(userData));
  }

}
