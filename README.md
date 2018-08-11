This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

현재 구조 사황
- ID로는 studentID로 쓰고 있고 미래에 가입 절차가 hisnet이 아닐 경우 프로젝트 안에 있는 userID를 다른 것으로 다 대체해야 될 것이다.
- list page와 makeRoom page는 택시와 카풀의 거의 유사한 점들 때문에 room['type']에서 그것을 구분짓고 있다.
- chatRoom으로 가는 경로는 appComponent, list, rideHistory, makeRoom, main에서 오는 것으로 보고 있다.
- chatRoom에서는 파베에서 데이터를 불러올때 경로가 type에 따라 나눠진다.
- 채팅방의 접근에 관해서 list페이지에서 관리를한다. 채팅방에 들어갈 수 있고 없고가 list에서 해결이 되니 chatRoomPage에서는 모든 사람들이
  들어가있는 것으로 간주된다.
- 파베에 데이터를 넣을 때 list.push 와 object.set이 따로 있는데 이 2개의 차이점은 파베에 저장 될 때 이름 형식이 어떻게 되냐이다.
  push의 경우 임의의 값을 준다. 그 기준으로 적절하게 쓰면 되고 동시에 list는 말 그대로 list를 다 받아 오고 object는 하나의 객체만
  받아오는 차이점도 있다. 채팅방, 채팅의 경우 의미 있는 이름을 정하기 힘들다고 생각해서 list.push를 쓰고 다른 정렬 기준이 있는 것들은
  object.set으로 db 읽기 시 가독성을 높였다.
- UserService라는 Provider로 Login과 Signup을 제외한 모든 Page의 로그인 정보를 통괄한다.
  Login과 Signup외에는 접근 할 수 있는 루트가 없다고 생각했고 그렇기에 접속하는 시점에서 유저 정보는
  한 번만 모든 활동이 끝날때까지 저장해두면 바뀔 일이 없다고 생각했다. 그리고 그것을 지속적으로 사용한다.
- transportType이 taxi와 carpool 두개만 있다고 가정하고 if == taxi else 구문으로 짠 것이 많다.
- 차마 자체적인 auth 시스템 개발이 힘들 것 같아서 파베 이메일 시스템을 쓰지만 실질적으로 그거는 auth를 사용하기 위해 내가 한동메일로 아이디 가입시켜놨고 비밀번호는 일정하게 주었다. 따라서 로그인 시스템은 login코드에 의거하여 hisnet 정보로 로그인 판단을 하며 대신 앱과 웹에서 세션관리를 위해 파베 로그인 시스템을 도구로써 사용하였다.


- Main 접근 경로 1) Login 2) Signup 3) Appcomponent by auth
- List 접근 경로 1) Main 2) Appcomponent
- MakeRoom 접근 경로 1) List 2) Appcomponent direct
- Chatroom 접근 경로 1) Appcomponent ticket or direct 2) Main ticket 3) MakeRoom 4) RideHistory 
- Setting 접근 경로 1) Appcomponent direct
- PersonalInfo 접근 경로 1) Setting


해야 될 일
- 룸 프로바이더 완전 다 지우기
- 카풀 리스트와 카풀 메이크 룸 모두 지우기
- fcm 공부해서 푸쉬 제대로 하기
- 로그인 유지 하는 방법 적용
- 웹에서 토큰 없이 작동하는 방법 알고 pwa가능한지 알아보기.
- 불필요한 dismiss loading 다 지우기
- singup시에 지금 init가 2번정도 불리고 다른 것도 중복해서 불리는게 있는데 그런것들 정확한 이유 확인해서 버그 고치기. - 대충 promise방식의 부족한 이해로 인해 발생하는 것 같다.


요구 추가 기능
- 회원가입에서 영어 이름에 대한 정규식을 정리(+personInfo 정보 바꾸는 것도 같이.)
- 회원가입에서 휴대폰 번호 입력시 자동 - 입력("")
- 회원가입에서 가입하기 가운데 놓기
- 회원가입 확인란 + 채팅방 만들기 확인란 영어와 한글 디자인 고려
- 로그인 시 5번 이상 시도 시 잠금 기능
- 리스트 페이지에서 공통 집합 필터 기능
  이거는 로직 자체를 파베에서 바로 불러오는 걸로 하지말고 파베에서 불러 왔을 때 다른 곳에 저장 했다가 처리하는 시스템을 생각해보자.
  근데 잘못하면 async를 올바로 사용 할 수 없는 경우가 생기므로 async에 대한 이해를 하고 이 로직으로 접근하자.
- 푸쉬 적용 할 방식들에 추가
- 택시리스트 페이지를 리스트 페이지로 만들기
- 홈 디렉토리 kakaoLogin으로 바꾸고 다른 import된 것들 모두 지우기
- 탈퇴기능. 현재는 못하고 문의로 하게 만들건데 나중에는 30일 이후 자동 계정 삭제가 가능하도록 만들자.