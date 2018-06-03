import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       const password = AC.get('pwd').value;
       const confirmPassword = AC.get('pwd_confirm').value;
        if (password !== confirmPassword) {
            AC.get('pwd_confirm').setErrors( {MatchPassword: true} );
        } else {
            return null;
        }
    }
}
