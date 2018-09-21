import { FormControl } from '@angular/forms'; 

//validation example
//010-xxxx-xxxx
//(011|011|016|017|018|019)-xxxx-xxx
//(011|011|016|017|018|019)-xxx-xxx

export class PhoneValidator {
    static isValid(control: FormControl){
        const re = /^01(?:0|1|[6-9])[\s|-]?(\d{3,4})[\s|-]?(\d{4})$/ .test(control.value);
        if (re){ 
            return null;
        }
        return { "invalidPhone": true};
    }
}