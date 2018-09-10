import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsersProvider } from '../../providers/users/users';
import { EngNameValidator } from '../../validators/engName';
import { AccountNumberValidator } from '../../validators/accountNumber';
import { AccountBankValidator } from '../../validators/accountBank';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  procedure: string = "terms";
  signUpForm:FormGroup;
  loading:Loading;

  termsDisable: boolean = false;
  infoDisable: boolean = true;
  
  userInfo: Object = {
                      studentID: "",
                      phone: "",
                      email: "",
                      korName: "",
                      engName: "",
                      accountBank: "",
                      accountNumber: "",
                      devToken: "",
                      isPush: "",
                      isNoti: "",
                    } 

  constructor(public navCtrl:NavController, public navParams: NavParams, public authProvider:AuthProvider, 
    public loadingCtrl:LoadingController, public alertCtrl:AlertController, formBuilder:FormBuilder,
    public af: AngularFireDatabase, public userService: UsersProvider,
    public platform:Platform) {
      let backAction = platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
        backAction();
      }, 2)
      this.userInfo = this.navParams.data.userInfo;
      this.userInfo['isPush'] = true;
      this.userInfo['isNoti'] = true;
      this.signUpForm = formBuilder.group({
        engName: [this.userInfo['engName'], EngNameValidator.isValid],
        email: [this.userInfo['email'], Validators.compose([Validators.required, EmailValidator.isValid])],
        phone: [this.userInfo['phone'], Validators.compose([Validators.required, ])],
        accountBank: [this.userInfo['accountBank'],AccountBankValidator.isValid],
        accountNumber: [this.userInfo['accountNumber'],AccountNumberValidator.isValid]
      });
  }

  signUpUser() {
    this.userInfo['engName']=this.signUpForm.value.engName;
    this.userInfo['email']=this.signUpForm.value.email;
    this.userInfo['phone']=this.signUpForm.value.phone;
    this.userInfo['accountBank']=this.signUpForm.value.accountBank;
    this.userInfo['accountNumber']=this.signUpForm.value.accountNumber;
              
    var msg = "<br>Student ID : " + this.userInfo['studentID'] + "<br>" + 
            "Korean Name : " + this.userInfo['korName'] + "<br>" + 
            "English Name : " + this.userInfo['engName']  + "<br>" + 
            "Email : " + this.userInfo['email'] + "<br>" +
            "Phone Number : " + this.userInfo['phone'] + "<br>" +
            "Bank name of your account : " + this.userInfo['accountBank'] + "<br>" +
            "Account number : " + this.userInfo['accountNumber'] + "<br>" ;

    let alert = this.alertCtrl.create({
      title: '계정 만들기',
      subTitle: '아래 내용이 맞습니까?',  
      message: msg,
      cssClass: 'custom-alrt',
      buttons: [
        { text: '취소',
          role: 'cancel',
          handler: () => {}
        },
        { text: '확인',
          handler: () => {
            //token setup을 여기서 하자.
            this.authProvider.signupUser(this.userInfo['studentID']).then( () => {
              this.af.object(`/userProfile/${this.userInfo['studentID']}`).set(this.userInfo);
              this.authProvider.loginUser(this.userInfo['studentID']);
            });
          }
        }
      ]  
    });
    alert.present();
  }

  termsAvail(){
    this.procedure='terms';
    this.termsDisable=false;
    this.infoDisable=true;
  }

  allAvail(){
    this.procedure='info';
    this.termsDisable=false;
    this.infoDisable=false;
  }

  /*과거에 비밀번호 확인을 위해 Validator와 같이 썼던 코드
  private equalTo(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let input = control.value;
      let isValid = control.root.value[field_name] === input;
      
      if (!isValid)
        return { 'equalTo': {isValid} }
      else
        return null;
    };
  }*/

  text1 = `iTaxi 이용약관
    이용약관은 다음과 같은 내용을 담고 있습니다.

    제 1 장 총 칙
    제 2 장 권리 및 의무 
    제 3 장 서비스 이용
    제 4 장 계약 해지


    제 1 장 총 칙 


    제 1 조 (목적) 

    본 약관은 한동대학교 CRA iTaxi팀이 제공하는 택시 및 자차 카풀 서비스(이하"서비스"라 합니다)의 이용 조건 및 절차 기타 필요한 제반 사항을 규정하여 상호 신뢰 증진을 목적으로 합니다.

    제 2 조 (용어의 정의)

    1. "회원"은 서비스를 제공받기 위하여 한동대학교 CRA iTaxi팀과 이용계약을 체결하고 이용자ID를 부여받은 자를 말합니다. 

    2. "이용계약"은 서비스를 제공받기 위하여 한동대학교 CRA iTaxi와 체결하는 계약을 말합니다. 

    3. "이용자 ID"는 회원의 식별과 회원의 서비스 이용을 위하여 회원의 한동대학교 학번을 말합니다. 

    4. "비밀번호"는 회원이 사용하는 이용자 ID와 일치된 회원임을 확인하고 회원의 권리와 이익보호를 위하여 회원이 선정한 특정 문자의 조합을 말합니다. 

    5. "해지"는 한동대학교 CRA iTaxi팀또는 회원이 이용계약을 해약하는 것을 말합니다.

    제 3 조 (이용약관의 공시 및 준용) 

    1. 본 약관의 내용은 서비스 메뉴 및 한동대학교 CRA iTaxi팀에 게시하거나 기타의 방법으로 회원들에게 공시함으로서 그 효력을 발생합니다. 

    2. 한동대학교 CRA는 불가피한 사정에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 제 2조 1항의 방법을 통해 효력을 발생합니다.

    제 4 조 (약관외 준칙)
    한동대학교 CRA iTaxi팀은 필요한 경우 서비스 내의 개별항목에 대하여 개별약관 또는 운영원칙(이하 '서비스별 안내'라 합니다)를 정할 수 있으며, 이 약관과 서비스별 안내의 내용이 상충되는 경우에는 서비스별 안내의 내용을 우선하여 적용합니다.


    제 2장 권리 및 의무 


    제 5 조 (이용계약의 성립) 

    1. 본 이용계약은 이용고객의 본 이용약관 내용에 대한 동의와 이용신청에 대하여 한동대학교 CRA iTaxi팀의 이용승낙으로 성립합니다.

    2. 본 이용약관에 대한 동의는 아래 "약관을 모두 읽었으며 동의합니다." 란에 체크를 하셨을 때 이 약관에 동의하는 것으로 간주됩니다.

    제 6 조 (서비스 이용 신청)

    회원에 가입하여 서비스를 이용하고자하는 희망자는 한동대학교 CRA iTaxi팀에서 요청하는 실명 개인 신상정보를 제공해야 합니다.

    제 7 조 (이용 신청의 승낙과 제한)

    1. 한동대학교 CRA iTaxi팀은 제 4조 규정에 의한 이용 신청 고객에 대하여 업무 수행상 또는 기술상의 지장이 없는 경우 원칙적으로 접수 순서에 따라 서비스 이용을 승낙합니다.

    2. 한동대학교 CRA iTaxi팀은 다음 각 호의 1 에 해당하는 이용 신청에 대하여는 이를 승낙하지 아니 합니다.

    1) 실명이 아니거나 타인의 명의를 이용하여 신청한 경우 
    2) 이용계약 신청서의 내용을 허위로 기재한 경우 
    3) 사회의 질서나 미풍양속을 저해할 목적으로 신청한 경우
    4) 부정한 용도로 본 서비스를 이용하고자 하는 경우 

    3. 한동대학교 CRA iTaxi팀은 서비스 이용신청이 다음 각호의 1에 해당하는 경우에는 그 신청에 대하여 승낙 제한사유가 해소될 때까지는 승낙을 유보할 수 있습니다.

    1) 한동대학교 CRA iTaxi팀이 설비의 여유가 없는 경우
    2) 한동대학교 CRA iTaxi팀의 기술상 지장이 있는 경우 
    3) 기타 한동대학교 CRA iTaxi팀의 운영의 어려움이있는 경우

    4. 서버의 시스템 맹점을 이용하여 가입을 하였더라도 정확한 정보가 아닌 것은 한동대학교 CRA iTaxi팀측에서 정확한 정보를 요구 수정할 수 있으며, 이에 불응할 시 회원에게 강제 해지와 같은 조치를 취할 수 있습니다.

    제 8 조 (회원 번호 부여 및 변경 등)

    1. 한동대학교 CRA iTaxi팀은 회원에 대하여 약관에 정하는 바에 따라 이용자 ID를 부여합니다.

    2. 이용자 ID는 다음 각호의 1에 해당하는 경우에는 회원의 요청이나 관리자에 의하여 변경될 수 있습니다.

    1) 이용자 ID가 회원의 전화번호가 등록되어 사생활 침해의 우려가 있는 경우
    2) 타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우 
    3) 기타 회원이 합리적인 사유를 제시하는 경우 

    3. 기타 회원이 이용신청 시 기재한 사항을 변경할 경우에는 관련 메뉴를 이용하여 회원이 수정을 할 수 있습니다.

    제 9 조 (한동대학교 CRA iTaxi팀의 권리 및 의무)

    1. 한동대학교 CRA iTaxi팀은 특별한 사정이 없는 한 회원이 신청한 서비스 제공 개시일부터 서비스를 이용할 수 있도록 합니다.

    2. 한동대학교 CRA iTaxi팀은 본 이용약관에서 정한 바에 따라 지속적으로 안정적 서비스를 제공할 의무가 있습니다.

    3. 한동대학교 CRA iTaxi팀은 서비스 제공과 관련하여 취득한 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설 또는 배포할 수 없으며 상업적 목적으로 사용할 수 없습니다. 다만, 다음의 각 호에 해당하는 경우에는 그러하지 아니합니다.

    1) 정보통신서비스의 제공에 따른 요금 정산을 위하여 필요한 경우
    2) 배송업무상 배송업체에 알려주는 경우
    3) 다른 법률에 특별한 규정이 있는 경우 
    4) 정보통신윤리위원회의 요청이 있는 경우 
    5) 관계 법령에 의하여 수사상 목적으로 정해진 절차와 방법에 따라 관계기관의 요구가 있는 경우

    제 10 조 (회원의 권리 및 의무)

    1. 회원은 한동대학교 CRA iTaxi팀에서 제공하는 모든 서비스와 정보를 제공받을 권리가 있습니다.

    2. 회원은 본 이용약관이나 별도로 정해진 제반 규정, 관계법령의규정 사항을 준수하여야 합니다.

    3. 회원은 한동대학교 CRA iTaxi팀이 규정한 회원의 요건들을 충족해야만 회원의 자격을 유지할 수 있습니다.

    4. 회원은 이 약관 및 관계법령에서 규정 한 사항을 준수해야 하며 부당행위 발견 시 한동대학교 CRA iTaxi팀이 정한 소정의 배상을 해야 합니다.

    5. 회원은 이용 신청 시 기재한 사항이 변경되었을 경우에는 온라인 수정을 해야 합니다.


    제 3장 서비스 이용


    제 11 조 (서비스 이용 시간)

    1. 서비스 이용은 한동대학교 CRA iTaxi팀의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 하며 새로운 서비스로의 교체 기타 '한동대학교 CRA iTaxi팀'가 적절하다고 판단하는 사유에 기하여 현재 제공되는 서비스를 완전히 중단할 수 있습니다.

    2. 컴퓨터 등 정보통신설비의 보수점검 · 교체 및 고장, 통신의 두절 등의 부득이한 사유가 발생한 경우에는 한동대학교 CRA iTaxi팀이 정한 날이나 시간에 일시적으로 서비스가 중단 될 수 있습니다.

    3. 한동대학교 CRA iTaxi팀은 서비스를 특정범위로 분할하여 각 범위별로 이용가능시간을 별도로 지정할 수 있습니다. 다만 이 경우 그 내용을 사전에 공지합니다.

    제 12 조 (회원 번호 관리)

    1. 회원이 등록한 이용자 ID 및 비밀번호에 의하여 발생되는 사용상의 과실 또는 제3자에 의한 부정사용 등에 대한 모든 책임은 해당 회원에게 있습니다. 다만, 한동대학교 CRA의 고의 또는 중과실이 있는 경우에는 그러하지 아니합니다.

    2. 한동대학교 CRA는 이용자 ID에 의하여 제반 이용자 관리업무를 수행하므로 이용고객이 이용자 ID를 변경하고자 하는 경우 한동대학교 CRA가 인정할 만한 사유가 없는 한, 이용자 ID의 변경을 제한할 수 있습니다.

    제 13 조 (게시물의 관리)

    한동대학교 CRA iTaxi팀은 다음 각 호의 1에 해당하는 게시물이나 자료는 임의로 삭제하거나 이동 또는 등록 거부를 할수 있고 경우에 따라서는 경고를 주거나 회원의 활동을 제한할 수 있습니다.

    1) 게시물에 비속어나 비속어를 변형한 단어를 포함하고 있어 글을 읽는 이가 언짢은 기분을 느낀다고 판단될 경우

    2) 게시물에 직접적인 비속어가 사용되지 않았더라도 다른 학우나 교수, 교직원들을 악의적으로 비방하려는 의도가 보인다고 판단될 경우

    3) 게시물에 직접적인 비속어가 사용되지 않았고 다른 학우나 교수, 교직원들을 악의적으로 비방하려는 의도가 없다고 하더라도 한동대학교 사회에 건설적이지 않은 이슈를 몰고 와 학교 내 분열을 일으키는 글이라고 판단될 경우

    4) 타인의 동의 없이 그의 개인신상정보 등을 유출하여 문제의 소지를 유발할 가능성이 있는 게시물

    5) 허위사실을 담고 있는 게시물

    6) 선정적인 내용이 있는 게시물

    7) 유사 혹은 동일한 주제로 짧은 시간 동안 동일 게시판, 혹은 여러 게시판에 도배성으로 게시된 게시물


    제 14 조 (정보의 제공)

    한동대학교 CRA는 회원이 서비스 이용 중 필요가 있다고 인정되는 다양한 정보에 대해서는 전자우편이나 서신우편 등의 방법으로 이용자에게 제공할 수 있습니다.


    <부 칙>


    제 1조 (면책조항)

    1. 한동대학교 CRA iTaxi팀은 천재지변, 전쟁 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.

    2. 한동대학교 CRA iTaxi팀은 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.

    3. 한동대학교 CRA iTaxi팀은 회원이 서비스를 통하여 얻은 자료로 인한 손해 및 서비스 이용 중 발생한 사고에 관하여 책임을 지지 않습니다. 단, 기술적 문제로 인해 발생한 사고는 제외로 한다.

    4. 한동대학교 CRA iTaxi팀은 회원이 서비스에 게재한 각종 정보나 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다.

    제 2조 (약관 외 사항)

    1. 본 약관에 명시되지 않은 사항에 대해서는 관계 법령 또는 전자상거래 관례 및 학교 교칙에 따릅니다.

    2. 본 약관은 2018년 09월 14일부터 적용됩니다.

    이용약관 문의

    이 　　　름　:　최 효 은
    소속 / 직위　:　한동대학교 CRA / iTaxi 팀장
    E - M A I L　:　hguitaxi@gmail.com
  `

  text2 = `iTaxi 개인정보보호정책

  1. 한동 대학교 CRA iTaxi팀은 귀하의 개인정보보호를 매우 중요시하며, [정보통신망이용촉진등에관한법률]상의 개인정보보호 규정 및 정보통신부가 제정한 [개인정보 보호지침]을 준수하고 있습니다.

  한동대학교 CRA iTaxi팀은 개인정보보호방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

  2. 한동대학교 CRA iTaxi팀은 개인정보보호방침의 지속적인 개선을 위하여 개인정보보호 방침을 개정하는데 필요한 절차를 정하고 있습니다. 그리고 개인정보보호방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.

  3. 개인정보 수집에 대한 동의

  한동대학교 CRA iTaxi팀은 귀하께서 한동대학교 CRA의 개인정보보호방침 또는 이용약관의 내용에 대해 '약관을 모두 읽었으며 동의합니다.’ 체크 버튼을 클릭할 수 있는 절차를 마련하여, 체크 버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.

  i7의 개인정보 보호정책은 다음과 같은 내용을 담고 있습니다.

  가. 개인정보의 수집목적 및 이용목적
  나. 세션에 의한 개인정보 수집 
  다. 목적 외 사용 및 제3자에 대한 제공
  라. 개인정보의 열람정정
  마. 개인정보 수집, 이용, 제공에 대한 동의철회
  바. 개인정보의 보유기간 및 이용기간
  사. 개인정보보호를 위한 기술적 대책
  아. 개인정보의 위탁처리
  자. 의견수렴 및 불만처리
  차. 개인정보 관리책임자 


  가. 개인정보의 수집목적 및 이용목적

  1. 한동대학교 CRA iTaxi팀은 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.

  - 서비스제공을 위한 계약의 성립(본인식별 및 본인의사 확인 등)
  - 편리한 서비스 제공을 위한 기본 정보 수집

  2. 단, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활등)는 수집하지 않습니다.

  3. 한동대학교 CRA iTaxi팀은 한동대학교 인트라넷 특성인 정보폐쇄성을 살리기 위하여 귀하에게서 이름과 학번을 수집하고 있습니다. 올바르지 못한 정보를 입력하실 경우 사이트 가입은 거부됩니다. 또한, 편리한 서비스 제공을 위해 귀하의 휴대전화번호 11자리를 수집하고 있습니다.


  나. 세션에 의한 개인정보 수집

  한동대학교 CRA iTaxi팀은 귀하에 대한 정보를 저장하고 수시로 찾아내는 '세션'를 사용 합니다. 세션은 웹사이트가 귀하의 컴퓨터 브라우저(넷스케이프, 인터넷 익스 플로러 등)로 전송하는 소량의 정보입니다. 귀하께서 웹사이트에 접속을 하시면 한동대학교 CRA 의 컴퓨터는 귀하의 브라우저에 있는 세션의 내용을 읽고, 귀하의 추가정보를 귀하의 컴퓨터에서 찾아 접속에 따른 성명 등의 추가 입력 없이 서비스를 제공할 수 있습니다. 세션은 귀하의 컴퓨터는 식별하지만 귀하를 개인적으로 식별하지는 않습니다. 또한 귀하는 세션에 대한 선택권이 있습니다. 웹브라우저의 옵션을 조정함으로써 모든 세션를 다 받아들이거나, 세션이 설치될 때 통지를 보내도록 하거나, 아니면 모든 세션를 거부할 수 있는 선택권을 가질 수 있습니다.


  다. 목적 외 사용 및 제3자에 대한 제공 

  1. 한동대학교 CRA iTaxi팀은 귀하의 개인정보를 개인정보의 수집목적 및 이용목적에서 고지한 범위내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업기관에 제공하지 않습니다.

  2. 그러나 보다 나은 서비스 제공을 위하여 귀하의 개인정보를 제휴기관에게 제공하거나 또는 제휴기관과 공유할 수 있습니다. 개인정보를 제공하거나 공유할 경우에는 사전에 귀하께 제휴기관에 누구인지, 제공 또는 공유되는 개인정보항목이 무엇인지, 왜 그러한 개인정보가 제공되거나 공유되어야 하는지, 그리고 언제까지 어떻게 보호관리 되는지에 대해 개별적으로 전자우편 및 서면을 통해 고지하여 동의를 구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는 제휴기관에게 제공하거나 제휴기관에게 공유하지 않습니다.


  라. 개인정보의 열람정정

  1. 귀하는 언제든지 등록되어 있는 귀하의 개인정보를 열람하거나 정정하실 수 있습니다. 개인정보를 열람하실 경우 메인화면에서 개인관리 메뉴를 이용하시길 바랍니다. 개인정보를 정정하실 경우 메인화면에서 MyPage -> 개인정보수정 버튼을 클릭하시기 바랍니다.

  2. 단 귀하는 이름과 학번을 정정하실 수 없습니다.


  마. 개인정보 수집, 이용, 제공에 대한 동의철회

  1. 회원가입 등을 통해 개인정보의 수집, 이용, 제공에 대해 귀하께서 동의하신 내용을 귀하는 언제든지 철회하실 수 있습니다. 동의철회는 개인정보관리책임자에게 E-mail, 전화, 집적방문 등으로 연락하시면 즉시 개인정보의 삭제 등 필요한 조치를 하겠습니다.

  2. 한동대학교 CRA iTaxi팀은 개인정보의 수집에 대한 동의철회(회원탈퇴)를 개인정보 수집시와 동등한 방법 및 절차로 행사할 수 있도록 필요한 조치를 하겠습니다.

  첫째,이용자들이 사전에 공개에 동의한 경우

  둘째, 서비스 제공에 따른 요금정산을 위하여 필요한 경우

  셋째, 홈페이지에 게시한 이용 약관이나 기타 회원 서비스 등 이용약관 또는 정책을 위반한 경우

  넷째, iTaxi 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우

  다섯째, 기타 법에 의해 요구된다고 선의로 판단되는 경우
  (ex. 관련법에 의거 적법한 절차에 의한 정부/수사기관의 요청이 있는 경우 등)

  여섯째, 통계작성, 학술연구나 시장조사를 위하여 특정개인을 식별할 수 없는 형태로 광고주, 협력업체나 연구단체 등에 제공하는 경우

  일곱째, 이용자의 서비스 이용에 따른 불만사항 및 문의사항(민원사항)의 처리를 위하여 파.항의 고객센터를 운영하는 전문업체에 해당 민원사항의 처리에 필요한 개인정보를 제공하는 경우


  바. 개인정보의 보유기간 및 이용기간

  1. 귀하 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기됩니다.
  - 회원가입정보의 경우, 회원가입을 탈퇴하거나 회원에서 제명된 즉시

  2. 위 보유기간에도 불구하고 계속 보유하여야 할 필요가 있을 경우에는 귀하의 동의를 받겠습니다.


  사. 개인정보보호를 위한 기술적 대책

  한동대학교 CRA iTaxi팀은 귀하의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.

  1. 귀하의개인정보는 특별히 인가된 책임 관리자 이외에 접근 또는 보관, 관리 할 수 없습니다.

  2. 귀하의 개인정보 보호를 위하여 책임자에게 지속적인 개인정보 보호교육을 실시합니다.

  3. 귀하의 비밀번호는 안전하게 암호화되어 저장되기 때문에 관리자도 볼 수 없습니다.


  아. 개인정보의 위탁처리

  한동대학교 CRA iTaxi팀은 서비스 향상을 위해서 귀하의 개인정보를 외부에 위탁하여 처리할 수 있습니다.

  1. 개인정보의 처리를 위탁하는 경우에는 미리 그 사실을 귀하에게 고지하겠습니다.

  2. 개인정보의 처리를 위탁하는 경우에는 위탁계약 등을 통하여 서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 제3자 제공의 금지 및 사고시의 책임부담 등을 명확히 규정하고 당해 계약내용을 서면 또는 전자적으로 보관하겠습니다.


  자. 의견수렴 및 불만처리

  한동대학교 CRA iTaxi팀은 개인정보보호와 관련하여 귀하가 의견과 불만을 제기할 수 있는 창구를 개설하고 있습니다. 개인정보와 관련한 불만이 있으신 분은 한동대학교 CRA iTaxi 의 개인정보 관리책임자에게 의견을 주시면 접수 즉시 조치하여 처리결과를 통보해 드립니다.


  차. 개인정보 관리책임자

  한동대학교 CRA iTaxi팀은 개인정보에 대한 의견수렴 및 불만처리를 담당하는 관리책임자를 지정하고 있습니다. 한동대학교 CRA iTaxi팀의 개인정보 관리책임자는 다음과 같습니다.

  개인 정보 관리 책임자

  이 　　름　: 최 효 은
  소속 / 직위　:　한동대학교 CRA / iTaxi 팀장
  E - M A I L　:　hguitaxi@gmail.com
  `
}
