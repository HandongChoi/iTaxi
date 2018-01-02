import { FormControl } from '@angular/forms'; 

//validation example
//02|031|032|033|041|042|043|044
//051|052|053|054|055|061|062|063|064
//0xx-xxxx-xxxx
//0xx-xxx-xxxx

export class TelValidator {
    static isValid(control: FormControl){
        const re = /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]))-(\d{3,4})-(\d{4})$/ .test(control.value);
        if (re){ 
            return null;
        }
        return { "invalid Telephone Number": true};
    }
}