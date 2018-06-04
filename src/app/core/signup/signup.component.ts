import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import {  PasswordValidation } from './password.validators';
import { UsernameValidators } from './username.validator';
import { User } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  genders = ['Male', 'Female'];
  public user: User;
  signupForm = new FormGroup({});

  ngOnInit() {
    this.signupForm = new FormGroup({
        firstName: new FormControl(null, [Validators.required]),
        lastName : new FormControl(null, [Validators.required]),
      password: new FormGroup({
        pwd : new FormControl(null, [Validators.required, Validators.minLength(8)]),
        pwd_confirm: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      }, { validators: PasswordValidation.MatchPassword}),
      email: new FormControl(null, [Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      gender: new FormControl('male'),
      ssn: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      address: new FormControl(null , Validators.required),
      dateOfBirth: new FormControl(null),
      term : new FormControl(null, Validators.requiredTrue)
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
  get confpassword () {
    return this.signupForm.get('password.pwd_confirm');
  }
  get email () {
    return this.signupForm.get('email');
  }
  get serialNumber() {
    return this.signupForm.get('ssn');
  }
  get address () {
    return this.signupForm.get('address');
  }
  get term () {
    return this.signupForm.get('term');
  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.user = this.signupForm.value;
      console.log(this.user); }
  }
}
