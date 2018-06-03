import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import {  PasswordValidation } from './password.validators';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupForm = new FormGroup({});

  ngOnInit() {
    this.signupForm = new FormGroup({
        firstName: new FormControl(null, [Validators.required, UsernameValidators]),
        lastName : new FormControl(null, [Validators.required, UsernameValidators]),
      password: new FormGroup({
        pwd : new FormControl(null, [Validators.required, Validators.minLength(8)]),
        pwd_confirm: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      },  PasswordValidation.MatchPassword),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'ssn': new FormControl(null, [Validators.required, Validators.minLength(16)]),
      'address': new FormControl(null),
      'dateOfBirth': new FormControl(null),
    });
  }
  get firstname () {
  return  this.signupForm.get('firstName');
  }
  get lastname() {
    return this.signupForm.get('lastName');
  }
  get password() {
    return this.signupForm.get('password.pwd');
  }
  get conpassword () {
    return this.signupForm.get('password.pwd_confirm');
  }
  get email () {
    return this.signupForm.get('email');
  }
  get serialNumber() {
    return this.signupForm.get('ssn');
  }
}
