import { FormControl } from '@angular/forms'; 

//validation example
//010-xxxx-xxxx
//(011|011|016|017|018|019)-xxxx-xxx
//(011|011|016|017|018|019)-xxx-xxx

export class PhoneValidator {
    static isValid(control: FormControl){
        const re = /^(?:(010-\d{4})|(01[1|6|7|8|9]\s-\d{3,4}))\s-(\d{4})$/ .test(control.value);
        if (re){ 
            return null;
        }
        return { "invalid Phone Number": true};
    }
}


