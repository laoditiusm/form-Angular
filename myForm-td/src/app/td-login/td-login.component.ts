import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-td-login',
  templateUrl: './td-login.component.html',
  styleUrls: ['./td-login.component.css'],
})
export class TdLoginComponent {
  @ViewChild('f') registerForm: NgForm | undefined;
  defaultGender = 'male';

  onFormSubmit() {
    console.log(this.registerForm);
  }
}
