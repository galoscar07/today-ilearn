import {EventEmitter} from '@angular/core';

export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor() { }
  noOfChanges: number = 0;
  noOfChangesEmitter = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countAndEmitNoOfChanges();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countAndEmitNoOfChanges();
  }

  countAndEmitNoOfChanges() {
    this.noOfChanges ++;
    this.noOfChangesEmitter.emit(this.noOfChanges);
  }
}
