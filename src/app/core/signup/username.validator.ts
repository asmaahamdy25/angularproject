import { AbstractControl } from '@angular/forms';

export  function  UsernameValidators  (control: AbstractControl ) {
  if ( control.value &&  control.value.Length > 0) {
    console.log('in');
  if ( (control.value as string).indexOf(' ') >= 0 ) {
  return { namecontainspace : true};
 }
}
 return null;
}
