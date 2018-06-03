import { AbstractControl,  ValidationErrors } from '@angular/forms';

export class FullnameValidators {
static cannotContainSpace (control: AbstractControl ): ValidationErrors | null {
 if ( (control.value as string).indexOf(' ') !== -1) {
  return {cannotContainSpace : true};
 }
 return null;
}
}
