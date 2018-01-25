import { FormControl } from '@angular/forms'; 

//validation example
//영문 및 숫자와 _-. @ 동일 . 2~5개의 영문조합.
//dkfj29jfm_dki-k.kj@29jd.com

export class EmailValidator {
    static isValid(control: FormControl){
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ .test(control.value);
        if (re){ 
            return null;
        }
        return { "invalidEmail": true};
    }
}


