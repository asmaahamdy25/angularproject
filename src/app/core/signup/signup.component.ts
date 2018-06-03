import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FullnameValidators } from './fullName.validators';

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
        firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        lastName : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormGroup({
        pwd : new FormControl(null, [Validators.required, Validators.minLength(8)]),
        pwd_confirm: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      }),
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
  get pasword() {
    return this.signupForm.get('password.pwd');
  }
  get conpassword () {
    return this.signupForm.get('password.pwd_confirm');
  }
  get email () {
    return this.signupForm.get('email');
  }
}
