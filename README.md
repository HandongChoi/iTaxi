처음 다운 받았을 시 실행을 위해서

npm install 잊지마세요.

현재 구조 사황
- ID로는 studentID로 쓰고 있고 미래에 가입 절차가 hisnet이 아닐 경우 프로젝트 안에 있는 userID를 다른 것으로 다 대체해야 될 것이다.
- list page와 makeRoom page는 택시와 카풀의 거의 유사한 점들 때문에 room['type']에서 그것을 구분짓고 있다.
- chatRoom에서는 파베에서 데이터를 불러올때 경로가 type에 따라 나눠진다.
- 채팅방의 접근에 관해서 list페이지에서 관리를한다. 채팅방에 들어갈 수 있고 없고가 list에서 해결이 되니 chatRoomPage에서는 모든 사람들이
  들어가있는 것으로 간주된다.
- 방 나가기 기능을 없앰으로써 먹튀 방지를 할 수 있도록 하였다. 문제가 발생할 시 학번으로 사람을 찾을 수 있도록 만들었다.
- 학번은 식별자이자 범죄 위반을 위해 변경 불가능하게 하였고 이름 역시 실명제로 둠으로써 좀 더 안전한 서비스를 추구하도록 하였다.
- 파베에 데이터를 넣을 때 list.push 와 object.set이 따로 있는데 이 2개의 차이점은 파베에 저장 될 때 이름 형식이 어떻게 되냐이다.
  push의 경우 임의의 값을 준다. 그 기준으로 적절하게 쓰면 되고 동시에 list는 말 그대로 list를 다 받아 오고 object는 하나의 객체만
  받아오는 차이점도 있다. 채팅방, 채팅의 경우 의미 있는 이름을 정하기 힘들다고 생각해서 list.push를 쓰고 다른 정렬 기준이 있는 것들은
  object.set으로 db 읽기 시 가독성을 높였다.
- UserService라는 Provider로 Login과 Signup을 제외한 모든 Page의 로그인 정보를 통괄한다.
  Login과 Signup외에는 접근 할 수 있는 루트가 없다고 생각했고 그렇기에 접속하는 시점에서 유저 정보는
  한 번만 모든 활동이 끝날때까지 저장해두면 바뀔 일이 없다고 생각했다. 그리고 그것을 지속적으로 사용한다.
- transportType이 taxi와 carpool 두개만 있다고 가정하고 if == taxi else 구문으로 짠 것이 많다.
- 자체적인 auth 시스템 개발이 힘들 것 같아서 파베 이메일 시스템을 쓰지만 실질적으로 그거는 auth를 사용하기 위해 내가 한동메일로 아이디 가입시켜놨고 비밀번호는             일정하게 주었다. 따라서 로그인 시스템은 login코드에 의거하여 hisnet 정보로 로그인 판단을 하며 대신 앱과 웹에서 세션관리를 위해 파베 로그인 시스템을 도구로써 사용하였다.
- Ridehistory와 Chatroom system자체가 동일한 키로 동일한 정보를 가지고 있다. 따라서 Chatroom에서 방 나가기 혹은 방 들어오기 등
  정보가 지속적으로 바뀌면 Ridehistory를 chatroom.ts에서 동시에 바꿔줘야 한다. (sync를 맞춰주기 위해서.)
  그러므로 구조는 Chatroom이 Main이 되고 Ridehistory는 읽기 전용의 구조를 지닌다.
- 위와 같이 하는 이유는 파베 특성상 깊이가 낮아야지 빠르기 때문에 최대한 낮은 깊이로 만들기 위해서이다.
- 동일한 원리로 chat의 경우 방키로만 관리를 하고 있고 transportType을 구분짓지 않고 관리한다.
  Ridehistory 역시 학번까지만 나눠지지 이후로는 chat과 동일한 원리로 모델링 되어 있다.
- 시간은 로컬로 해놓았기 때문에 같은 시차를 가진 장소에서만 불편함 없이 사용 할 수 있다.
- bugRoom을 이용하기 위해서 파베에 직접 bugRoom url을 만들고 lastChatDate: "2018-01-01"을 입력해줘야한다.

- Main 접근 경로 1) Login 2) Signup 3) Appcomponent by auth
- List 접근 경로 1) Main 2) Appcomponent
- MakeRoom 접근 경로 1) List 2) Appcomponent direct
- Chatroom 접근 경로 1) Appcomponent ticket or direct 2) Main ticket 3) MakeRoom 4) RideHistory 
- Setting 접근 경로 1) Appcomponent direct
- PersonalInfo 접근 경로 1) Setting


요구 추가 기능
- 회원가입에서 영어 이름에 대한 정규식을 정리(+personInfo 정보 바꾸는 것도 같이.)
- 회원가입에서 휴대폰 번호 입력시 자동 - 입력("")
- 회원가입 확인란 + 채팅방 만들기 확인란 영어와 한글 디자인 고려
- 로그인 시 5번 이상 시도 시 잠금 기능
- 탈퇴기능. 현재는 못하고 문의로 하게 만들건데 나중에는 30일 이후 자동 계정 삭제가 가능하도록 만들자.
- 데이터들을 어떻게 관리할지 사라지는 데이터들 관리할 방법 생각하기
- 프로필 사진 추가 및 대화방에 카톡처럼 캐릭터로 나오게 만들기
- 중복되는 몇가지 함수들 한대로 모아서 provider로 제공하기.
- 탑승 예정 티켓들에 대해서 D-Day, Hour 표시해주기.

안드 배포시
- java sdk는 8 version으로 깔고 그 외에것은 다 지우는게 편했다.
- 안드 스튜디오와 brew install gradle을 이용해서 2가지를 깔았다.
- 안드 스튜디오로 sdk platform을 설치해야한다.
- sudo chmod +x /Applications/Android\ Studio.app/Contents/gradle/gradle-4.4/bin/gradle
  npm install
  sudo ionic cordova build android
  명령어로 빌드를 했고 gradle같은 경우 4.4인지 아니면 다른 버전인지 gradle이후 tab을 이용해서 확인 하고 바꾸면 된다.