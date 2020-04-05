import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inactiveUsers: string[] = [];
  activeUsers: string[] = [];
  constructor(private userService: UsersService) {
    this.userService.noOfChangesEmitter.subscribe(
      (noOfChanges: number) => console.log('The number of changes is: ', noOfChanges)
    )
  }

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeUsers = this.userService.activeUsers;
  }
}
