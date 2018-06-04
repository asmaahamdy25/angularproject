import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(sigunform: AbstractControl) {
       const password = sigunform.get('pwd').value;
       const confirmPassword = sigunform.get('pwd_confirm').value;
        if (password !== confirmPassword) {
        return   {MatchPassword: true} ;
        } else {
            return null;
        }
    }
}
