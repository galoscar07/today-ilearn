import {Injectable} from '@angular/core';
import {User} from '../shared/user.model';

@Injectable()
export class AuthService {

  constructor() {}
  token: string = null;
  user: User = null;

  logoutUser() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isUserAuthenticated() {
    if (this.token === null) {
      const copyToken = localStorage.getItem('authToken');
      if (copyToken !== null) {
        return true;
      }
    } else {
      return true;
    }
    return false;
  }

  rememberUser(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  getCurrentToken() {
    this.token = localStorage.getItem('authToken');
    return this.token;
  }
}
