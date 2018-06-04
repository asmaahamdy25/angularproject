import { AbstractControl,  ValidationErrors } from '@angular/forms';

export  function  UsernameValidators  (control: AbstractControl ) {
  if ( control.value && control.value.legnth > 0) {
  if ( (control.value as string).indexOf(' ') >= 0 ) {
  return { Namecannotcontainspace : true};
 }
}
 return null;
}
