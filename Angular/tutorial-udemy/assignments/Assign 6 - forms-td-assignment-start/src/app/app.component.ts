import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultDropdownSubscription = 'advanced';
  @ViewChild('form') form: NgForm;

  onSubmit() {
    console.log('The form: ');
    console.log('Email: ' + this.form.value.email);
    console.log('Subscription: ' + this.form.value.subscription);
    console.log('Password: ' + this.form.value.password);
  }
}
