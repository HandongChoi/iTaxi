import { FormControl } from '@angular/forms'; 

//validation example
//2xxxxxxx

export class StudentIDValidator {
    static isValid(control: FormControl){
        const re = /^[2]\d{7}$/ .test(control.value);
        if (re){ 
            return null;
        }
        return { "invalid Studnet ID": true};
    }
}


