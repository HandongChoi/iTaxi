import { FormControl } from '@angular/forms'; 

//validation example
//숫자또는 -만 가능하게 (첫번째2글자는 무조건 숫자여야하고, 아무것도 입력하지않은 null상태를 허용함)

export class AccountNumberValidator {
    static isValid(control: FormControl){
        const re = /^[0-9]{2}[0-9-\s]+$/ .test(control.value);
        if (re || control.value==''){ // 여기서 nullable 하게
            return null;
        }
        return { "invalidAccountNumber": true};
    }
}