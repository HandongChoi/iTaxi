import { FormControl } from '@angular/forms'; 

//validation example
//영어랑 ,만 가능하게 (한글 숫자 불가) - ,은 히즈넷에서 받아올때 그렇게 받아오는데 그대로 쓸수 있도록

//수정
export class EngNameValidator {
    static isValid(control: FormControl){
        const re =/^[a-zA-Z,\s-_'`"]+$/ .test(control.value);
        if (re){ 
            return null;
        }
        return { "invalidEngName": true};
    }
}