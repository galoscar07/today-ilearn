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
    console.log(localStorage.getItem('user'));
    const userData = JSON.parse(localStorage.getItem('user'));
    this.bio = userData.bio;
    this.createdAt = userData.createdAt;
    this.email = userData.email;
    this.id = userData.id;
    this.image = userData.image;
    this.updatedAt = userData.updatedAt;
    this.username = userData.username;
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
