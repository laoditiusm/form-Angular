import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-rd-login',
  templateUrl: './rd-login.component.html',
  styleUrls: ['./rd-login.component.css'],
})
export class RdLoginComponent implements OnInit {
  registerForm: FormGroup | any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      gender: new FormControl('male'),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  onFormSubmit() {
    console.log(this.registerForm.get('email').errors);
  }
}
