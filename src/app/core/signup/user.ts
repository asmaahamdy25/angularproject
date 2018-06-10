export class User {
  firstName: string;
  lastName: string;
  password: {
    pwd: string;
    pwd_confirm: string;
  };
  email: string;
  gender: string;
  ssn: Number;
  address: string;
  dateofbirth: Date;
  terms: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
}

}
