import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../shared/logging.service';
import {AccountService} from '../shared/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [],
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
              private accountsService: AccountService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string ) => alert('New Status: ' + status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
