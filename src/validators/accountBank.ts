import { FormControl } from '@angular/forms'; 

//validation example
//한글또는 공백만 가능하게 (nullable)

export class AccountBankValidator {
    static isValid(control: FormControl){
        const re = /^[가-힣\s]+$/ .test(control.value);
        if (re || control.value==''){  // 여기서 nullable 하게
            return null;
        }
        return { "invalidAccountBank": true};
    }
}
